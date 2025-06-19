# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Core Development:**
```bash
pnpm dev              # Start development server with Turbopack
pnpm build           # Build for production
pnpm start           # Start production server
pnpm lint            # Run ESLint
pnpm lint --fix      # Fix linting issues automatically
pnpm typecheck       # Run TypeScript type checking
```

**Testing:**
```bash
pnpm test            # Run Jest tests
pnpm test:watch      # Run tests in watch mode
pnpm test:coverage   # Generate test coverage report
```

**Utility Scripts:**
```bash
pnpm archive:v1      # Archive v1 components (bash scripts/archive_v1.sh)
pnpm generate:og     # Generate Open Graph images
```

## Architecture Overview

### Tech Stack
- **Framework:** Next.js 15.3.2 with App Router and Turbopack
- **Language:** TypeScript with strict mode
- **Styling:** Tailwind CSS v4 with shadcn/ui components
- **State Management:** Zustand for global state
- **Animation:** Framer Motion for animations and micro-interactions
- **Theme System:** next-themes with semantic CSS variables
- **Testing:** Jest with Testing Library

### Project Structure
```
src/
  app/                     # Next.js App Router pages
    (role)/               # Route groups for experts/providers  
    api/                  # API routes
    layout.tsx            # Root layout with theme provider
    page.tsx              # Homepage
  components/
    ui/                   # shadcn/ui primitives
    layout/               # Header, footer components
    marketing/            # Marketing-specific components
    RevenueCalculator/    # Calculator feature components
    [feature].tsx         # Feature-specific components
  lib/                    # Utilities and business logic
    utils.ts              # Tailwind merge utility
    revenueStore.ts       # Revenue calculator state
    contentMeta.ts        # Content type metadata
  store/                  # Zustand state stores
```

### Component Categories
1. **UI Primitives** (`/components/ui/`) - shadcn/ui components with accessibility
2. **Layout Components** (`/components/layout/`) - Header, footer, navigation
3. **Feature Components** (`/components/`) - HeroTabs, RevenueCalculator, PricingTable
4. **Marketing Components** (`/components/marketing/`) - Stats, LogoCloud, PriceCard

## Critical Development Patterns

### Dark Mode Implementation
**ALWAYS use semantic colors instead of hardcoded colors:**
```css
/* ✅ Use semantic colors */
bg-background        /* Main page background */
bg-card             /* Card/elevated surfaces */
text-foreground      /* Primary text */
text-muted-foreground /* Secondary text */
border-border        /* All borders */

/* ❌ NEVER use hardcoded colors */
bg-white, bg-black, bg-gray-*, text-white, text-black
```

**FOUC Prevention:** Layout includes script in `<head>` to prevent theme flash on page load.

### Animation Best Practices
**Critical Animation Rule for Tab Switching:**
```typescript
// ❌ BREAKS tab switching - animations won't retrigger
<motion.div
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }} // This breaks state-dependent content
>

// ✅ CORRECT for state-dependent content
<motion.div
  animate={{ opacity: 1, y: 0 }} // Always triggers on re-render
>
```

**Use `viewport={{ once: true }}` ONLY for static content that never changes.**

### State Management with Zustand
```typescript
interface StoreState {
  data: DataType;
  loading: boolean;
  setData: (data: DataType) => void;
}

export const useStore = create<StoreState>((set) => ({
  data: null,
  loading: false,
  setData: (data) => set({ data }),
}));
```

### Component Standards
- **Named exports preferred** over default exports (except pages)
- **TypeScript strict mode** - no `any` types
- **Semantic HTML with ARIA** attributes for accessibility
- **Responsive-first design** with mobile breakpoints

## Logo and Asset Rules

**Header/Footer Logo (ALWAYS):**
```typescript
const HEADER_LOGO = "/logos/TrustedApp_Logo-removebg-preview.png"
```

**Expert Profile (TrustedApp experts only):**
```typescript
const TRUSTEDAPP_PFP = "/logos/Trusted_App_PFP-removebg-preview.png"
```

## Testing Configuration
- **Jest** with jsdom environment and Next.js integration
- **Testing Library** for component testing
- **Coverage thresholds:** 80% for branches, functions, lines, statements
- **Path aliases:** `@/*` maps to `src/*`

## Performance Optimizations
- **Turbopack** enabled for development builds
- **Image optimization** with Next.js Image component and remote patterns
- **Bundle optimization** with package imports for framer-motion and lucide-react
- **Hardware acceleration** for animations using transform and opacity

## Business Context
TrustedApp is a SaaS platform connecting experts with service providers. The application features:
- **Dual persona system** (Expert/Provider) with tab-based navigation
- **Revenue calculator** with complex business logic and state management
- **Pricing tiers** with Calendly integration for Enterprise sales
- **Marketing-focused design** with conversion optimization
- **Real user testimonials** and company integrations

## Common Gotchas
1. **Theme flash:** Use suppressHydrationWarning and proper SSR handling
2. **Animation performance:** Only animate transform and opacity properties
3. **Tooltip transparency:** Use explicit styling instead of semantic classes for Radix UI tooltips
4. **Import organization:** React → Next.js → Third-party → Internal → Types
5. **Bundle size:** Check for unused components and duplicate assets regularly

## Documentation Resources
- `/docs/architecture.md` - Comprehensive architecture documentation
- `/docs/TrustedApp-Dev-CheatSheet.md` - Detailed development patterns and examples
- `/docs/README.md` - Project overview and component philosophy

Remember: This is a high-conversion SaaS marketing site with focus on premium design, accessibility, and performance. Always test both light and dark modes during development.