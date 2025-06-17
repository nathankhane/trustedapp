# Hero Tabs Specification

### 1. Purpose
The hero tabs component splits the landing page into two distinct user personas (experts and providers) to increase conversion rates by delivering more targeted messaging and calls-to-action. This segmentation allows us to speak directly to each user type's specific needs and pain points.

### 2. UX Copy
| Key | Expert | Provider |
|-----|--------|----------|
| H1 | "Turn expertise into recurring revenue." | "Book insights from users who live in your product." |
| Sub | "TrustedApp matches you with VC-backed founders…" | "Instantly schedule calls, surveys, and content sessions…" |
| CTA | Sign up → `/experts/onboard` | Start → `/providers/onboard` |

### 3. Interaction Rules
1. Read `?persona=` query param on mount; default to **provider**.
2. Clicking a tab calls `router.replace` with `scroll:false` so the choice persists on reload.
3. Support deep-links from campaigns.

### 4. Visual / Motion
* Gradient backdrop: `from-gray-950 via-gray-900 to-gray-800`
* Active tab style: glassmorphism `bg-white/10 backdrop-blur-lg`
* Cross-fade hero images with `viewTransitionName` (browser-support graceful).

### 5. Inspiration References
* **Posted** – Immediate brand/creator segmentation in hero, minimal nav.
* **Intro** – High-trust, luxury session vibe with large expert thumbnails.
* **Whale** – Simple two-audience toggle that never forces a page change.

### 6. Accessibility
* Tab buttons = `<button role="tab">`, `aria-selected` states.
* Hero images get empty `alt=""`; decorative only.
* Text contrast ≥ AA.

### 7. Analytics
Send `pageview` with `persona` prop to PostHog; segment funnels. 