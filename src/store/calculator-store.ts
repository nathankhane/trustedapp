import { create } from 'zustand';
import { rateMatrix, ADDON_UPLIFT, RUSH, STAGE_MULT, LENGTH_MULT, ContentType, Role, Rarity } from '@/lib/rateMatrix';

export interface CalculatorState {
    // Basic inputs
    role: Role;
    rarity: Rarity;
    contentType: ContentType;
    sessionLength: 30 | 45 | 60 | 90;
    sessionsPerWeek: number;
    weeksPerYear: number;
    revShare: number; // 0-30 (%)
    fillRate: number; // 0.4-1.0

    // Add-ons
    addOns: {
        transcript: boolean;
        memo: boolean;
        followup: boolean;
    };

    // Rush and stage
    rush: boolean;
    stage: "Seed" | "Series A/B" | "Growth" | "Enterprise";

    // Simple mode
    hoursPerWeekSimple: number;
    mode: "simple" | "advanced";

    // Recurring revenue (sharing)
    allowShare: boolean;
    shareRevPct: number; // 0.01-0.20 (1-20%)
    conversionsPerMonth: number; // 0-50
    avgDealSize: number; // pulled from ENV or meta, default 2000

    // Actions
    setRole: (role: Role) => void;
    setRarity: (rarity: Rarity) => void;
    setContentType: (contentType: ContentType) => void;
    setSessionLength: (length: 30 | 45 | 60 | 90) => void;
    setSessionsPerWeek: (sessions: number) => void;
    setWeeksPerYear: (weeks: number) => void;
    setRevShare: (share: number) => void;
    setFillRate: (rate: number) => void;
    setAddOn: (addon: keyof CalculatorState['addOns'], value: boolean) => void;
    setRush: (rush: boolean) => void;
    setStage: (stage: CalculatorState['stage']) => void;
    setHoursPerWeekSimple: (hours: number) => void;
    setMode: (mode: "simple" | "advanced") => void;
    setAllowShare: (allowShare: boolean) => void;
    setShareRevPct: (shareRevPct: number) => void;
    setConversionsPerMonth: (conversionsPerMonth: number) => void;
    setAvgDealSize: (avgDealSize: number) => void;
}

export interface CalculatorResults {
    baseRate: number;
    lengthMultiplier: number;
    addOnMultiplier: number;
    stageMultiplier: number;
    rushFee: number;
    grossPerSession: number;
    netPerSession: number;
    weeklyNet: number;
    monthlyNet: number;
    annualNet: number;
    upfrontNet: number;
    recurringGross: number;
    recurringNet: number;
    totalAnnualNet: number;
}

export const useCalculatorStore = create<CalculatorState>((set, get) => ({
    // Default state
    role: "Individual Contributor",
    rarity: "Common",
    contentType: "discoveryCall",
    sessionLength: 60,
    sessionsPerWeek: 2,
    weeksPerYear: 48,
    revShare: 15, // 15%
    fillRate: 0.8,
    addOns: {
        transcript: false,
        memo: false,
        followup: false,
    },
    rush: false,
    stage: "Seed",
    hoursPerWeekSimple: 2,
    mode: "simple",
    allowShare: false,
    shareRevPct: 0.05, // 5%
    conversionsPerMonth: 2,
    avgDealSize: 2000,

    // Actions
    setRole: (role) => set({ role }),
    setRarity: (rarity) => set({ rarity }),
    setContentType: (contentType) => set({ contentType }),
    setSessionLength: (sessionLength) => set({ sessionLength }),
    setSessionsPerWeek: (sessionsPerWeek) => set({ sessionsPerWeek }),
    setWeeksPerYear: (weeksPerYear) => set({ weeksPerYear }),
    setRevShare: (revShare) => set({ revShare }),
    setFillRate: (fillRate) => set({ fillRate }),
    setAddOn: (addon, value) =>
        set((state) => ({
            addOns: { ...state.addOns, [addon]: value }
        })),
    setRush: (rush) => set({ rush }),
    setStage: (stage) => set({ stage }),
    setHoursPerWeekSimple: (hoursPerWeekSimple) => {
        const state = get();
        const sessionsPerWeek = Math.max(1, Math.round(hoursPerWeekSimple / (state.sessionLength / 60)));
        set({ hoursPerWeekSimple, sessionsPerWeek });
    },
    setMode: (mode) => set({ mode }),
    setAllowShare: (allowShare) => set({ allowShare }),
    setShareRevPct: (shareRevPct) => set({ shareRevPct }),
    setConversionsPerMonth: (conversionsPerMonth) => set({ conversionsPerMonth }),
    setAvgDealSize: (avgDealSize) => set({ avgDealSize }),
}));

// Selector for calculated results
export const useCalculatorResults = (): CalculatorResults => {
    const state = useCalculatorStore();

    const baseRate = rateMatrix[state.contentType][state.role][state.rarity];
    const lengthMultiplier = LENGTH_MULT[state.sessionLength];

    // Calculate add-on multiplier
    const addOnMultiplier = 1 +
        (state.addOns.transcript ? ADDON_UPLIFT.transcript : 0) +
        (state.addOns.memo ? ADDON_UPLIFT.memo : 0) +
        (state.addOns.followup ? ADDON_UPLIFT.followup : 0);

    const stageMultiplier = STAGE_MULT[state.stage];

    // Calculate rush fee
    let rushFee = 0;
    if (state.rush) {
        rushFee = baseRate < 350 ? baseRate * RUSH.pct : RUSH.fee;
    }

    // Formula: gross = baseRate × lengthMultiplier × (1 + Σ addOnPerc) × stageMultiplier + rushFee
    const grossPerSession = baseRate * lengthMultiplier * addOnMultiplier * stageMultiplier + rushFee;

    // net = gross × (1 – revShare)
    const netPerSession = grossPerSession * (1 - state.revShare / 100);

    // Use fill rate for realistic projections
    const effectiveSessionsPerWeek = state.sessionsPerWeek * state.fillRate;

    // weekly = net × sessionsPerWeek × fillRate
    const weeklyNet = netPerSession * effectiveSessionsPerWeek;

    // monthly = weekly × 52 / 12
    const monthlyNet = weeklyNet * 52 / 12;

    // annual = net × weeksPerYear × sessionsPerWeek × fillRate
    const annualNet = netPerSession * state.weeksPerYear * effectiveSessionsPerWeek;

    // Recurring revenue calculations
    const upfrontNet = grossPerSession * (1 - state.revShare / 100);
    const recurringGross = state.allowShare
        ? state.avgDealSize * state.conversionsPerMonth * 12 * state.shareRevPct
        : 0;
    const recurringNet = recurringGross * (1 - state.revShare / 100); // we still take our cut
    const totalAnnualNet = annualNet + recurringNet;

    return {
        baseRate,
        lengthMultiplier,
        addOnMultiplier,
        stageMultiplier,
        rushFee,
        grossPerSession,
        netPerSession,
        weeklyNet,
        monthlyNet,
        annualNet,
        upfrontNet,
        recurringGross,
        recurringNet,
        totalAnnualNet,
    };
}; 