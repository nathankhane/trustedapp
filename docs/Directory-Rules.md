# TrustedApp Directory Rules & Standards

*Last Updated: December 2024*

## 🏗️ **Core Architecture Principles**

### **1. Component Hierarchy (Strict Rules)**

```
src/components/
├── ui/              # 🔧 PURE UI PRIMITIVES ONLY
├── marketing/       # 🎯 MARKETING & BRAND-SPECIFIC
├── layout/         # 📐 LAYOUT & NAVIGATION
├── logos/          # 🎨 LOGO MANAGEMENT
└── [domain].tsx    # 🏢 PAGE-LEVEL COMPONENTS
```

**GOLDEN RULE:** If you can't decide where a component goes, ask:
- Is it a generic UI element? → `ui/`
- Is it marketing/brand specific? → `marketing/`
- Is it layout/navigation? → `layout/`
- Is it page-level logic? → Root `components/`

### **2. App Directory Structure (Next.js 15)**

```
src/app/
├── page.tsx                 # 🏠 MAIN LANDING PAGE
├── solution/page.tsx        # 💡 HIGH-CONVERSION VALUE PROP
├── pricing/page.tsx         # 💰 PRICING & PLANS
├── team/page.tsx           # 👥 TEAM & ABOUT
├── testimonials/page.tsx   # ⭐ SOCIAL PROOF
├── experts/page.tsx        # 🎓 EXPERT PROFILES
├── providers/page.tsx      # 🏢 PROVIDER DIRECTORY
├── login/page.tsx          # 🔐 AUTHENTICATION
├── signup/page.tsx         # ✍️ REGISTRATION
├── privacy-policy/page.tsx # 📄 LEGAL PAGES
├── contactus/page.tsx      # 📞 CONTACT FORMS
├── globals.css             # 🎨 GLOBAL STYLES
├── layout.tsx              # 📐 ROOT LAYOUT
└── favicon.ico             # 🖼️ SITE ICON
```

---

## 📁 **Directory Rules & Conventions**

### **ui/ Components Rules**
- ✅ **DO:** Pure, reusable UI primitives
- ✅ **DO:** Components usable across ANY app
- ❌ **DON'T:** Business logic or brand-specific content
- ❌ **DON'T:** Hard-coded copy or marketing content

**Examples:** `Button`, `Card`, `Input`, `Modal`, `Accordion`

### **marketing/ Components Rules**
- ✅ **DO:** Brand-specific, marketing components
- ✅ **DO:** Components with TrustedApp-specific logic
- ❌ **DON'T:** Generic UI that could be reused elsewhere
- ❌ **DON'T:** Page-level orchestration

**Examples:** `Stats`, `BrandedCTA`, `TrustedAppMetrics`

### **layout/ Components Rules**
- ✅ **DO:** Navigation, headers, footers
- ✅ **DO:** Layout orchestration components
- ❌ **DON'T:** Page content or business logic

**Examples:** `Header`, `Footer`, `Navigation`, `Sidebar`

### **Root components/ Rules**
- ✅ **DO:** Page-level, domain-specific components
- ✅ **DO:** Complex feature sections
- ❌ **DON'T:** Simple UI primitives
- ❌ **DON'T:** Pure marketing content

**Examples:** `FeaturesSection`, `RevenueCalculator`, `PricingComparator`

---

## 🎯 **Naming Conventions**

### **File Naming**
- **Components:** `PascalCase.tsx` (e.g., `FeaturesSection.tsx`)
- **Pages:** `page.tsx` (Next.js convention)
- **Utilities:** `kebab-case.ts` (e.g., `auth-utils.ts`)
- **Types:** `PascalCase.types.ts` (e.g., `User.types.ts`)

### **Component Export Rules**
- ✅ **PREFERRED:** Named exports (`export const Button = ...`)
- ✅ **ALLOWED:** Default exports for pages only
- ❌ **AVOID:** Mixed export patterns in same file

### **Import/Export Patterns**

**✅ GOOD:**
```typescript
// Named export
export const Button = ({ children, ...props }) => { ... }

// Clean re-export
export { FeaturesSection } from './FeaturesSection'
```

**❌ BAD:**
```typescript
// Mixed exports
export default Button
export const ButtonVariant = ...

// Bloated re-exports with unused code
```

---

## 🚀 **Development Workflow Rules**

### **Before Adding Any Component:**
1. **Check existing components** - Don't duplicate!
2. **Determine correct directory** using hierarchy rules
3. **Use descriptive, clear names** (no abbreviations)
4. **Follow naming conventions** strictly
5. **Clean up imports** after any refactor

### **Component Creation Checklist:**
- [ ] Component is in correct directory
- [ ] Uses named export (unless page)
- [ ] Props are properly typed
- [ ] Follows responsive design patterns
- [ ] Includes motion/animations where appropriate
- [ ] No hard-coded copy (use props)

### **Refactoring Rules:**
- [ ] Update ALL imports when moving/renaming
- [ ] Remove unused exports/re-exports
- [ ] Update documentation
- [ ] Test all affected pages
- [ ] Clean up any orphaned files

---

## 🎨 **Asset Management**

### **Logo Rules (CRITICAL)**
- **Header Logo:** ALWAYS `publicimages/logos/TrustedApp_Logo-removebg-preview.png`
- **Footer Logo:** ALWAYS `publicimages/logos/TrustedApp_Logo-removebg-preview.png`
- **Expert PFP:** `publicimages/logos/Trusted_App_PFP-removebg-preview.png` (TrustedApp experts only)
- **Company Logos:** Use respective company logos for external experts

### **Image Organization**
```
public/
├── images/           # 📸 General images
├── logos/           # 🎨 Brand & company logos
└── icons/           # 🔰 UI icons & symbols
```

---

## ⚡ **Performance & Best Practices**

### **Import Rules**
- ✅ **DO:** Direct imports (`import { Button } from '@/components/ui/Button'`)
- ✅ **DO:** Tree-shakeable imports
- ❌ **AVOID:** Barrel imports of large libraries
- ❌ **AVOID:** Importing entire lodash/moment

### **Component Rules**
- ✅ **DO:** Use React Server Components when possible
- ✅ **DO:** Lazy load heavy components
- ✅ **DO:** Minimize bundle size
- ❌ **AVOID:** Large client-side only components

---

## 🔍 **Code Quality Standards**

### **TypeScript Rules**
- ✅ **REQUIRED:** Proper type definitions for all props
- ✅ **REQUIRED:** Interface over `any` type
- ✅ **PREFERRED:** Type inference over explicit types

### **Styling Rules**
- ✅ **REQUIRED:** Tailwind CSS for all styling
- ✅ **PREFERRED:** CSS variables for theme values
- ❌ **AVOID:** Inline styles unless dynamic

### **Testing Considerations**
- 🎯 **RECOMMENDED:** Add Storybook for UI components
- 🎯 **RECOMMENDED:** Unit tests for complex logic
- 🎯 **RECOMMENDED:** E2E tests for critical user flows

---

## 🚨 **Common Mistakes to Avoid**

1. **Wrong Directory Placement**
   - Putting marketing content in `ui/`
   - Putting UI primitives in root `components/`

2. **Import/Export Chaos**
   - Not updating imports after moving files
   - Leaving unused re-exports

3. **Naming Inconsistencies**
   - Using different naming patterns
   - Abbreviating component names

4. **Asset Path Mistakes**
   - Wrong logo paths (especially header/footer)
   - Inconsistent image organization

5. **Component Bloat**
   - Making components too large/complex
   - Not breaking down into smaller pieces

---

## 📚 **Quick Reference Commands**

```bash
# Development
pnpm dev              # Start dev server with Turbopack
pnpm build           # Build for production  
pnpm start           # Start production server
pnpm lint            # Run ESLint
pnpm lint --fix      # Fix linting issues

# Component Creation Template
mkdir src/components/[category]
touch src/components/[category]/ComponentName.tsx
```

---

**⚡ Remember: Consistency is key! Following these rules ensures maintainability, scalability, and developer happiness.**

**📞 Questions?** Update this document when you discover new patterns or edge cases! 