"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";

export default function LoginOne() {
  return (
    <section className="bg-linear-to-b from-muted to-background flex min-h-screen px-4 py-16 md:py-32">
      <form action="" className="max-w-92 m-auto h-fit w-full">
        <div className="p-6">
          <div className="text-center">
            <div className="mx-auto h-10 w-auto flex justify-center">
              <Image
                src="/logos/TrustedApp_Logo-removebg-preview.png"
                alt="TrustedApp Logo"
                width={200}
                height={40}
                className="h-10 w-auto dark:hidden"
              />
              <Image
                src="/logos/TrustedApp_Logo_white.png"
                alt="TrustedApp Logo"
                width={200}
                height={40}
                className="h-10 w-auto hidden dark:block"
              />
            </div>
            <h1 className="mt-6 text-balance text-xl font-semibold text-center">
              <span className="text-blue-600 block">
                Welcome back to TrustedApp
              </span>
              <span className="block mt-2">Sign in to continue</span>
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
            Don&apos;t have an account ?
            <Button asChild variant="link" className="px-2">
              <Link href="/signup">Create account</Link>
            </Button>
          </p>
        </div>
      </form>
    </section>
  );
}
