"use client";
import { useCalculatorStore } from '@/store/calculator-store';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ContentType, Role, Rarity, CONTENT_META } from '@/lib/rateMatrix';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdvancedMode() {
    const {
        role,
        rarity,
        contentType,
        sessionLength,
        sessionsPerWeek,
        weeksPerYear,
        revShare,
        fillRate,
        addOns,
        rush,
        stage,
        allowShare,
        shareRevPct,
        conversionsPerMonth,
        setRole,
        setRarity,
        setContentType,
        setSessionLength,
        setSessionsPerWeek,
        setWeeksPerYear,
        setRevShare,
        setFillRate,
        setAddOn,
        setRush,
        setStage,
        setAllowShare,
        setShareRevPct,
        setConversionsPerMonth,
    } = useCalculatorStore();

    const [hoveredType, setHoveredType] = useState<ContentType | null>(null);
    const contentTypes = Object.keys(CONTENT_META) as ContentType[];
    const roles: Role[] = ["Individual Contributor", "Manager", "Exec / Founder"];
    const rarities: Rarity[] = ["Common", "Niche", "Rare"];
    const sessionLengths = [30, 45, 60, 90] as const;
    const stages = ["Seed", "Series A/B", "Growth", "Enterprise"] as const;

    // Show warning for high revenue share
    useEffect(() => {
        if (revShare > 25) {

        }
    }, [revShare]);

    // Validation for sharing
    useEffect(() => {
        if (allowShare && shareRevPct === 0) {

        }
    }, [allowShare, shareRevPct]);

    // Show info for hovered type, fallback to selected type
    const displayType = hoveredType || contentType;

    return (
        <TooltipProvider>
            <div className="space-y-8">
                <h3 className="text-lg font-semibold mb-6 text-center">Detailed Configuration</h3>

                {/* Role & Experience */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <Label>Your Role</Label>
                        <Select value={role} onValueChange={setRole}>
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {roles.map((r) => (
                                    <SelectItem key={r} value={r}>{r}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-3">
                        <Label>Tool Expertise Rarity</Label>
                        <Select value={rarity} onValueChange={setRarity}>
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {rarities.map((r) => (
                                    <SelectItem key={r} value={r}>{r}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Content Type & Session Length */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <Label>Content Type</Label>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div>
                                    <Select value={contentType} onValueChange={setContentType}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {contentTypes.map((type) => (
                                                <SelectItem
                                                    key={type}
                                                    value={type}
                                                    onMouseEnter={() => setHoveredType(type)}
                                                    onMouseLeave={() => setHoveredType(null)}
                                                >
                                                    {CONTENT_META[type].label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl z-50">
                                <div className="space-y-2 p-3">
                                    <p className="font-semibold text-popover-foreground">{CONTENT_META[displayType].label}</p>
                                    <p className="text-sm text-muted-foreground">{CONTENT_META[displayType].description}</p>
                                    <div className="text-xs text-muted-foreground space-y-1">
                                        <p><strong>Length:</strong> {CONTENT_META[displayType].typicalLength}</p>
                                        <p><strong>Deliverable:</strong> {CONTENT_META[displayType].deliverables}</p>
                                    </div>
                                </div>
                            </TooltipContent>
                        </Tooltip>
                    </div>

                    <div className="space-y-3">
                        <Label>Session Length</Label>
                        <Select
                            value={sessionLength.toString()}
                            onValueChange={(value) => setSessionLength(parseInt(value) as 30 | 45 | 60 | 90)}
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {sessionLengths.map((length) => (
                                    <SelectItem key={length} value={length.toString()}>
                                        {length} minutes
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Allow Sharing Toggle */}
                <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-50/50 to-indigo-50/50 dark:from-purple-950/20 dark:to-indigo-950/20 border border-purple-200/30 dark:border-purple-800/30 hover:shadow-md transition-all duration-200">
                        <Switch
                            id="allowShare"
                            checked={allowShare}
                            onCheckedChange={setAllowShare}
                        />
                        <Label htmlFor="allowShare" className="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer">
                            Permit provider to republish this content for marketing / sales enablement
                        </Label>
                    </div>

                    <AnimatePresence>
                        {allowShare && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4 pl-6 border-l-2 border-muted"
                            >
                                <div className="space-y-3">
                                    <Label className="text-sm font-medium">
                                        Rev-Share %: {(shareRevPct * 100).toFixed(0)}%
                                    </Label>
                                    <Slider
                                        min={1}
                                        max={20}
                                        step={1}
                                        value={[shareRevPct * 100]}
                                        onValueChange={(value) => setShareRevPct(value[0] / 100)}
                                        className="w-full"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Label className="text-sm font-medium cursor-help">
                                                Expected conversions / mo: {conversionsPerMonth}
                                            </Label>
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl">
                                            <p>Avg for similar experts last quarter</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <Slider
                                        min={0}
                                        max={20}
                                        step={1}
                                        value={[conversionsPerMonth]}
                                        onValueChange={(value) => setConversionsPerMonth(value[0])}
                                        className="w-full"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Add-ons */}
                <div className="space-y-4">
                    <Label className="text-base font-medium">Add-ons (+uplift)</Label>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="transcript"
                                checked={addOns.transcript}
                                onCheckedChange={(checked) => setAddOn('transcript', !!checked)}
                            />
                            <Label htmlFor="transcript" className="text-sm">
                                Transcript (+5%)
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="memo"
                                checked={addOns.memo}
                                onCheckedChange={(checked) => setAddOn('memo', !!checked)}
                            />
                            <Label htmlFor="memo" className="text-sm">
                                Summary Memo (+10%)
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="followup"
                                checked={addOns.followup}
                                onCheckedChange={(checked) => setAddOn('followup', !!checked)}
                            />
                            <Label htmlFor="followup" className="text-sm">
                                Follow-up Call (+8%)
                            </Label>
                        </div>
                    </div>
                </div>

                {/* Rush & Stage */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-950/20 border border-orange-200/30 dark:border-orange-800/30 hover:shadow-md transition-all duration-200">
                        <Switch
                            id="rush"
                            checked={rush}
                            onCheckedChange={setRush}
                        />
                        <Label htmlFor="rush" className="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer">
                            Rush Delivery (+15% or $50)
                        </Label>
                    </div>

                    <div className="space-y-3">
                        <Label>Company Stage</Label>
                        <Select value={stage} onValueChange={setStage}>
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {stages.map((s) => (
                                    <SelectItem key={s} value={s}>{s}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Capacity & Schedule */}
                <div className="space-y-6">
                    <div className="space-y-4">
                        <Label className="text-sm font-medium">
                            Sessions per week: {sessionsPerWeek}
                        </Label>
                        <Slider
                            min={1}
                            max={10}
                            step={1}
                            value={[sessionsPerWeek]}
                            onValueChange={(value) => setSessionsPerWeek(value[0])}
                            className="w-full"
                        />
                    </div>

                    <div className="space-y-4">
                        <Label className="text-sm font-medium">
                            Active weeks per year: {weeksPerYear}
                        </Label>
                        <Slider
                            min={1}
                            max={52}
                            step={1}
                            value={[weeksPerYear]}
                            onValueChange={(value) => setWeeksPerYear(value[0])}
                            className="w-full"
                        />
                    </div>
                </div>

                {/* Financial Settings */}
                <div className="space-y-6">
                    <div className="space-y-4">
                        <Label className="text-sm font-medium">
                            Revenue share: {revShare}%
                        </Label>
                        <Slider
                            min={0}
                            max={30}
                            step={1}
                            value={[revShare]}
                            onValueChange={(value) => setRevShare(value[0])}
                            className="w-full"
                        />
                        <p className="text-xs text-muted-foreground">
                            Platform fee (most experts keep 85-90%)
                        </p>
                    </div>

                    <div className="space-y-4">
                        <Label className="text-sm font-medium">
                            Expected fill rate: {Math.round(fillRate * 100)}%
                        </Label>
                        <Slider
                            min={0.4}
                            max={1}
                            step={0.1}
                            value={[fillRate]}
                            onValueChange={(value) => setFillRate(value[0])}
                            className="w-full"
                        />
                        <p className="text-xs text-muted-foreground">
                            Percentage of available slots that get booked
                        </p>
                    </div>
                </div>
            </div>
        </TooltipProvider>
    );
} 