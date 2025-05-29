import { create } from "zustand";
import { calcRevenue, CalcInput } from "./revenueFormula";

const DEFAULT_INPUT: CalcInput = {
    roleLevel: "Individual Contributor",
    rarityLevel: 1,
    contentType: "Discovery Call",
    sessionMinutes: 60,
    addOns: [],
    rush: false,
    companyStage: "Seed",
    sessionsPerWeek: 2,
    weeksPerYear: 48,
    revShare: 0.15,
    conversionBonus: 0,
};

interface RevenueState {
    input: CalcInput;
    output: ReturnType<typeof calcRevenue>;
    setInput: (p: Partial<CalcInput>) => void;
    toggleAddOn: (name: string) => void;
}

export const useRevenueStore = create<RevenueState>((set) => ({
    input: DEFAULT_INPUT,
    output: calcRevenue(DEFAULT_INPUT),
    setInput: (partial) =>
        set((state) => {
            const input = { ...state.input, ...partial } as CalcInput;
            return { input, output: calcRevenue(input) };
        }),
    toggleAddOn: (name) =>
        set((state) => {
            const has = state.input.addOns.includes(name);
            const addOns = has
                ? state.input.addOns.filter((n) => n !== name)
                : [...state.input.addOns, name];
            const input = { ...state.input, addOns } as CalcInput;
            return { input, output: calcRevenue(input) };
        }),
})); 