export type RoleLevel =
    | "Individual Contributor"
    | "Manager"
    | "Director"
    | "VP"
    | "C‑suite";

export type ContentType =
    | "Discovery Call"
    | "Deep‑Dive Interview"
    | "UX Walk‑through"
    | "Panel / Webinar"
    | "Written Survey"
    | "Advisory Workshop";

export type CompanyStage = "Seed" | "Series A/B" | "Growth" | "Enterprise";

export interface CalcInput {
    roleLevel: RoleLevel;
    rarityLevel: number; // 1‑5
    contentType: ContentType;
    sessionMinutes: number;
    addOns: string[]; // names from ADD_ON_PCT keys
    rush: boolean;
    companyStage: CompanyStage;
    sessionsPerWeek: number;
    weeksPerYear: number;
    revShare: number; // 0‑0.2
    conversionBonus: number;
}

const ROLE_MULT: Record<RoleLevel, number> = {
    "Individual Contributor": 1,
    Manager: 1.3,
    Director: 1.6,
    VP: 2,
    "C‑suite": 2.5,
};

const BASE_RATE: Record<ContentType, number> = {
    "Discovery Call": 400,
    "Deep‑Dive Interview": 700,
    "UX Walk‑through": 500,
    "Panel / Webinar": 300,
    "Written Survey": 100,
    "Advisory Workshop": 1500,
};

const COMPANY_MULT: Record<CompanyStage, number> = {
    Seed: 1,
    "Series A/B": 1.15,
    Growth: 1.3,
    Enterprise: 1.5,
};

const ADD_ON_PCT: Record<string, number> = {
    "Transcript Review": 0.05,
    "Summary Memo": 0.1,
    "Follow‑up Q&A": 0.08,
};

export function calcRevenue(i: CalcInput) {
    const rarityMult = 1 + (i.rarityLevel - 1) * 0.1; // 1 → 1.4
    const rushMult = i.rush ? 1.2 : 1;
    const addOnMult = 1 + i.addOns.reduce((acc, a) => acc + (ADD_ON_PCT[a] ?? 0), 0);

    const sessionFee =
        BASE_RATE[i.contentType] *
        ROLE_MULT[i.roleLevel] *
        rarityMult *
        COMPANY_MULT[i.companyStage] *
        rushMult *
        addOnMult *
        (i.sessionMinutes / 60);

    const grossWeekly = sessionFee * i.sessionsPerWeek;
    const netWeekly = grossWeekly * (1 - i.revShare);
    const annual = netWeekly * i.weeksPerYear + i.conversionBonus;

    return {
        sessionFee,
        grossWeekly,
        netWeekly,
        annual,
        monthly: annual / 12,
        daily: annual / 365,
    } as const;
} 