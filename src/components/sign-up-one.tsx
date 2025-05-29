"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignUpOne() {
  return (
    <section className="bg-linear-to-b from-muted to-background flex min-h-screen px-4 py-16 md:py-32">
      <form action="" className="max-w-92 m-auto h-fit w-full">
        <div className="p-6">
          <div className="text-center">
            <div className="mx-auto h-10 w-auto flex justify-center">
              <img
                src="/logos/TrustedApp_Logo-removebg-preview.png"
                alt="TrustedApp Logo"
                className="h-10 w-auto dark:hidden"
              />
              <img
                src="/logos/TrustedApp_Logo_white.png"
                alt="TrustedApp Logo"
                className="h-10 w-auto hidden dark:block"
              />
            </div>
            <h1 className="mt-6 text-balance text-xl font-semibold text-center">
              <span className="text-blue-600 block">
                Welcome to TrustedApp
              </span>
              <div className="mt-2">Create an Account</div>
              <div>to Get Started</div>
            </h1>
          </div>

          <div className="space-y-6 mt-8">
            <div className="space-y-2">
              <Label htmlFor="email" className="block text-sm">
                Email
              </Label>
              <Input
                type="email"
                required
                name="email"
                id="email"
                placeholder="Your email"
                className="bg-background/50"
              />
            </div>

            <Button className="w-full" size="default">
              Continue
            </Button>
          </div>
        </div>

        <div className="px-6 text-center">
          <p className="text-muted-foreground text-sm">
            Already have an account ?
            <Button asChild variant="link" className="px-2">
              <Link href="/login">Sign In</Link>
            </Button>
          </p>
        </div>
      </form>
    </section>
  );
}
