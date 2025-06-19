"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [message, setMessage] = React.useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setMessage({
        type: 'success',
        text: 'Thank you for your message! We\'ll get back to you within 24 hours.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        teamSize: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Something went wrong. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section className="py-32">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <h1 className="text-center text-4xl font-semibold lg:text-5xl">
          Contact Sales
        </h1>
        <p className="mt-4 text-center">
          We&apos;ll help you find the right plan and pricing for your business.
        </p>

        <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16">
          <div>
            <h2 className="text-xl font-semibold">
              Let&apos;s get you to the right place
            </h2>
            <p className="mt-4 text-sm">
              Reach out to our sales team! We&apos;re eager to learn more about how
              you plan to use our application.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="**:[&>label]:block mt-12 space-y-6 *:space-y-3"
          >
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required 
              />
            </div>

            <div>
              <Label htmlFor="email">Work Email</Label>
              <Input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required 
              />
            </div>

            <div>
              <Label htmlFor="country">Country/Region</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Country/Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">DR Congo</SelectItem>
                  <SelectItem value="2">United States</SelectItem>
                  <SelectItem value="3">France</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="website">Company Website</Label>
              <Input 
                type="url" 
                id="website" 
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
              />
              <span className="text-muted-foreground inline-block text-sm">
                Must start with &apos;https&apos;
              </span>
            </div>

            <div>
              <Label htmlFor="job">Job function</Label>
              <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Job Function" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="legal">Legal</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="msg">Message</Label>
              <Textarea 
                id="msg" 
                rows={3} 
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                required
              />
            </div>

            {/* Message */}
            {message && (
              <div className={`p-3 rounded-lg text-sm font-medium ${
                message.type === 'success'
                  ? "bg-green-500/10 text-green-500 border border-green-500/20"
                  : "bg-red-500/10 text-red-500 border border-red-500/20"
              }`}>
                {message.text}
              </div>
            )}

            <Button 
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
