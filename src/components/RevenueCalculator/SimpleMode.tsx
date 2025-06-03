"use client";
import { useCalculatorStore } from '@/store/calculator-store';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ContentType, CONTENT_META } from '@/lib/rateMatrix';

export default function SimpleMode() {
    const {
        hoursPerWeekSimple,
        contentType,
        sessionLength,
        setHoursPerWeekSimple,
        setContentType
    } = useCalculatorStore();

    const contentTypes = Object.keys(CONTENT_META) as ContentType[];

    // Validation: clamp to 10 hours max
    const maxHours = Math.min(10, Math.floor(10 / (sessionLength / 60)));

    return (
        <TooltipProvider>
            <div className="space-y-8">
                <div>
                    <h3 className="text-lg font-semibold mb-6 text-center">Quick Estimate</h3>

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
                                                <SelectItem key={type} value={type}>
                                                    {CONTENT_META[type].label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs bg-white border border-gray-200 shadow-lg z-50 opacity-100">
                                <div className="space-y-2 p-3">
                                    <p className="font-semibold text-gray-900">{CONTENT_META[contentType].label}</p>
                                    <p className="text-sm text-gray-700">{CONTENT_META[contentType].description}</p>
                                    <div className="text-xs text-gray-500 space-y-1">
                                        <p><strong>Length:</strong> {CONTENT_META[contentType].typicalLength}</p>
                                        <p><strong>Deliverable:</strong> {CONTENT_META[contentType].deliverables}</p>
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