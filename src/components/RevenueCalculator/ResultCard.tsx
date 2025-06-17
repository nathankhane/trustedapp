"use client";
import { useCalculatorResults, useCalculatorStore } from '@/store/calculator-store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

export default function ResultCard() {
    const {
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
    } = useCalculatorResults();

    const { allowShare, shareRevPct, conversionsPerMonth, avgDealSize } = useCalculatorStore();

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    // Calculate waterfall percentages for animation
    const totalGross = grossPerSession;
    const basePercentage = (baseRate * lengthMultiplier / totalGross) * 100;
    const addOnPercentage = ((baseRate * lengthMultiplier * (addOnMultiplier - 1)) / totalGross) * 100;
    const stagePercentage = ((baseRate * lengthMultiplier * addOnMultiplier * (stageMultiplier - 1)) / totalGross) * 100;
    const rushPercentage = (rushFee / totalGross) * 100;

    const waterfallItems = [
        { label: 'Base Rate', value: baseRate * lengthMultiplier, percentage: basePercentage, color: 'bg-blue-500' },
        { label: 'Add-ons', value: baseRate * lengthMultiplier * (addOnMultiplier - 1), percentage: addOnPercentage, color: 'bg-green-500' },
        { label: 'Stage Bonus', value: baseRate * lengthMultiplier * addOnMultiplier * (stageMultiplier - 1), percentage: stagePercentage, color: 'bg-purple-500' },
        { label: 'Rush Fee', value: rushFee, percentage: rushPercentage, color: 'bg-orange-500' },
    ].filter(item => item.value > 0);

    return (
        <TooltipProvider>
            <Card className="sticky top-24 h-fit">
                <CardHeader>
                    <CardTitle className="text-center">Revenue Projection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Fee Waterfall */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-muted-foreground">Per Session Breakdown</h4>
                        <div className="space-y-2">
                            {waterfallItems.map((item, index) => (
                                <div key={item.label} className="space-y-1">
                                    <div className="flex justify-between text-xs">
                                        <span>{item.label}</span>
                                        <span className="font-medium">{formatCurrency(item.value)}</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                                        <motion.div
                                            className={`h-full ${item.color}`}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${item.percentage}%` }}
                                            transition={{
                                                duration: 0.8,
                                                delay: index * 0.2,
                                                ease: "easeOut"
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Results */}
                    <div className="space-y-4 pt-4 border-t">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Up-front per session</span>
                            <span className="font-semibold">{formatCurrency(upfrontNet)}</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Weekly net</span>
                            <span className="font-semibold">{formatCurrency(weeklyNet)}</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Monthly net</span>
                            <span className="font-semibold">{formatCurrency(monthlyNet)}</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Annual up-front</span>
                            <span className="font-semibold">{formatCurrency(annualNet)}</span>
                        </div>

                        {/* Recurring Revenue Section */}
                        {allowShare && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-2 pt-2 border-t border-muted"
                            >
                                <div className="flex justify-between items-center">
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <span className="text-sm text-muted-foreground cursor-help underline decoration-dotted">
                                                Projected recurring*
                                            </span>
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl">
                                            <p>assuming {conversionsPerMonth} conversions/mo @ {(shareRevPct * 100).toFixed(0)}%</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <span className="font-semibold text-green-600">{formatCurrency(recurringNet)}</span>
                                </div>
                            </motion.div>
                        )}

                        <div className="flex justify-between items-center pt-3 border-t">
                            <span className="text-base font-medium">
                                {allowShare ? "Total annual (est.)" : "Annual net"}
                            </span>
                            <span className="text-lg font-bold text-primary">
                                {formatCurrency(allowShare ? totalAnnualNet : annualNet)}
                            </span>
                        </div>

                        {/* Recurring Revenue Footnote */}
                        {allowShare && (
                            <p className="text-xs text-muted-foreground italic pt-2">
                                *assuming {conversionsPerMonth} conversions/mo @ {(shareRevPct * 100).toFixed(0)}%
                            </p>
                        )}
                    </div>

                    {/* Multipliers Info */}
                    <div className="space-y-2 pt-4 border-t text-xs text-muted-foreground">
                        <div className="flex justify-between">
                            <span>Length multiplier</span>
                            <span>{lengthMultiplier.toFixed(1)}x</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Add-on multiplier</span>
                            <span>{addOnMultiplier.toFixed(2)}x</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Stage multiplier</span>
                            <span>{stageMultiplier.toFixed(1)}x</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </TooltipProvider>
    );
} 