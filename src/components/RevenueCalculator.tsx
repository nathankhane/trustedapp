"use client";
import { useDebouncedCallback } from "use-debounce";
import { useRevenueStore } from "../lib/revenueStore";
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import { Switch } from "./ui/switch";
import type { RoleLevel, ContentType, CompanyStage } from "../lib/revenueFormula";

const ADD_ONS = [
    { name: "Transcript Review", pct: 5 },
    { name: "Summary Memo", pct: 10 },
    { name: "Follow‑up Q&A", pct: 8 },
];

export default function RevenueCalculator() {
    const { input, output, setInput, toggleAddOn } = useRevenueStore();
    const debounced = useDebouncedCallback(setInput, 60);

    const numberSlider = (
        id: string,
        label: string,
        key: keyof typeof input,
        min: number,
        max: number,
        step: number,
        formatter: (v: number) => string = (v) => String(v)
    ) => (
        <div className="space-y-2">
            <Label htmlFor={id}>{label}: {formatter(input[key] as number)}</Label>
            <Slider
                id={id}
                defaultValue={[input[key] as number]}
                min={min}
                max={max}
                step={step}
                onValueChange={([v]) => debounced({ [key]: v })}
            />
        </div>
    );

    return (
        <form className="grid md:grid-cols-2 gap-12">
            {/* INPUTS */}
            <div className="space-y-10">
                {/* Role */}
                <div className="space-y-2">
                    <Label>Role seniority</Label>
                    <Select
                        value={input.roleLevel}
                        onValueChange={(v) => setInput({ roleLevel: v as RoleLevel })}
                    >
                        <SelectTrigger className="w-[220px]"><SelectValue /></SelectTrigger>
                        <SelectContent>
                            {["Individual Contributor", "Manager", "Director", "VP", "C‑suite"].map((r) => (
                                <SelectItem key={r} value={r}>{r}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Rarity */}
                {numberSlider(
                    "rarity",
                    "Domain rarity",
                    "rarityLevel",
                    1,
                    5,
                    1,
                    (v) => ["Common", "", "", "", "Ultra‑niche"][v - 1] || String(v)
                )}

                {/* Content Type */}
                <div className="space-y-2">
                    <Label>Content type</Label>
                    <Select
                        value={input.contentType}
                        onValueChange={(v) => {
                            const minutes = v === "Written Survey" ? 30 : v === "Panel / Webinar" ? 30 : v === "Advisory Workshop" ? 240 : 60;
                            setInput({ contentType: v as ContentType, sessionMinutes: minutes });
                        }}
                    >
                        <SelectTrigger className="w-[260px]"><SelectValue /></SelectTrigger>
                        <SelectContent>
                            {[
                                "Discovery Call",
                                "Deep‑Dive Interview",
                                "UX Walk‑through",
                                "Panel / Webinar",
                                "Written Survey",
                                "Advisory Workshop",
                            ].map((t) => (
                                <SelectItem key={t} value={t}>{t}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Session length */}
                <div className="space-y-2">
                    <Label>Session length</Label>
                    <Select
                        value={String(input.sessionMinutes)}
                        onValueChange={(v) => setInput({ sessionMinutes: Number(v) })}
                    >
                        <SelectTrigger className="w-[160px]"><SelectValue /></SelectTrigger>
                        <SelectContent>
                            {[30, 45, 60, 90, 240].map((m) => (
                                <SelectItem key={m} value={String(m)}>{m} min</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Core sliders */}
                {numberSlider("sessions", "Sessions per week", "sessionsPerWeek", 0, 20, 1)}
                {numberSlider("weeks", "Weeks per year", "weeksPerYear", 4, 52, 4)}
                {numberSlider(
                    "revshare",
                    "TrustedApp rev‑share",
                    "revShare",
                    0,
                    0.2,
                    0.01,
                    (v) => `${Math.round(v * 100)} %`
                )}

                {/* ADVANCED */}
                <Accordion type="single" collapsible className="pt-4">
                    <AccordionItem value="advanced">
                        <AccordionTrigger>Advanced options</AccordionTrigger>
                        <AccordionContent className="space-y-8">
                            {/* Add‑ons */}
                            <div className="space-y-2">
                                <Label>Add‑ons</Label>
                                {ADD_ONS.map((a) => (
                                    <div key={a.name} className="flex items-center gap-2">
                                        <Checkbox
                                            id={a.name}
                                            checked={input.addOns.includes(a.name)}
                                            onCheckedChange={() => toggleAddOn(a.name)}
                                        />
                                        <label htmlFor={a.name} className="text-sm">{a.name} (+{a.pct}%)</label>
                                    </div>
                                ))}
                            </div>

                            {/* Rush */}
                            <div className="flex items-center gap-4">
                                <Label>Rush (&lt;24h notice)</Label>
                                <Switch
                                    checked={input.rush}
                                    onCheckedChange={(v) => setInput({ rush: v })}
                                />
                            </div>

                            {/* Company Stage */}
                            <div className="space-y-2">
                                <Label>Provider company stage</Label>
                                <Select
                                    value={input.companyStage}
                                    onValueChange={(v) => setInput({ companyStage: v as CompanyStage })}
                                >
                                    <SelectTrigger className="w-[180px]"><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                        {["Seed", "Series A/B", "Growth", "Enterprise"].map((s) => (
                                            <SelectItem key={s} value={s}>{s}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            {/* RESULTS */}
            <Card className="h-fit shadow-2xl sticky top-20">
                <CardContent className="p-8 space-y-6">
                    <h3 className="text-lg font-semibold">Estimated Net Revenue</h3>
                    <dl className="text-sm space-y-1">
                        <div className="flex justify-between"><dt>Per session</dt><dd>${output.sessionFee.toFixed(0)}</dd></div>
                        <div className="flex justify-between"><dt>Weekly</dt><dd>${output.netWeekly.toLocaleString()}</dd></div>
                        <div className="flex justify-between"><dt>Monthly</dt><dd>${output.monthly.toLocaleString()}</dd></div>
                        <div className="flex justify-between font-bold text-indigo-600 text-base"><dt>Annual</dt><dd>${output.annual.toLocaleString()}</dd></div>
                    </dl>
                    <Button className="w-full mt-4">Create My Expert Profile</Button>
                </CardContent>
            </Card>
        </form>
    );
} 