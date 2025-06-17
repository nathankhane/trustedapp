"use client";
import { useCalculatorStore } from '@/store/calculator-store';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ContentType, CONTENT_META } from '@/lib/rateMatrix';
import { useState } from 'react';

export default function SimpleMode() {
    const {
        hoursPerWeekSimple,
        contentType,
        sessionLength,
        setHoursPerWeekSimple,
        setContentType
    } = useCalculatorStore();

    const [hoveredType, setHoveredType] = useState<ContentType | null>(null);
    const contentTypes = Object.keys(CONTENT_META) as ContentType[];

    // Validation: clamp to 10 hours max
    const maxHours = Math.min(10, Math.floor(10 / (sessionLength / 60)));

    // Show info for hovered type, fallback to selected type
    const displayType = hoveredType || contentType;

    return (
        <TooltipProvider>
            <div className="space-y-8">
                <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-center text-foreground">Quick Estimate</h3>

                    {/* Content Type */}
                    <div className="space-y-3 mb-6">
                        <Label htmlFor="content-type" className="text-sm font-medium">
                            What type of sessions will you do?
                        </Label>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div>
                                    <Select value={contentType} onValueChange={setContentType}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select content type" />
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

                    {/* Hours per Week */}
                    <div className="space-y-4">
                        <Label htmlFor="hours-slider" className="text-sm font-medium">
                            Hours per week: {hoursPerWeekSimple} {hoursPerWeekSimple === 1 ? 'hour' : 'hours'}
                        </Label>
                        <Slider
                            id="hours-slider"
                            min={0.5}
                            max={maxHours}
                            step={0.5}
                            value={[hoursPerWeekSimple]}
                            onValueChange={(value) => setHoursPerWeekSimple(value[0])}
                            className="w-full"
                        />
                        <p className="text-xs text-muted-foreground">
                            Based on {sessionLength}-minute sessions
                        </p>
                    </div>
                </div>
            </div>
        </TooltipProvider>
    );
} 