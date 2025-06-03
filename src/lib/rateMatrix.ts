export const CONTENT_META = {
    discoveryCall: {
        label: "Discovery Call",
        typicalLength: "30 min",
        deliverables: "Zoom/Meet recording",
        description: "One-on-one conversation to understand needs, pain points, and workflows",
        baseRateMultiplier: 1.0, // IC Common = $150 baseline
    },
    deepDive: {
        label: "Deep-Dive Interview",
        typicalLength: "60 - 90 min",
        deliverables: "Recording + auto-transcript",
        description: "Extended session diving deep into specific processes, challenges, and solutions",
        baseRateMultiplier: 1.4, // +40% vs Discovery
    },
    uxWalk: {
        label: "UX Walk-through",
        typicalLength: "45 min",
        deliverables: "Screen-share video",
        description: "Step-by-step walkthrough of user interface, workflows, and user experience",
        baseRateMultiplier: 1.25, // +25%
    },
    panel: {
        label: "Panel / Webinar",
        typicalLength: "60 min",
        deliverables: "Multi-expert webinar recording",
        description: "Group discussion with multiple experts sharing diverse perspectives",
        baseRateMultiplier: 1.6, // +60%
    },
    writtenSurvey: {
        label: "Written Survey",
        typicalLength: "Async",
        deliverables: "6-8 Q&A doc",
        description: "Structured questionnaire with detailed written responses - no live time",
        baseRateMultiplier: 0.7, // -30% (no synchronous time)
    },
    advisoryWs: {
        label: "Advisory Workshop",
        typicalLength: "2 h",
        deliverables: "Live workshop deck & notes",
        description: "Interactive workshop providing strategic guidance and actionable recommendations",
        baseRateMultiplier: 2.2, // +120%
    },
} as const;

export const rateMatrix = {
    discoveryCall: {
        "Individual Contributor": { Common: 150, Niche: 250, Rare: 350 },
        Manager: { Common: 200, Niche: 300, Rare: 450 },
        "Exec / Founder": { Common: 300, Niche: 450, Rare: 600 },
    },
    deepDive: {
        "Individual Contributor": { Common: 210, Niche: 350, Rare: 490 },
        Manager: { Common: 280, Niche: 420, Rare: 630 },
        "Exec / Founder": { Common: 420, Niche: 630, Rare: 840 },
    },
    uxWalk: {
        "Individual Contributor": { Common: 188, Niche: 313, Rare: 438 },
        Manager: { Common: 250, Niche: 375, Rare: 563 },
        "Exec / Founder": { Common: 375, Niche: 563, Rare: 750 },
    },
    panel: {
        "Individual Contributor": { Common: 240, Niche: 400, Rare: 560 },
        Manager: { Common: 320, Niche: 480, Rare: 720 },
        "Exec / Founder": { Common: 480, Niche: 720, Rare: 960 },
    },
    writtenSurvey: {
        "Individual Contributor": { Common: 105, Niche: 175, Rare: 245 },
        Manager: { Common: 140, Niche: 210, Rare: 315 },
        "Exec / Founder": { Common: 210, Niche: 315, Rare: 420 },
    },
    advisoryWs: {
        "Individual Contributor": { Common: 330, Niche: 550, Rare: 770 },
        Manager: { Common: 440, Niche: 660, Rare: 990 },
        "Exec / Founder": { Common: 660, Niche: 990, Rare: 1320 },
    },
} as const;

export type ContentType = keyof typeof rateMatrix;
export type Role = keyof typeof rateMatrix[ContentType];
export type Rarity = keyof typeof rateMatrix[ContentType][Role];

export const ADDON_UPLIFT = {
    transcript: 0.05,
    memo: 0.10,
    followup: 0.08
};

export const RUSH = {
    fee: 50,
    pct: 0.15
};

export const STAGE_MULT = {
    Seed: 1,
    "Series A/B": 1.1,
    Growth: 1.2,
    Enterprise: 1.3
};

export const LENGTH_MULT = {
    30: 0.6,
    45: 0.8,
    60: 1,
    90: 1.5
}; 