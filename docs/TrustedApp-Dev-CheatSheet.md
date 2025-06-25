# TrustedApp Development CheatSheet

*Last Updated: December 2024*

## 🚀 **Quick Start Commands**

```bash
# Development
pnpm dev              # Start dev server with Turbopack
pnpm build           # Build for production  
pnpm start           # Start production server
pnpm lint            # Run ESLint
pnpm lint --fix      # Fix linting issues

# Component Creation
mkdir src/components/[category]
touch src/components/[category]/ComponentName.tsx
```

---

## 📦 **Essential Imports & Utilities**

### **Core Utilities**
```typescript
// Utility function for className merging
import { cn } from "@/lib/utils"

// Usage
<div className={cn("base-class", conditionalClass && "active", className)} />
```

### **Theme Management**
```typescript
// Theme store and components
import { useThemeStore, type ThemeMode } from "@/lib/themeStore"
import { ThemeToggle, ThemeToggleCompact } from "@/components/ui/theme-toggle"
import { ThemeProvider } from "@/components/providers/theme-provider"

// Usage
const { mode, setMode, resolvedTheme } = useThemeStore()
```

### **Animation & Motion**
```typescript
// Core animation imports
import { motion, Variants } from "motion/react"
import { AnimatePresence } from "motion/react"

// Custom animation components
import { AnimatedGroup } from "@/components/ui/animated-group"
import { TextEffect } from "@/components/ui/text-effect"
```

### **UI Components (Most Used)**
```typescript
// Essential UI imports
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Icons (Lucide React)
import { Users, ArrowRight, Check, Star, ChevronDown, Sun, Moon, Monitor } from "lucide-react"
```

### **React Hooks (Common Patterns)**
```typescript
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"

// State management (Zustand)
import { useRevenueStore } from "@/lib/revenueStore"
```

---

## 🎯 **Component Patterns**

### **1. Basic Component Structure**
```typescript
import React from "react"
import { cn } from "@/lib/utils"

interface ComponentProps {
  className?: string
  children?: React.ReactNode
  variant?: "default" | "secondary"
}

export const Component = ({ className, children, variant = "default" }: ComponentProps) => {
  return (
    <div className={cn("base-styles", variant === "secondary" && "secondary-styles", className)}>
      {children}
    </div>
  )
}
```

### **2. Theme-Aware Component Pattern**
```typescript
import { useThemeStore } from "@/lib/themeStore"
import { cn } from "@/lib/utils"

export const ThemeAwareComponent = ({ className }: { className?: string }) => {
  const { resolvedTheme } = useThemeStore()
  
  return (
    <div className={cn(
      "base-styles",
      resolvedTheme === "dark" ? "dark-specific-styles" : "light-specific-styles",
      className
    )}>
      {/* Component content */}
    </div>
  )
}
```

### **3. Animated Component Pattern**
```typescript
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

export const AnimatedComponent = ({ items, className }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn("grid gap-4", className)}
    >
      {items.map((item, index) => (
        <motion.div key={index} variants={itemVariants}>
          {item}
        </motion.div>
      ))}
    </motion.div>
  )
}
```

### **4. Search/Filter Pattern**
```typescript
import { useState } from "react"

export const SearchableComponent = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div>
      <input 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      {/* Render filtered items */}
    </div>
  )
}
```

### **5. State Management Pattern (Zustand)**
```typescript
import { create } from "zustand"

interface StoreState {
  data: any[]
  setData: (data: any[]) => void
  updateItem: (id: string, updates: Partial<any>) => void
}

export const useStore = create<StoreState>((set) => ({
  data: [],
  setData: (data) => set({ data }),
  updateItem: (id, updates) => set((state) => ({
    data: state.data.map(item => item.id === id ? { ...item, ...updates } : item)
  }))
}))
```

---

## 🎨 **Animation Presets**

### **AnimatedGroup Presets**
```typescript
// Available presets: "fade", "slide", "scale", "blur", "blur-slide", "zoom", "flip", "bounce", "rotate", "swing"

<AnimatedGroup preset="slide" className="grid gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</AnimatedGroup>
```

### **TextEffect Presets**
```typescript
// Available presets: "blur", "fade-in-blur", "scale", "fade", "slide"
// Per options: "char", "word", "line"

<TextEffect preset="fade-in-blur" per="word">
  Your animated text here
</TextEffect>
```

### **Custom Motion Variants**
```typescript
const slideIn = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.3 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
}
```

---

## 🌙 **Theme System**

### **🚨 CRITICAL: Dark Mode Issues & Solutions**

**Recently Fixed Major Issues:**
- ❌ **globals.css had duplicate/conflicting CSS variables** causing theme inconsistencies
- ❌ **Body hardcoded to `bg-white`** overriding dark mode background
- ❌ **Components using manual dark mode classes** instead of semantic colors
- ❌ **Missing FOUC (Flash of Unstyled Content) prevention**
- ❌ **ThemeProvider not properly configured**

#### **✅ Dark Mode Infrastructure Fixes Applied:**

**1. globals.css Cleanup:**
```css
/* Fixed: Removed duplicate @layer base sections */
/* Fixed: Unified CSS variable definitions */
/* Fixed: Removed hardcoded body { @apply bg-white } */

/* ✅ Correct body styling */
body {
  @apply min-h-screen bg-background font-sans antialiased;
}
```

**2. FOUC Prevention Script:**
```typescript
// Added to layout.tsx <head>
<script
  dangerouslySetInnerHTML={{
    __html: `
      try {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      } catch (_) {}
    `,
  }}
/>
```

**3. Enhanced ThemeProvider:**
```typescript
<NextThemesProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange={false}
  enableColorScheme
>
  {children}
</NextThemesProvider>
```

### **🚨 NEVER Use These (Hardcoded Colors):**
```css
/* Background Colors - AVOID */
bg-white, bg-black, bg-[#hex], bg-gray-*

/* Text Colors - AVOID */  
text-white, text-black, text-gray-*, hover:text-black

/* Manual Dark Mode - AVOID */
bg-white dark:bg-gray-950
text-gray-500 dark:text-gray-400
```

### **✅ ALWAYS Use These (Semantic Colors):**
```css
/* Backgrounds */
bg-background        /* Main page background */
bg-card             /* Card/elevated surfaces */
bg-muted            /* Subtle backgrounds */
bg-popover          /* Popover/dropdown backgrounds */

/* Text Colors */
text-foreground      /* Primary text */
text-muted-foreground /* Secondary/subtle text */
text-card-foreground  /* Text on cards */

/* Interactive Elements */
text-primary         /* Links, buttons, accents */
hover:text-foreground /* Hover states */
border-border        /* All borders */

/* Transparency & Effects */
bg-background/50     /* Semi-transparent backgrounds */
backdrop-blur-sm     /* Glass effects */
```

### **🔧 Component Dark Mode Patterns:**

**Pricing Table Pattern:**
```typescript
// ✅ Correct: Uses manual dark mode for specific design requirements
className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"

// Note: This component kept manual classes for design consistency
// Most components should use semantic colors instead
```

**FloatingTabsPill Pattern:**
```typescript
// ✅ Semantic colors for pills
<div className="inline-flex rounded-full bg-gray-100 dark:bg-gray-800 p-1">
  <button className={cn(
    "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
    active === option
      ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
  )}>
    {option}
  </button>
</div>
```

**RoleHero Background Removal:**
```typescript
// ✅ Conditional background for role-based components
{role !== "neutral" && !className?.includes('bg-white') && (
  <div className={cn("absolute inset-0 bg-gradient-to-br", backgroundClass)} />
)}
```

### **🛡️ Dark Mode Testing Checklist:**
- [ ] Test both light and dark modes on every component
- [ ] Verify no FOUC (flash) on page load/refresh  
- [ ] Check semantic colors render correctly
- [ ] Ensure overlay backgrounds have proper transparency
- [ ] Test theme toggle functionality
- [ ] Verify text contrast meets accessibility standards

### **Theme Toggle Usage**
```typescript
// Floating theme toggle (main implementation)
<FloatingThemeToggle />

// Original inline toggles (if needed elsewhere)
<ThemeToggle />
<ThemeToggleCompact />

// The floating toggle is automatically added in layout.tsx
```

### **Theme Store Integration**
```typescript
import { useThemeStore } from "@/lib/themeStore"

const { mode, setMode, resolvedTheme } = useThemeStore()

// Set theme programmatically
setMode("dark")     // Force dark mode
setMode("light")    // Force light mode  
setMode("system")   // Follow system preference

// Check current resolved theme
if (resolvedTheme === "dark") {
  // Dark mode specific logic
}
```

---

## 💅 **Styling Patterns**

### **Common Tailwind Patterns**
```css
/* Layout */
.container-pattern { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; }
.section-pattern { @apply py-16 lg:py-24; }
.grid-pattern { @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8; }

/* Components */
.card-pattern { @apply bg-card text-card-foreground rounded-2xl shadow-lg border border-border p-6; }
.button-pattern { @apply inline-flex items-center justify-center rounded-md text-sm font-medium; }

/* Text */
.heading-xl { @apply text-4xl lg:text-6xl font-bold tracking-tight; }
.heading-lg { @apply text-3xl lg:text-4xl font-bold; }
.heading-md { @apply text-2xl lg:text-3xl font-semibold; }

/* Interactive */
.hover-lift { @apply transition-transform hover:-translate-y-1; }
.hover-glow { @apply transition-shadow hover:shadow-xl; }

/* Theme-aware */
.theme-surface { @apply bg-background text-foreground; }
.theme-card { @apply bg-card text-card-foreground border-border; }
.theme-muted { @apply bg-muted text-muted-foreground; }
```

### **Responsive Breakpoints**
```css
/* Mobile First Approach */
sm:   /* 640px and up */
md:   /* 768px and up */
lg:   /* 1024px and up */
xl:   /* 1280px and up */
2xl:  /* 1536px and up */
```

### **Dark Mode Specific Styles**
```css
/* Use semantic colors for automatic theme adaptation */
.auto-theme { @apply bg-background text-foreground border-border; }

/* Manual dark mode variants (avoid if possible) */
.manual-theme { @apply bg-white dark:bg-slate-900 text-black dark:text-white; }
```

---

## 🖼️ **Asset Management**

### **Logo Usage**
```typescript
// Header/Footer (ALWAYS use this)
const HEADER_LOGO = "/logos/TrustedApp_Logo-removebg-preview.png"
const FOOTER_LOGO = "/logos/TrustedApp_Logo-removebg-preview.png"

// Expert Profile (TrustedApp experts only)
const TRUSTEDAPP_PFP = "/logos/Trusted_App_PFP-removebg-preview.png"
```

### **Image Optimization**
```typescript
import Image from "next/image"

// Optimized image component
<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={400}
  height={300}
  className="rounded-lg"
  priority // Use for above-the-fold images
/>
```

### **Remote Image Patterns**
```typescript
// Configured domains in next.config.ts
- res.cloudinary.com
- images.unsplash.com
- ik.imagekit.io
- img.logo.dev
```

---

## 🔧 **Configuration Files**

### **TypeScript Config**
```json
// tsconfig.json - Path aliases
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/ui/*": ["./src/components/ui/*"],
      "@/lib/*": ["./src/lib/*"]
    }
  }
}
```

### **Shadcn/ui Config**
```json
// components.json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "baseColor": "neutral",
    "cssVariables": true
  },
  "iconLibrary": "lucide"
}
```

---

## 📱 **Common Page Patterns**

### **Landing Page Structure**
```typescript
export default function Page() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <FeaturesSection />
      <Stats />
      <Testimonials />
      <Faqs />
      <CallToAction />
    </>
  )
}
```

### **Feature Page Structure**
```typescript
export default function FeaturePage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Page Title</h1>
          <p className="text-xl text-muted-foreground">Subtitle</p>
        </div>
        
        <div className="grid gap-8">
          {/* Content sections */}
        </div>
      </div>
    </div>
  )
}
```

---

## 🎭 **Icon Library (Lucide)**

### **Most Used Icons**
```typescript
import {
  // Navigation
  Menu, X, ChevronDown, ArrowRight,
  
  // Actions
  Check, Plus, Minus, Edit, Trash2,
  
  // Social/Business
  Users, UserCheck, Building, Star,
  
  // Communication
  Mail, Phone, MessageCircle, Send,
  
  // Content
  FileText, Image, Video, Download,
  
  // Status
  CheckCircle, AlertCircle, XCircle, Clock,
  
  // Theme
  Sun, Moon, Monitor
} from "lucide-react"
```

### **Icon Usage Pattern**
```typescript
<Users className="size-6 text-blue-600" aria-hidden />
<ArrowRight className="size-4 ml-2" />
<Sun className="size-4 text-amber-500" />
<Moon className="size-4 text-slate-400" />
```

---

## 🚦 **State Management Patterns**

### **Local State (useState)**
```typescript
// Simple state
const [isOpen, setIsOpen] = useState(false)

// Object state
const [form, setForm] = useState({ name: "", email: "" })

// Array state
const [items, setItems] = useState<Item[]>([])
const addItem = (item: Item) => setItems(prev => [...prev, item])
const removeItem = (id: string) => setItems(prev => prev.filter(item => item.id !== id))
```

### **Zustand Store Pattern**
```typescript
// Store definition
interface AppState {
  data: any[]
  loading: boolean
  setData: (data: any[]) => void
  setLoading: (loading: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  data: [],
  loading: false,
  setData: (data) => set({ data }),
  setLoading: (loading) => set({ loading })
}))

// Usage in component
const { data, loading, setData } = useAppStore()
```

### **Theme Store Pattern**
```typescript
// Theme store with persistence
import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: "system",
      resolvedTheme: "light",
      setMode: (mode) => set({ mode }),
      setResolvedTheme: (resolvedTheme) => set({ resolvedTheme }),
    }),
    {
      name: "trustedapp-theme",
      partialize: (state) => ({ mode: state.mode }),
    }
  )
)
```

---

## 🧪 **Testing Patterns**

### **Component Testing Setup**
```typescript
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

test("component renders correctly", () => {
  render(<Component />)
  expect(screen.getByRole("button")).toBeInTheDocument()
})

test("handles user interaction", async () => {
  const user = userEvent.setup()
  render(<Component />)
  
  await user.click(screen.getByRole("button"))
  expect(screen.getByText("Success")).toBeInTheDocument()
})
```

---

## 🔍 **Debugging Helpers**

### **Dev Tools**
```typescript
// Console debugging
console.log("🐛 Debug:", { variable })
console.table(arrayData)
console.group("Function Name")
console.groupEnd()

// React Dev Tools
// Install React Developer Tools browser extension

// Performance monitoring
console.time("operation")
// ... operation
console.timeEnd("operation")
```

### **Common Debug Patterns**
```typescript
// State debugging
useEffect(() => {
  console.log("State changed:", state)
}, [state])

// Props debugging
const Component = (props) => {
  console.log("Props received:", props)
  return <div>...</div>
}
```

---

## ⚡ **Performance Tips**

### **Image Optimization**
```typescript
// Use Next.js Image component
import Image from "next/image"

// Lazy load images below the fold
<Image loading="lazy" />

// Priority load hero images
<Image priority />
```

### **Code Splitting**
```typescript
// Dynamic imports
const DynamicComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <p>Loading...</p>
})

// Lazy load with Suspense
import { lazy, Suspense } from "react"
const LazyComponent = lazy(() => import("./Component"))

<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>
```

### **Bundle Analysis**
```bash
# Analyze bundle size
pnpm build && pnpm analyze
```

---

## 🚨 **Common Gotchas & Solutions**

### **1. Hydration Errors**
```typescript
// Problem: Server/client mismatch
// Solution: Use suppressHydrationWarning or useEffect

const [mounted, setMounted] = useState(false)
useEffect(() => setMounted(true), [])

if (!mounted) return null
return <ClientOnlyComponent />
```

### **2. Image Loading Issues**
```typescript
// Problem: Images not loading
// Solution: Check Next.js config and path

// next.config.ts
images: {
  remotePatterns: [
    { protocol: "https", hostname: "example.com" }
  ]
}
```

### **3. Animation Performance**
```typescript
// Problem: Janky animations
// Solution: Use transform and opacity only

// ✅ Good
.animate { transform: translateY(-10px); opacity: 0.8; }

// ❌ Avoid
.animate { height: 200px; width: 300px; }
```

### **4. Theme Flash Issues**
```typescript
// Problem: Theme flash on page load
// Solution: Use suppressHydrationWarning and proper SSR handling

<html suppressHydrationWarning>
  <body>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </body>
</html>
```

---

## 📚 **Quick References**

### **File Structure Template**
```
src/
  app/
    [page]/
      page.tsx
      loading.tsx
      error.tsx
  components/
    ui/           # Reusable primitives
    marketing/    # Brand-specific
    layout/       # Navigation
    providers/    # Context providers
    [domain].tsx  # Page-level
  lib/
    utils.ts      # Utilities
    store.ts      # State management
    themeStore.ts # Theme management
```

### **Git Workflow**
```bash
# Feature development
git checkout -b feature/component-name
git add .
git commit -m "feat: add ComponentName"
git push origin feature/component-name

# Create PR, merge, cleanup
git branch -d feature/component-name
```

---

**🎯 Pro Tip:** Keep this cheat sheet handy and update it when you discover new patterns or encounter edge cases!

**📞 Need Help?** Check the [Directory Rules](./Directory-Rules.md) for organizational guidelines.

## 🎨 **Color Scheme & Theme System**

### **🚨 CRITICAL: Dark Mode Issues & Solutions**

**Recently Fixed Major Issues:**
- ❌ **globals.css had duplicate/conflicting CSS variables** causing theme inconsistencies
- ❌ **Body hardcoded to `bg-white`** overriding dark mode background
- ❌ **Components using manual dark mode classes** instead of semantic colors
- ❌ **Missing FOUC (Flash of Unstyled Content) prevention**
- ❌ **ThemeProvider not properly configured**

#### **✅ Dark Mode Infrastructure Fixes Applied:**

**1. globals.css Cleanup:**
```css
/* Fixed: Removed duplicate @layer base sections */
/* Fixed: Unified CSS variable definitions */
/* Fixed: Removed hardcoded body { @apply bg-white } */

/* ✅ Correct body styling */
body {
  @apply min-h-screen bg-background font-sans antialiased;
}
```

**2. FOUC Prevention Script:**
```typescript
// Added to layout.tsx <head>
<script
  dangerouslySetInnerHTML={{
    __html: `
      try {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      } catch (_) {}
    `,
  }}
/>
```

**3. Enhanced ThemeProvider:**
```typescript
<NextThemesProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange={false}
  enableColorScheme
>
  {children}
</NextThemesProvider>
```

### **🚨 NEVER Use These (Hardcoded Colors):**
```css
/* Background Colors - AVOID */
bg-white, bg-black, bg-[#hex], bg-gray-*

/* Text Colors - AVOID */  
text-white, text-black, text-gray-*, hover:text-black

/* Manual Dark Mode - AVOID */
bg-white dark:bg-gray-950
text-gray-500 dark:text-gray-400
```

### **✅ ALWAYS Use These (Semantic Colors):**
```css
/* Backgrounds */
bg-background        /* Main page background */
bg-card             /* Card/elevated surfaces */
bg-muted            /* Subtle backgrounds */
bg-popover          /* Popover/dropdown backgrounds */

/* Text Colors */
text-foreground      /* Primary text */
text-muted-foreground /* Secondary/subtle text */
text-card-foreground  /* Text on cards */

/* Interactive Elements */
text-primary         /* Links, buttons, accents */
hover:text-foreground /* Hover states */
border-border        /* All borders */

/* Transparency & Effects */
bg-background/50     /* Semi-transparent backgrounds */
backdrop-blur-sm     /* Glass effects */
```

### **🔧 Component Dark Mode Patterns:**

**Pricing Table Pattern:**
```typescript
// ✅ Correct: Uses manual dark mode for specific design requirements
className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"

// Note: This component kept manual classes for design consistency
// Most components should use semantic colors instead
```

**FloatingTabsPill Pattern:**
```typescript
// ✅ Semantic colors for pills
<div className="inline-flex rounded-full bg-gray-100 dark:bg-gray-800 p-1">
  <button className={cn(
    "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
    active === option
      ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
  )}>
    {option}
  </button>
</div>
```

**RoleHero Background Removal:**
```typescript
// ✅ Conditional background for role-based components
{role !== "neutral" && !className?.includes('bg-white') && (
  <div className={cn("absolute inset-0 bg-gradient-to-br", backgroundClass)} />
)}
```

### **🛡️ Dark Mode Testing Checklist:**
- [ ] Test both light and dark modes on every component
- [ ] Verify no FOUC (flash) on page load/refresh  
- [ ] Check semantic colors render correctly
- [ ] Ensure overlay backgrounds have proper transparency
- [ ] Test theme toggle functionality
- [ ] Verify text contrast meets accessibility standards

### **Theme Toggle Usage**
```typescript
// Floating theme toggle (main implementation)
<FloatingThemeToggle />

// Original inline toggles (if needed elsewhere)
<ThemeToggle />
<ThemeToggleCompact />

// The floating toggle is automatically added in layout.tsx
```

### **Theme Store Integration**
```typescript
import { useThemeStore } from "@/lib/themeStore"

const { mode, setMode, resolvedTheme } = useThemeStore()

// Set theme programmatically
setMode("dark")     // Force dark mode
setMode("light")    // Force light mode  
setMode("system")   // Follow system preference

// Check current resolved theme
if (resolvedTheme === "dark") {
  // Dark mode specific logic
}
```

---

## 🛠️ **Quick Troubleshooting**

### **Platform Compatibility Issues**
```bash
# Issue: "command not found: pnpm" on team member's machine
# Solution: Install Node.js and pnpm for their platform
npm install -g pnpm

# Issue: Tailwind Oxide binary incompatibility  
# Solution: Clean install for current platform
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Issue: Project sharing between different OS
# Solution: Use clean zip command (excludes node_modules)
zip -r trustedapp-clean.zip . -x "node_modules/*" ".next/*" "*.log"
```

### **Common Development Issues**
```bash
# Next.js build errors
rm -rf .next
pnpm dev

# TypeScript compilation issues
pnpm typecheck

# Linting errors
pnpm lint --fix

# Package resolution issues
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### **Emergency Fallbacks**
```bash
# If pnpm fails completely
npm install && npm run dev

# If Node.js version issues
nvm use --lts  # or brew install node (macOS)

# If all else fails
# Download fresh copy from GitHub and follow setup guide
```

**📖 For complete team setup and troubleshooting guide, see:** `docs/team-collaboration-guide.md`

---

## 🎬 **Animation System**

### **🚨 CRITICAL: Animation Performance & Tab Switching**

**Essential Knowledge from Performance Optimization:**

#### **The `viewport={{ once: true }}` Problem & Solution**
```typescript
// ❌ PROBLEM: Using viewport={{ once: true }} breaks tab switching
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }} // 🚨 BREAKS tab switching - animations won't retrigger
>
  Content that changes based on persona/tab state
</motion.div>

// ✅ SOLUTION: Use animate instead of whileInView for state-dependent content
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }} // ✅ Always triggers on re-render
  transition={{ duration: 0.6 }}
>
  Content that changes based on persona/tab state
</motion.div>

// ✅ SAFE: viewport={{ once: true }} OK for static content that never changes
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }} // ✅ Safe for static content
>
  Static content that never changes based on state
</motion.div>
```

#### **Performance vs Functionality Trade-offs**
```typescript
// Rule: Use viewport={{ once: true }} for performance ONLY if content is truly static

// Static sections (headers, footers, unchanging content)
viewport={{ once: true }} // ✅ Performance optimization

// Dynamic sections (content that changes based on tabs/state)
// No viewport={{ once: true }} // ✅ Ensures retriggering
```

### **🎯 Standard Animation Patterns**

#### **1. Staggered Entrance Animations**
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

// Usage
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible" // Use animate for state-dependent content
  className="grid grid-cols-1 md:grid-cols-3 gap-6"
>
  {items.map((item, index) => (
    <motion.div key={index} variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

#### **2. Premium Hover Effects**
```typescript
// Standard button hover
whileHover={{ 
  scale: 1.03, 
  boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
  transition: { duration: 0.2, ease: "easeOut" }
}}

// Card hover with glow effect
whileHover={{
  y: -8,
  scale: 1.02,
  boxShadow: "0 20px 60px rgba(127, 91, 255, 0.15)", // Brand purple glow
  transition: { duration: 0.3, ease: "easeOut" }
}}

// Premium hover with background shift
whileHover={{
  background: "linear-gradient(135deg, rgba(127, 91, 255, 0.1), rgba(20, 233, 86, 0.1))",
  scale: 1.02,
  transition: { duration: 0.3 }
}}
```

#### **3. Shimmer & Gradient Effects**
```typescript
// Shimmer effect for loading states
const shimmerVariants = {
  start: { x: "-100%" },
  end: { x: "100%" }
}

<div className="relative overflow-hidden bg-gray-200 dark:bg-gray-800 rounded-lg">
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
    variants={shimmerVariants}
    animate={isLoading ? "end" : "start"}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "linear"
    }}
  />
  Content
</div>

// Animated gradient backgrounds
const gradientVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  }
}

<motion.div
  variants={gradientVariants}
  animate="animate"
  className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-[length:200%_100%]"
>
  Content
</motion.div>
```

#### **4. Sliding Underlines & Borders**
```typescript
// Animated underline on hover
<motion.div className="relative group">
  <span>Hover me</span>
  <motion.div
    className="absolute bottom-0 left-0 h-0.5 bg-purple-500"
    initial={{ width: 0 }}
    whileHover={{ width: "100%" }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  />
</motion.div>

// Corner accent animation
<motion.div
  className="relative p-6 border border-gray-200 dark:border-gray-800 rounded-xl group"
  whileHover="hover"
>
  <motion.div
    className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500 rounded-tl-xl"
    variants={{
      hover: {
        width: "100%",
        height: "100%",
        borderRadius: "0.75rem",
        transition: { duration: 0.4, ease: "easeOut" }
      }
    }}
  />
  Content
</motion.div>
```

### **🎨 Reduced Motion Support**
```typescript
// ALWAYS include reduced motion support
import { useReducedMotion } from "framer-motion"

const shouldReduceMotion = useReducedMotion()

const animations = shouldReduceMotion ? {
  // Static variants for accessibility
  initial: { opacity: 1 },
  animate: { opacity: 1 }
} : {
  // Full animations
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

<motion.div {...animations}>
  Content
</motion.div>
```

### **⚡ Performance Best Practices**

#### **1. Hardware Acceleration**
```css
/* Add to globals.css for smooth animations */
.motion-safe {
  will-change: transform;
  transform: translateZ(0); /* Force hardware acceleration */
}
```

#### **2. Optimal Transition Properties**
```typescript
// ✅ Performant properties (GPU accelerated)
transform: "translateY(-8px) scale(1.02)"
opacity: 0.8
filter: "blur(4px)"

// ❌ Avoid animating these (causes layout thrashing)
width, height, top, left, margin, padding

// ✅ Use transform instead
scale: 1.1        // instead of width/height
x: 100, y: -50    // instead of top/left
```

#### **3. Animation Intervals & Timing**
```typescript
// Optimal intervals for different effects
staggerChildren: 0.15    // Cards/items
delayChildren: 0.2       // Initial delay
duration: 0.6           // Section entrances
duration: 0.3           // Hover effects
duration: 0.2           // Button interactions

// Shimmer effects - use longer intervals for better performance
transition: {
  duration: 2,           // Slower = better performance
  repeat: Infinity,
  ease: "linear"
}
```

### **🔄 State-Based Animations**
```typescript
// Animation patterns for tab/persona switching
const [activeTab, setActiveTab] = useState("expert")

// Content that needs to retrigger on tab change
<motion.div
  key={activeTab} // Force re-mount for clean transitions
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -20 }}
  transition={{ duration: 0.4 }}
>
  {/* Tab-specific content */}
</motion.div>

// Alternative: State-aware animations without re-mounting
<motion.div
  animate={{
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 }
  }}
  // Trigger animation when activeTab changes
  key={`content-${activeTab}`}
>
  {/* Content */}
</motion.div>
```

### **📱 Mobile-Specific Considerations**
```typescript
// Simplified animations for mobile
const isMobile = window.innerWidth < 768

const mobileVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } }
}

const desktopVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

<motion.div variants={isMobile ? mobileVariants : desktopVariants}>
  Content
</motion.div>
```

### **🚨 Animation Debugging**
```typescript
// Add to development for debugging animations
const debugMotion = {
  initial: { opacity: 0, y: 20, outline: "2px solid red" },
  animate: { opacity: 1, y: 0, outline: "2px solid green" },
  transition: { duration: 2 } // Slow for debugging
}

// Console logging for animation states
<motion.div
  onAnimationStart={() => console.log("Animation started")}
  onAnimationComplete={() => console.log("Animation completed")}
  variants={variants}
>
  Content
</motion.div>
```

---

## 💅 **Styling Patterns**

### **Common Tailwind Patterns**
```css
/* Layout */
.container-pattern { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; }
.section-pattern { @apply py-16 lg:py-24; }
.grid-pattern { @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8; }

/* Components */
.card-pattern { @apply bg-card text-card-foreground rounded-2xl shadow-lg border border-border p-6; }
.button-pattern { @apply inline-flex items-center justify-center rounded-md text-sm font-medium; }

/* Text */
.heading-xl { @apply text-4xl lg:text-6xl font-bold tracking-tight; }
.heading-lg { @apply text-3xl lg:text-4xl font-bold; }
.heading-md { @apply text-2xl lg:text-3xl font-semibold; }

/* Interactive */
.hover-lift { @apply transition-transform hover:-translate-y-1; }
.hover-glow { @apply transition-shadow hover:shadow-xl; }

/* Theme-aware (FIXED PATTERNS) */
.theme-surface { @apply bg-background text-foreground; }
.theme-card { @apply bg-card text-card-foreground border-border; }
.theme-muted { @apply bg-muted text-muted-foreground; }
.theme-transparent { @apply bg-background/80 backdrop-blur-sm; }
```

### **Responsive Breakpoints**
```css
/* Mobile First Approach */
sm:   /* 640px and up */
md:   /* 768px and up */
lg:   /* 1024px and up */
xl:   /* 1280px and up */
2xl:  /* 1536px and up */
```

---

## 🖼️ **Asset Management**

### **Logo Usage**
```typescript
// Header/Footer (ALWAYS use this)
const HEADER_LOGO = "/logos/TrustedApp_Logo-removebg-preview.png"
const FOOTER_LOGO = "/logos/TrustedApp_Logo-removebg-preview.png"

// Expert Profile (TrustedApp experts only)
const TRUSTEDAPP_PFP = "/logos/Trusted_App_PFP-removebg-preview.png"
```

### **Image Optimization**
```typescript
import Image from "next/image"

// Optimized image component
<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={400}
  height={300}
  className="rounded-lg"
  priority // Use for above-the-fold images
/>
```

### **Remote Image Patterns**
```typescript
// Configured domains in next.config.ts
- res.cloudinary.com
- images.unsplash.com
- ik.imagekit.io
- img.logo.dev
```

---

## 🔧 **Configuration Files**

### **TypeScript Config**
```json
// tsconfig.json - Path aliases
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/ui/*": ["./src/components/ui/*"],
      "@/lib/*": ["./src/lib/*"]
    }
  }
}
```

### **Shadcn/ui Config**
```json
// components.json
{
  "rsc": true,
  "tsx": true,
  "style": "new-york",
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

---

## 🌐 **Routing & Navigation**

### **App Router Structure**
```typescript
// src/app/page.tsx - Homepage
// src/app/team/page.tsx - Team page
// src/app/pricing/page.tsx - Pricing page
// src/app/layout.tsx - Root layout

// Dynamic routes
// src/app/experts/[id]/page.tsx
// src/app/providers/[slug]/page.tsx
```

### **Navigation Patterns**
```typescript
import Link from "next/link"
import { usePathname } from "next/navigation"

// Active link styling
const pathname = usePathname()
const isActive = pathname === "/team"

<Link 
  href="/team"
  className={`text-muted-foreground hover:text-foreground transition-colors ${
    isActive ? "text-foreground font-semibold" : ""
  }`}
>
  Team
</Link>
```

---

## 📦 **Component Patterns**

### **UI Component Structure**
```typescript
// src/components/ui/* - Base shadcn components
// src/components/marketing/* - Marketing specific
// src/components/layout/* - Layout components

// Import pattern
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
```

### **Custom Hook Pattern**
```typescript
// src/lib/hooks/useTheme.ts
import { useThemeStore } from "@/lib/themeStore"

export function useTheme() {
  const { mode, setMode, resolvedTheme } = useThemeStore()
  
  return {
    theme: resolvedTheme,
    setTheme: setMode,
    isDark: resolvedTheme === "dark"
  }
}
```

---

## 🚀 **Performance Optimization**

### **Next.js 15 Features**
```typescript
// Turbopack (in dev)
"dev": "next dev --turbopack"

// Static optimization
export const dynamic = 'force-static'

// Streaming
import { Suspense } from 'react'
<Suspense fallback={<Loading />}>
  <SlowComponent />
</Suspense>
```

### **Image & Asset Optimization**
```typescript
// Lazy loading
<Image loading="lazy" />

// Priority loading for hero images
<Image priority />

// Optimized logo sizing
const LOGO_SIZES = {
  header: { width: 120, height: 40 },
  footer: { width: 100, height: 33 }
}
```

---

## 🔍 **Debugging & Development**

### **Common Issues & Solutions**

#### **Hydration Errors**
```typescript
// Use suppressHydrationWarning for theme-dependent content
<html suppressHydrationWarning>

// Client-only components
const [mounted, setMounted] = useState(false)
useEffect(() => setMounted(true), [])
if (!mounted) return <Skeleton />
```

#### **Theme Flash Prevention**
```typescript
// In _document.tsx or layout.tsx
<script dangerouslySetInnerHTML={{
  __html: `(function() {
    try {
      var theme = localStorage.getItem('theme') || 'system'
      if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      }
    } catch (e) {}
  })()`
}} />
```

#### **Color Debugging**
```typescript
// Debug theme state
console.log('Theme mode:', mode)
console.log('Resolved theme:', resolvedTheme)
console.log('System dark:', window.matchMedia('(prefers-color-scheme: dark)').matches)

// Check applied classes
console.log('HTML classes:', document.documentElement.className)
```

---

## 📝 **Code Standards**

### **File Naming**
```
PascalCase: Components (Button.tsx, TeamSection.tsx)
camelCase: Functions, variables (getUserData, isLoggedIn)
kebab-case: Files, folders (team-section.tsx, user-profile/)
UPPER_CASE: Constants (API_BASE_URL, DEFAULT_THEME)
```

### **Import Organization**
```typescript
// 1. React imports
import React, { useState, useEffect } from 'react'

// 2. Next.js imports  
import Link from 'next/link'
import Image from 'next/image'

// 3. Third-party imports
import { motion } from 'framer-motion'

// 4. Internal imports
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// 5. Type imports (last)
import type { ComponentProps } from 'react'
```

---

## 🔧 **Quick Fixes & Snippets**

### **Component Template**
```typescript
"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ComponentNameProps {
  className?: string
  children?: React.ReactNode
}

export function ComponentName({ className, children }: ComponentNameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("bg-card text-card-foreground p-6 rounded-lg", className)}
    >
      {children}
    </motion.div>
  )
}
```

### **Theme-Aware Button**
```typescript
<Button 
  variant="outline"
  className="bg-background/80 backdrop-blur-sm border-border hover:bg-muted transition-colors"
>
  Theme-Aware Button
</Button>
```

---

## 🎯 **Best Practices**

1. **Always use semantic colors** - never hardcode `bg-white`, `text-black`, etc.
2. **Test both light and dark modes** during development
3. **Use transparency for overlays** - `bg-background/80 backdrop-blur-sm`
4. **Add smooth transitions** - `transition-colors duration-200`
5. **Optimize images** with Next.js Image component
6. **Use TypeScript strictly** - no `any` types
7. **Follow component composition** over prop drilling
8. **Keep components small and focused** - single responsibility
9. **Use custom hooks** for complex state logic
10. **Document breaking changes** in this cheat sheet

---

*Last Updated: December 2024 - Post Color Scheme Fix*
*Version: 2.1.0 - Added comprehensive color troubleshooting section*

## 🛠️ **UI Debugging & Common Fixes**

### **1. Tooltip Transparency Issues (Radix UI)**

**Problem:** Tooltips appearing transparent/translucent while dropdowns are opaque

**Root Cause:** Radix UI's `TooltipContent` has default transparency that semantic Tailwind classes (`bg-background`, `bg-popover`) don't fully override.

**Solution:**
```typescript
// ❌ Wrong - Uses semantic classes that don't override Radix defaults
<TooltipContent className="bg-background border border-border">

// ✅ Correct - Explicit styling that forces opacity
<TooltipContent className="bg-white border border-gray-200 shadow-lg z-50 opacity-100">
  <div className="space-y-2 p-3">
    <p className="font-semibold text-gray-900">Title</p>
    <p className="text-sm text-gray-700">Description</p>
    <div className="text-xs text-gray-500">
      <p><strong>Detail:</strong> Value</p>
    </div>
  </div>
</TooltipContent>
```

**Key Fixes:**
- `bg-white` instead of `bg-background` 
- `opacity-100` to force full opacity
- Explicit text colors (`text-gray-900`, `text-gray-700`) instead of semantic classes
- `border-gray-200` to match dropdown styling

### **2. Content Type Selection with Rich Metadata**

**Implementation:**
```typescript
// Content metadata structure
export const CONTENT_META = {
  discoveryCall: {
    label: "Discovery Call",
    typicalLength: "30 min",
    deliverables: "Zoom/Meet recording",
    description: "One-on-one conversation to understand needs, pain points, and workflows",
  },
  // ... more content types
} as const;

// Usage in components
const contentTypes = Object.keys(CONTENT_META) as ContentType[];

// Select with tooltip
<Tooltip>
  <TooltipTrigger asChild>
    <div>
      <Select value={contentType} onValueChange={setContentType}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {contentTypes.map((type) => (
            <SelectItem key={type} value={type}>
              {CONTENT_META[type].label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  </TooltipTrigger>
  <TooltipContent className="max-w-xs bg-white border border-gray-200 shadow-lg z-50 opacity-100">
    <div className="space-y-2 p-3">
      <p className="font-semibold text-gray-900">{CONTENT_META[contentType].label}</p>
      <p className="text-sm text-gray-700">{CONTENT_META[contentType].description}</p>
      <div className="text-xs text-gray-500 space-y-1">
        <p><strong>Length:</strong> {CONTENT_META[contentType].typicalLength}</p>
        <p><strong>Deliverable:</strong> {CONTENT_META[contentType].deliverables}</p>
      </div>
    </div>
  </TooltipContent>
</Tooltip>
```

### **3. Animated Reveal Pattern (Recurring Revenue)**

**Implementation:**
```typescript
import { motion, AnimatePresence } from 'framer-motion';

// Toggle with animated reveal
<div className="space-y-4">
  <div className="flex items-center gap-3">
    <Switch
      id="allowShare"
      checked={allowShare}
      onCheckedChange={setAllowShare}
    />
    <Label htmlFor="allowShare">Enable feature</Label>
  </div>

  <AnimatePresence>
    {allowShare && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-4 pl-6 border-l-2 border-muted"
      >
        {/* Additional controls */}
      </motion.div>
    )}
  </AnimatePresence>
</div>
```

### **4. Debugging Checklist**

**Visual Issues:**
- [ ] Check if using semantic vs explicit Tailwind classes
- [ ] Verify z-index with `z-50` or higher
- [ ] Test with `opacity-100` for transparency issues
- [ ] Use browser dev tools to inspect computed styles

**State Issues:**
- [ ] Console log state values to verify updates
- [ ] Check useEffect dependencies
- [ ] Verify Zustand store selectors are working
- [ ] Test with React Developer Tools

**Component Issues:**
- [ ] Ensure all required props are passed
- [ ] Check import paths are correct
- [ ] Verify component is properly exported
- [ ] Test isolated component in Storybook/standalone
```

## 💰 **Pricing Table Component Patterns**

### **Default Tier Data Structure:**
```typescript
const defaultTiers: PricingTier[] = [
  {
    name: "Self-Serve",
    price: 49,
    yearlyPrice: 49 * 10, // 10 months for yearly
    priceLabel: "$49",
    credits: "per insight",
    description: "",
    features: [
      "Quick user surveys (5-10 min)",
      "Automated matching & scheduling",
      "Basic demographic filters",
      "Email support",
    ],
    popular: false,
  },
  // ... other tiers
]
```

### **Enterprise Button Integration:**
```typescript
// ✅ Calendly integration for Enterprise tier
{tier.name === "Enterprise" ? (
  <a
    href="https://cal.com/trustedapp/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full"
  >
    <Button variant="outline" className="w-full">
      Contact Sales
    </Button>
  </a>
) : (
  <Button onClick={() => handleGetStarted(tier.name)}>
    Get Started
  </Button>
)}
```

### **Pricing Animation Patterns:**
```typescript
// ✅ Pricing card entrance animation
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  viewport={{ once: true }}
>
  {/* Card content */}
</motion.div>

// ✅ Button hover effects
className="hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
```

### **Pricing Table Layout Pattern:**
```typescript
// ✅ Responsive grid with proper constraints
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="grid gap-8 lg:grid-cols-4 lg:gap-6">
    {tiers.map((tier, index) => (
      <motion.div key={tier.name} className="relative max-w-xs mx-auto">
        {/* Pricing card content */}
      </motion.div>
    ))}
  </div>
</div>
```

---

## 🧹 **Codebase Optimization & Maintenance**

*Last Updated: December 2024*

### **Recent Updates (Dec 2024)**

#### **🤝 Team Collaboration & Platform Compatibility**
**Resolved Tailwind Oxide cross-platform issues:**
- Documented platform-specific binary compatibility problems with Tailwind CSS v4 Oxide engine
- Created clean project sharing workflows (Git-based and clean zip files)
- Added comprehensive team setup guides for macOS, Windows, and Linux
- See `docs/team-collaboration-guide.md` for complete team onboarding and troubleshooting

#### **🔗 Cal.com Integration Migration**
**Migrated from Calendly to Cal.com booking system:**
- Updated all booking links from `calendly.com/trustedapp/30min` to `cal.com/trustedapp/30min`
- Streamlined call-to-action flow by removing email collection forms
- Updated footer Contact Us and Help links to direct booking
- Maintained persona-based CTA text (Expert: "Request Access", Provider: "Get Started")
- See `docs/cal-com-integration.md` for complete details

#### **🧹 Codebase Optimization**
**Major cleanup completed to streamline codebase:**

#### **✅ Files Removed (13 unused/duplicate components)**
- `src/components/testimonials.tsx` - Not imported anywhere
- `src/components/testimonials-two.tsx` - Not imported anywhere  
- `src/components/testimonials-four.tsx` - Not imported anywhere
- `src/components/team-section-one.tsx` - Not imported anywhere
- `src/components/faqs-section-two.tsx` - Not imported anywhere
- `src/components/header.tsx` - Duplicate of layout/header.tsx
- `src/components/call-to-action.tsx` - Duplicate of marketing/call-to-action.tsx
- `src/components/footer.tsx` - Duplicate of layout/footer.tsx
- `src/components/logo-cloud.tsx` - Not imported anywhere
- `src/components/marketing/logo-cloud.tsx` - Not imported anywhere
- `src/components/site-header.tsx` - Not imported anywhere
- `src/components/content.tsx` - Not imported, referenced non-existent images
- `src/components/features.tsx` - Unnecessary re-export wrapper

#### **🗂️ Directory Structure Cleanup**
- Removed empty root directories: `components/`, `store/`, `lib/`
- Removed duplicate image directory: `public/publicimages/` (~50+ duplicate files)
- Preserved actually-used images by moving to main `public/images/` directory

#### **🔧 Code Quality Improvements**
- Updated imports: Changed `Features` import to direct `FeaturesSection` import
- Removed debug code: Cleaned up `console.log` and `console.warn` statements
- Fixed dependency consistency: Updated `animated-group.tsx` to use `framer-motion` instead of separate `motion` package
- Fixed image references: Updated paths from deprecated publicimages directory

#### **📊 Optimization Impact**
- ✅ TypeScript compilation passes
- ✅ ESLint passes (only performance warnings for `<img>` tags remain)
- ✅ Zero UI changes - all visible functionality identical
- ✅ Zero breaking changes - all imports and functionality working
- ✅ Reduced bundle size from removing unused components and duplicate assets

### **Maintenance Guidelines**

#### **Before Adding New Components:**
1. Check if similar component already exists
2. Consider if existing component can be extended instead
3. Avoid creating wrapper re-export files unless absolutely necessary
4. Always import new components where they'll be used

#### **Component Cleanup Checklist:**
```bash
# Find unused components
grep -r "import.*ComponentName" src/ || echo "Component not imported"

# Find duplicate images
find public/ -name "*.jpg" -o -name "*.png" -o -name "*.svg" | sort

# Check for debug statements
grep -r "console\." src/

# Check for TODO comments
grep -r "TODO\|FIXME\|XXX\|HACK" src/
```

#### **Regular Maintenance Tasks:**
- Monthly: Run `npm run typecheck` and `npm run lint`
- Before major releases: Check for unused dependencies with `depcheck`
- Quarterly: Review components for duplication or unused code
- When adding images: Check if similar already exists in `public/images/`

---

## 🎬 **Animation System**