TrustedApp Website V 2.0 – Product Requirements Document (PRD)
(built for Cursor all-in-one import — copy/paste straight into docs/PRD.md in your repo)

1. Purpose
Move the marketing site from "rough beta" to conversion-ready, with two high-intent funnels:

Funnel	Primary KPI	Secondary KPI
Experts	Wait-list sign-ups / demo bookings	Revenue-calculator interactions
Providers	Plan trial starts / demo bookings	Average time on pricing page

2. Key Friction We Must Remove
Ambiguity of offer – Users still ask "So what exactly happens?"

Lack of dedicated journeys – One generic page can't serve both sides.

Missing proof & screens – No dashboard imagery, no real testimonials.

3. Competitive Inspiration — PostedApp
What Posted gets right and we'll borrow:

Dual-landing architecture – /creators vs /brands, each with tailored hero, step-flow, FAQs, and CTAs. 
postedapp.com
postedapp.com

3-step "How it works" cards (icon + heading + 1-line body + CTA under every card) to keep scrollers engaged. 
postedapp.com

Metric bar + social-proof wall early in the page to establish traction (e.g., "25 000+ creators, 500 M views"). 
postedapp.com

Repeating end-of-page CTA strip with high-contrast background. 
postedapp.com

4. Information Architecture (public site only)
bash
Copy
Edit
/                   – high-level teaser + role selector
/experts            – funnel for supply side
/providers          – funnel for demand side
/pricing            – table & credit calculator
/case-studies       – 3 launch logos + stories (stub ok)
/about              – team & story
Note: /experts and /providers each reuse a shared dual-layout template (app/(role)/layout.tsx) with slot-based sections so content diverges without code duplication.

5. Page-level Requirements (summarised)
Page	Sections & Components	Copy cues
Home	• Role selector hero (two buttons)
• Quick explainer 3-up cards
• Tier-1 founder wall (real users only)
• KPI bar (lifetime stats + "Updated monthly")
• Universal FAQ 3 items
• Edge-to-edge CTA band	Tagline: "User-powered insight on tap."
Sub-line: "A private marketplace connecting SaaS teams with the people who already run their tool-stack."
Experts	Hero ("Get paid for your stack"); 3-step flow; revenue-calculator embed; testimonial slider; FAQ; signup modal	Mirror Posted's Get Paid to Create rhythm but swap steps: Apply → Pick offers → Share insight → Recurring payouts
Providers	Hero ("Interview power-users in 24 hrs"); 3-step flow; demo dashboard screenshots; pricing preview; KPI bar; case-studies; FAQ; signup modal	Steps: Post request → Match & meet → Own the content & data
Pricing	Toggleable monthly vs pay-per-credit table; comparison chart; trust badges (Stripe, SOC-2, GDPR)	Anchor links from nav and CTA buttons
Footer	Email capture ("Join the wait-list"); nav links; social; ©; theme toggle	Dark variation with subtle gradient

6. Global UX / UI Rules
Topic	Requirement
Stack	Next.js 14 App Router + TypeScript, Tailwind v3, shadcn/ui, Framer Motion.
Brand Palette	#0F0F0F bg, #FAFAFA copy, accent #7F5BFF (primary) + #14E956 (success).
Typography	display-4xl (80/72/64 px clamps) for hero; inter for body; weight 500+ for headings.
Nav	Sticky top-0; max-width container; single CTA ("Request Access") always visible; theme toggle inside right-aligned utility group.
Animations	• Fade-in on section intersect
• Count-up on stat bar
• Button hover: scale 1.03 + shadow-lg.
Responsiveness	Breakpoints: sm 640, md 768, lg 1024, xl 1280, 2xl 1536. No text wrapping issues < lg.
Performance	Image srcset + next/image; Lighthouse 90+ mobile; prefetch route links.
Accessibility	WCAG AA: colour contrast 4.5:1; focus rings; aria-labels on modals.

7. New Components to Build
Component	Description	Acceptance Criteria
RoleHero	Props role, headline, ctaLabel. Split bg gradient + large emoji watermark.	Renders ≤ 1 s, passes Lighthouse a11y heading hierarchy.
StepCard	Icon (svg), title, body, optional CTA. Variants: vertical (mobile) / horizontal (desktop grid).	Clickable area entire card; keyboard focusable.
MetricBar	Array of {label, value, suffix}; count-up on inView.	Stops at correct integer; accessible aria-live="polite".
RevenueCalculator	Existing logic cleaned + moved to /components/calculator.tsx; add toggles for content-sharing revenue.	Inputs debounced 300 ms; outputs update < 16 ms frame.
WaitlistModal	Shadcn <Dialog> + <Form> (name, email, role, company); hits /api/waitlist.	98% + deliverability to Postmark; success toast.

8. Tech & Dev Notes for Cursor
txt
Copy
Edit
• Use the src/** feature-based folder structure:
  ├─ components/
  │   ├─ RoleHero.tsx
  │   ├─ StepCard.tsx
  │   └─ ...
  ├─ app/
      ├─ (role)/
      │   ├─ layout.tsx
      │   ├─ experts/page.tsx
      │   └─ providers/page.tsx
      ├─ pricing/page.tsx
      └─ ...
• Shadcn preset: `className={cn("rounded-2xl shadow-md", props.className)}`
• Framer Motion: `<motion.div initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} />`
• Include `docs/PRD.md` (this file) and `.cursorrules` with style guide.
9. Acceptance Checklist (must pass before merge)
Nav rename & single CTA implemented across all pages.

No duplicate copy in hero; Lighthouse scores 90+/90+/90+.

/experts & /providers routes compile without TS errors.

Revenue-calculator toggle persists choice in localStorage.

Waitlist submissions hit Supabase table & send confirmation email.

Unit tests ≥ 90 % coverage for StepCard, MetricBar, Calculator.

CI deploy previews build cleanly on Vercel without duplicate directories.

### How-It-Works Page

1. **Route**: `/how-it-works` (file `app/how-it-works/page.tsx`).  
2. **Hero** – `<RoleHero variant="neutral">`  
   - Headline: "See how TrustedApp turns feedback into revenue—on both sides."  
   - Sub: "One marketplace, two win-paths."  
   - CTA buttons: "I'm an Expert" → `#experts-flow`, "I'm a Provider" → `#providers-flow`.  

3. **Role flows**  
   - Component: `<StepCardGrid>` (props: `role`, `steps[]`).  
   - Desktop: dual columns; Mobile: shadcn `<Tabs>` with `id=experts-flow` & `id=providers-flow`.  
   - **Experts steps** (titles / bodies):
     1. Apply & Verify — "2-minute form + LinkedIn OAuth. No pay-to-play."  
     2. Pick Offers — "Choose requests that fit your stack. Set your price."  
     3. Record Insight — "Video, survey or 30-min call—it's your pick."  
     4. Get Paid on Repeat — "Earn every time your content is reused. Stripe payouts weekly."  
   - **Providers steps**:
     1. Post Request — "Describe who you need & why."  
     2. Match & Meet — "We surface vetted users—book in 24 hrs."  
     3. Actionable Report — "Auto-transcribed, AI-summarised."  
     4. Repurpose Freely — "Publish snippets, attribute revenue back to the expert."  

4. **Dashboard demo** – `<ImageCarousel>` (3 PNGs in `/public/demo` for now). Drag-scroll via Framer Motion.

5. **Proof bar** – `<MetricBar>` + `<LogoWall>` (monochrome). Stats:
   • "$2.1 M paid out"   • "7 500 experts"   • "24 h avg. match" (timestamp "since Jan 2024").

6. **Pricing teaser** – `<PricingPeek>` mini table with "From $99/mo or pay-per-credit → See full pricing".

7. **FAQ** – shadcn `<Accordion>` (6 Q&A, 3 per role).

8. **CTA strip** – `<DualCTA>` with role-specific waitlist modals.

9. **Nav update** – Replace "Solution" link with "How it Works", active underline on `/how-it-works` and its hash anchors.

10. **SEO** – Add to sitemap, meta title "How TrustedApp Works – Experts & Providers".

11. **Accessibility** – Tabs ARIA Roles, accordions keyboard-navigable, all images have `alt`.

