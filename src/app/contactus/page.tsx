import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactUsPage() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background py-24">
            <Card className="w-full max-w-xl p-10 shadow-xl border-none">
                <h1 className="text-3xl font-bold mb-2 text-center">Contact Us</h1>
                <p className="text-muted-foreground mb-8 text-center">
                    Our team will get back to you within 24 hours. For enterprise, partnership, or support inquiries, please fill out the form below.
                </p>
                <form className="space-y-6">
                    <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" type="text" placeholder="Your name" required />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="you@company.com" required />
                    </div>
                    <div>
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" type="text" placeholder="Company name" />
                    </div>
                    <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="How can we help you?" rows={4} required />
                    </div>
                    <Button type="submit" className="w-full text-base font-semibold py-6 rounded-xl mt-4">
                        Send Message
                    </Button>
                </form>
            </Card>
        </section>
    );
} 