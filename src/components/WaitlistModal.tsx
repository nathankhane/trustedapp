"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export interface WaitlistModalProps {
    trigger?: React.ReactNode;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    className?: string;
}

interface FormData {
    name: string;
    email: string;
    role: string;
    company: string;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
    trigger,
    isOpen,
    onOpenChange,
    className,
}) => {
    const [formData, setFormData] = React.useState<FormData>({
        name: "",
        email: "",
        role: "",
        company: "",
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [message, setMessage] = React.useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage(null);

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage({
                    type: 'success',
                    text: t('waitlist.success')
                });

                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    role: "",
                    company: "",
                });

                // Close modal after a delay
                setTimeout(() => {
                    onOpenChange?.(false);
                    setMessage(null);
                }, 2000);
            } else {
                throw new Error('Failed to submit');
            }
        } catch (error) {
            setMessage({
                type: 'error',
                text: t('waitlist.error')
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const isFormValid = formData.name && formData.email && formData.role && formData.company;

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-background/50 backdrop-blur-sm z-50"
                onClick={() => onOpenChange?.(false)}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    className={cn(
                        "bg-card rounded-2xl shadow-2xl border border-border/50 w-full max-w-md mx-auto",
                        className
                    )}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 pb-4">
                        <h2 className="text-2xl font-bold text-foreground">
                            {t('waitlist.title')}
                        </h2>
                        <button
                            onClick={() => onOpenChange?.(false)}
                            className="p-2 hover:bg-muted rounded-lg transition-colors"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5 text-muted-foreground" />
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4 px-6 pb-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name *</Label>
                            <Input
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                placeholder="Your full name"
                                required
                                className="w-full"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                placeholder="your@email.com"
                                required
                                className="w-full"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="role">Role *</Label>
                            <select
                                id="role"
                                value={formData.role}
                                onChange={(e) => handleInputChange('role', e.target.value)}
                                required
                                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-colors text-foreground"
                            >
                                <option value="">Select your role</option>
                                <option value="founder">Founder</option>
                                <option value="cto">CTO</option>
                                <option value="product-manager">Product Manager</option>
                                <option value="engineer">Engineer</option>
                                <option value="designer">Designer</option>
                                <option value="marketer">Marketer</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="company">Company *</Label>
                            <Input
                                id="company"
                                type="text"
                                value={formData.company}
                                onChange={(e) => handleInputChange('company', e.target.value)}
                                placeholder="Your company name"
                                required
                                className="w-full"
                            />
                        </div>

                        {/* Message */}
                        {message && (
                            <div className={cn(
                                "p-3 rounded-lg text-sm font-medium",
                                message.type === 'success'
                                    ? "bg-[#14E956]/10 text-[#14E956] border border-[#14E956]/20"
                                    : "bg-red-500/10 text-red-500 border border-red-500/20"
                            )}>
                                {message.text}
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex gap-3 pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => onOpenChange?.(false)}
                                className="flex-1"
                            >
                                {t('common.cancel')}
                            </Button>
                            <Button
                                type="submit"
                                disabled={!isFormValid || isSubmitting}
                                className="flex-1 hover:scale-[1.03] transition-transform duration-200 hover:shadow-lg bg-gradient-to-r from-[#7F5BFF] to-purple-600 hover:from-[#7F5BFF]/90 hover:to-purple-600/90"
                            >
                                {isSubmitting ? t('common.loading') : 'Join Waitlist'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}; 