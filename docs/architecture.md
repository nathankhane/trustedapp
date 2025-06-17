# TrustedApp Architecture Documentation

## 📋 Table of Contents
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Component Architecture](#component-architecture)
- [State Management](#state-management)
- [Styling Architecture](#styling-architecture)
- [Theme System](#theme-system)
- [Animation Framework](#animation-framework)
- [Testing Strategy](#testing-strategy)
- [Performance Optimizations](#performance-optimizations)
- [Standards & Patterns](#standards--patterns)

---

## 🛠 Tech Stack

### Core Framework
- **Next.js 15.3.2** - App Router with Turbopack for development
- **React 19** - Latest stable version with concurrent features
- **TypeScript 5** - Strict type checking enabled

### UI & Design
- **Tailwind CSS v4** - Utility-first CSS with CSS variables
- **shadcn/ui** - Radix UI primitives with "New York" design system
- **Radix UI** - Accessible, unstyled UI primitives
- **Lucide React** - Icon library
- **Framer Motion** - Animation and transitions
- **next-themes** - Theme management with system preference detection

### State & Data
- **Zustand** - Lightweight state management
- **Zod** - Schema validation
- **use-debounce** - Input debouncing

### Development & Testing
- **Jest** - Testing framework with jsdom environment
- **Testing Library** - Component testing utilities
- **ESLint** - Code linting with Next.js config
- **TypeScript** - Static type checking

### Fonts & Assets
- **Geist Sans & Mono** - Primary typefaces
- **Image optimization** - Next.js Image with remote patterns

---

## 📁 Project Structure

```
TrustedApp/
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── (role)/             # Route groups for experts/providers
│   │   ├── api/                # API routes
│   │   ├── [pages]/            # Static and dynamic pages
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── globals.css         # Global styles and CSS variables
│   │   └── page.tsx            # Homepage
│   ├── components/             # React components
│   │   ├── ui/                 # shadcn/ui primitives
│   │   ├── layout/             # Layout components (header, footer)
│   │   ├── marketing/          # Marketing-specific components
│   │   ├── providers/          # Context providers
│   │   ├── RevenueCalculator/  # Calculator feature components
│   │   ├── __tests__/          # Component tests
│   │   └── [feature].tsx       # Feature-specific components
│   ├── lib/                    # Utilities and business logic
│   │   ├── utils.ts            # Tailwind merge utility
│   │   ├── i18n.ts             # Internationalization
│   │   ├── rateMatrix.ts       # Business logic for rates
│   │   └── revenueFormula.ts   # Revenue calculations
│   └── store/                  # Zustand state stores
│       └── calculator-store.ts # Revenue calculator state
├── docs/                       # Documentation
├── public/                     # Static assets
├── components.json             # shadcn/ui configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── next.config.ts             # Next.js configuration
├── jest.config.mjs            # Jest testing configuration
└── tsconfig.json              # TypeScript configuration
```

### File Organization Principles
1. **Feature-based organization** - Components grouped by feature/domain
2. **Clear separation of concerns** - UI, logic, state, and utilities separated
3. **Co-location** - Related files (components, tests, types) kept together
4. **Consistent naming** - PascalCase for components, camelCase for utilities

---

## 🎨 Design System

### Brand Colors
```css
--primary: 263 59% 68%           /* #7F5BFF - Primary purple */
--background: 0 0% 100%          /* #FFFFFF - Light mode background */
--foreground: 240 10% 3.9%       /* Near black - Primary text */
--muted: 210 40% 96%             /* Light gray - Muted backgrounds */
--border: 214.3 31.8% 91.4%      /* Light gray - Borders */
```

### Typography Scale
```css
/* Hero Headings */
.heading-hero { @apply text-4xl lg:text-6xl font-bold tracking-tight; }

/* Section Headings */
.heading-xl { @apply text-3xl lg:text-4xl font-bold; }
.heading-lg { @apply text-2xl lg:text-3xl font-semibold; }
.heading-md { @apply text-xl lg:text-2xl font-medium; }

/* Body Text */
.body-lg { @apply text-lg; }
.body-base { @apply text-base; }
.body-sm { @apply text-sm; }
```

### Spacing System
- **Consistent spacing** - 4px base unit (0.25rem)
- **Section padding** - py-16 lg:py-24 for sections
- **Container pattern** - max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- **Grid gaps** - gap-8 lg:gap-12 for component grids

### Border Radius
```css
--radius: 0.5rem               /* Base radius */
border-radius: var(--radius)   /* lg: 8px */
border-radius: calc(var(--radius) - 2px)  /* md: 6px */
border-radius: calc(var(--radius) - 4px)  /* sm: 4px */
```

---

## 🧩 Component Architecture

### Component Categories

#### 1. UI Primitives (`/components/ui/`)
- **shadcn/ui components** - Button, Input, Select, etc.
- **Accessibility built-in** - ARIA attributes, keyboard navigation
- **Consistent styling** - Theme-aware with CSS variables
- **Variant system** - Using class-variance-authority

#### 2. Layout Components (`/components/layout/`)
```typescript
- HeroHeader     // Main navigation header
- FooterSection  // Site footer
- Hero           // Page hero sections
```

#### 3. Feature Components (`/components/`)
```typescript
- HeroTabs       // Expert/Provider persona switcher
- RevenueCalculator  // Multi-step calculator
- PricingTable   // Subscription pricing
- StepCardGrid   // How-it-works flow
- DualCTA        // Call-to-action sections
```

#### 4. Marketing Components (`/components/marketing/`)
```typescript
- Stats          // Metrics and statistics
- LogoCloud      // Partner/customer logos
- PriceCard      // Individual pricing cards
```

### Component Patterns

#### Standard Component Structure
```typescript
interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary";
  size?: "sm" | "md" | "lg";
}

export function Component({ 
  children, 
  className, 
  variant = "default",
  size = "md",
  ...props 
}: ComponentProps) {
  return (
    <div 
      className={cn(
        "base-styles",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
```

#### Animation Component Pattern
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="component-styles"
>
  {content}
</motion.div>
```

---

## 🗂 State Management

### Zustand Store Pattern
```typescript
interface StoreState {
  // State properties
  data: DataType;
  loading: boolean;
  
  // Actions
  setData: (data: DataType) => void;
  fetchData: () => Promise<void>;
}

export const useStore = create<StoreState>((set, get) => ({
  // Initial state
  data: null,
  loading: false,
  
  // Actions
  setData: (data) => set({ data }),
  fetchData: async () => {
    set({ loading: true });
    // Async logic
    set({ loading: false });
  },
}));
```

### Calculator Store Architecture
- **Separated concerns** - State, actions, and computed values
- **Type safety** - Full TypeScript interfaces
- **Performance** - Selective subscriptions with selectors
- **Computed values** - useCalculatorResults() hook for derived state

### State Organization
```typescript
// ✅ Good - Organized by feature
const calculatorStore = {
  inputs: { ... },
  settings: { ... },
  results: computed,
}

// ❌ Bad - Flat structure
const globalStore = {
  role, rarity, contentType, showModal, isLoading, ...
}
```

---

## 🎨 Styling Architecture

### CSS-in-JS Strategy
1. **Tailwind first** - Utility classes for styling
2. **CSS variables** - Theme tokens in globals.css
3. **Component variants** - class-variance-authority for complex components
4. **Semantic classes** - Custom classes for repeated patterns

### Tailwind CSS Configuration
```typescript
// tailwind.config.ts
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Semantic color system with CSS variables
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        // ... theme colors
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### CSS Variables System
```css
/* Light theme */
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 263 59% 68%;
  --radius: 0.5rem;
}

/* Dark theme */
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 263 59% 68%;
}
```

### Styling Patterns
```css
/* Component pattern */
.card-pattern { 
  @apply bg-card text-card-foreground rounded-2xl shadow-lg border border-border p-6; 
}

/* Interactive pattern */
.hover-lift { 
  @apply transition-transform hover:-translate-y-1; 
}

/* Theme-aware pattern */
.theme-surface { 
  @apply bg-background text-foreground; 
}
```

---

## 🌓 Theme System

### Dark Mode Implementation
1. **Class-based strategy** - `dark:` prefixes in Tailwind
2. **System preference detection** - Automatic theme detection
3. **FOUC prevention** - Inline script in document head
4. **Persistent storage** - localStorage for user preference

### Theme Provider Setup
```typescript
// app/layout.tsx
<html lang="en" suppressHydrationWarning>
  <head>
    <script dangerouslySetInnerHTML={{
      __html: `
        try {
          if (localStorage.theme === 'dark' || 
              (!('theme' in localStorage) && 
               window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          }
        } catch (_) {}
      `
    }} />
  </head>
  <body>
    <ThemeProvider>{children}</ThemeProvider>
  </body>
</html>
```

### Theme-Aware Components
```typescript
// ✅ Semantic colors (preferred)
className="bg-background text-foreground border-border"

// ⚠️ Manual dark mode (when needed)
className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
```

---

## 🎭 Animation Framework

### Framer Motion Architecture
```typescript
// Performance-optimized variants
const cardVariants = {
  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: shouldReduceMotion ? 0.1 : 0.7 }
  }
};

// Stagger container
const staggerContainer = {
  visible: {
    transition: { 
      staggerChildren: shouldReduceMotion ? 0 : 0.12 
    }
  }
};
```

### Animation Patterns
1. **Scroll-triggered animations** - whileInView with viewport once
2. **Staggered children** - Container/item animation pairs
3. **Reduced motion support** - useReducedMotion() hook
4. **Performance optimization** - will-change and GPU acceleration

### Standard Animation Timings
```typescript
// Micro-interactions
hover: { duration: 0.2 }

// Component reveals
fadeIn: { duration: 0.6 }

// Page transitions  
pageTransition: { duration: 0.7 }

// Stagger delays
staggerChildren: 0.12
```

---

## 🧪 Testing Strategy

### Jest Configuration
```javascript
// jest.config.mjs
{
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1' },
  coverageThreshold: {
    global: { branches: 80, functions: 80, lines: 80, statements: 80 }
  }
}
```

### Testing Patterns
```typescript
// Component testing pattern
describe('ComponentName', () => {
  it('renders with correct props', () => {
    render(<ComponentName prop="value" />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('handles user interactions', async () => {
    const handleClick = jest.fn();
    render(<ComponentName onClick={handleClick} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Testing Categories
1. **Unit tests** - Individual component behavior
2. **Integration tests** - Component interaction
3. **Accessibility tests** - ARIA attributes, keyboard navigation
4. **Visual regression** - Consistent UI rendering

---

## ⚡ Performance Optimizations

### Next.js Optimizations
```typescript
// next.config.ts
{
  images: {
    remotePatterns: [/* optimized image sources */],
  },
  // Turbopack for development
  experimental: { turbo: true }
}
```

### Component Performance
```typescript
// Lazy loading
const DynamicComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />
});

// Memoization
const ExpensiveComponent = memo(({ data }) => {
  const computedValue = useMemo(() => 
    expensiveCalculation(data), [data]
  );
  
  return <div>{computedValue}</div>;
});
```

### Animation Performance
```css
/* GPU acceleration */
[data-animate] {
  will-change: transform, opacity;
  transform: translateZ(0);
}

/* Mobile optimizations */
@media (max-width: 768px) {
  * {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
}
```

### Bundle Optimization
- **Dynamic imports** - Route-based code splitting
- **Tree shaking** - ES modules and selective imports
- **Image optimization** - Next.js Image with srcset
- **Font optimization** - Google Fonts with display=swap

---

## 🛠 Development Workflow

### Scripts
```json
{
  "dev": "next dev --turbopack",          // Development with Turbopack
  "build": "next build",                  // Production build
  "start": "next start",                  // Production server
  "test": "jest",                         // Run tests
  "test:watch": "jest --watch",           // Watch mode testing
  "test:coverage": "jest --coverage",     // Coverage reports
  "typecheck": "tsc --noEmit",           // Type checking
  "lint": "next lint"                     // ESLint
}
```

### Development Environment
- **Node.js** - Version managed via .nvmrc
- **pnpm** - Package manager for efficiency
- **TypeScript** - Strict mode enabled
- **ESLint** - Next.js recommended config
- **Turbopack** - Fast development builds

### File Conventions
```
ComponentName.tsx        // PascalCase for components
utils.ts                // camelCase for utilities  
types.ts                // Type definitions
constants.ts            // Application constants
ComponentName.test.tsx  // Co-located tests
```

---

## 📐 Standards & Patterns

### **🏷️ PILL-STYLE TOGGLE STANDARD**

#### Design Specification
```typescript
// Standard pill toggle component pattern
export function PillToggle<T extends string>({ 
  options, 
  active, 
  onActiveChange,
  className 
}: PillToggleProps<T>) {
  return (
    <div className="inline-flex rounded-full bg-gray-100 dark:bg-gray-800 p-1">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onActiveChange(option.value)}
          className={cn(
            "px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
            active === option.value
              ? "bg-white dark:bg-gray-900 shadow-sm text-gray-900 dark:text-white"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          )}
          aria-selected={active === option.value}
          role="tab"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
```

#### Usage Guidelines
```typescript
// ✅ Use pill toggles for:
- Mode switching (Simple/Advanced)
- Persona selection (Expert/Provider)  
- View toggles (List/Grid)
- Tab navigation with 2-4 options

// ❌ Use Switch components for:
- Binary on/off states (Allow sharing)
- Feature flags (Rush delivery)
- Boolean preferences

// ✅ Implementation examples:
<PillToggle 
  options={[
    { value: "simple", label: "Simple" },
    { value: "advanced", label: "Advanced" }
  ]}
  active={mode}
  onActiveChange={setMode}
/>
```

### Component Standards

#### Naming Conventions
```typescript
// Components - PascalCase
export function UserProfile() {}

// Props interfaces - ComponentNameProps
interface UserProfileProps {}

// Hooks - use + PascalCase
export function useUserData() {}

// Utils - camelCase
export function formatCurrency() {}

// Constants - SCREAMING_SNAKE_CASE
export const API_ENDPOINTS = {}
```

#### Import/Export Patterns
```typescript
// ✅ Named exports (preferred)
export function Component() {}
export { Component };

// ✅ Default exports (pages only)
export default function Page() {}

// ✅ Grouped imports
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
```

#### TypeScript Standards
```typescript
// ✅ Strict typing
interface Props {
  id: string;
  count: number;
  items: readonly Item[];
  onSelect: (item: Item) => void;
}

// ✅ Generic constraints
function createStore<T extends Record<string, unknown>>(
  initialState: T
): Store<T> {}

// ✅ Union types for variants
type Variant = "default" | "secondary" | "destructive";
```

### Accessibility Standards

#### ARIA Implementation
```typescript
// ✅ Semantic HTML + ARIA
<button
  role="tab"
  aria-selected={isActive}
  aria-controls={`panel-${id}`}
  tabIndex={isActive ? 0 : -1}
>
  {label}
</button>

// ✅ Focus management
const ref = useRef<HTMLButtonElement>(null);
useEffect(() => {
  if (isActive) ref.current?.focus();
}, [isActive]);
```

#### Color Contrast
- **Text contrast**: 4.5:1 minimum (WCAG AA)
- **Interactive elements**: 3:1 minimum
- **Focus indicators**: 2px outline with primary color

#### Keyboard Navigation
- **Tab order**: Logical sequence
- **Escape key**: Close modals/dropdowns
- **Arrow keys**: Navigate between related items
- **Enter/Space**: Activate buttons

### Performance Standards

#### Component Optimization
```typescript
// ✅ Memo for expensive re-renders
const ExpensiveComponent = memo(({ data }) => {
  return <ComplexVisualization data={data} />;
});

// ✅ Callback optimization
const handleClick = useCallback((id: string) => {
  onItemSelect(id);
}, [onItemSelect]);

// ✅ Computed values
const sortedItems = useMemo(() => 
  items.sort((a, b) => a.name.localeCompare(b.name)),
  [items]
);
```

#### Bundle Size Targets
- **Initial bundle**: < 200KB gzipped
- **Route chunks**: < 50KB gzipped  
- **Component chunks**: < 25KB gzipped
- **Lighthouse score**: 90+ mobile, 95+ desktop

### Error Handling

#### Component Error Boundaries
```typescript
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

#### Async Error Handling
```typescript
// ✅ Proper error handling
try {
  const data = await fetchData();
  setData(data);
} catch (error) {
  console.error('Failed to fetch data:', error);
  setError(error.message);
} finally {
  setLoading(false);
}
```

### Security Standards

#### Input Sanitization
```typescript
// ✅ Validated inputs
const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(50),
});

const result = schema.safeParse(input);
if (!result.success) {
  throw new Error('Invalid input');
}
```

#### XSS Prevention
```typescript
// ✅ Safe rendering
<div>{sanitizedContent}</div>

// ❌ Dangerous
<div dangerouslySetInnerHTML={{ __html: userInput }} />
```

---

## 🏗️ Architecture Decisions

### Key Architectural Choices

#### 1. **App Router over Pages Router**
- **Why**: Better file organization, nested layouts, streaming
- **Trade-offs**: Learning curve, some ecosystem incompatibility
- **Benefits**: Improved performance, better developer experience

#### 2. **Zustand over Redux/Context**
- **Why**: Simpler API, better TypeScript support, smaller bundle
- **Trade-offs**: Less ecosystem, fewer dev tools
- **Benefits**: Reduced boilerplate, better performance

#### 3. **Tailwind CSS over CSS-in-JS**
- **Why**: Better performance, consistent design system, smaller runtime
- **Trade-offs**: Learning curve, class name verbosity
- **Benefits**: Design consistency, faster development

#### 4. **Radix UI over Custom Components**
- **Why**: Accessibility by default, consistent behavior, well-tested
- **Trade-offs**: Bundle size, styling constraints
- **Benefits**: Better accessibility, faster development

#### 5. **TypeScript Strict Mode**
- **Why**: Better code quality, catch errors early, better refactoring
- **Trade-offs**: Initial setup time, learning curve
- **Benefits**: Fewer runtime errors, better developer experience

### Future Considerations

#### Potential Upgrades
- **React Server Components** - When ecosystem matures
- **Suspense for Data Fetching** - For better loading states
- **Concurrent Features** - startTransition for heavy operations
- **Web Workers** - For heavy calculations (revenue calculator)

#### Monitoring & Analytics
- **Core Web Vitals** - Performance monitoring
- **Error Tracking** - Sentry or similar
- **User Analytics** - PostHog or similar
- **A/B Testing** - Statistical significance testing

---

## 📚 Resources & References

### Documentation
- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Zustand](https://zustand-demo.pmnd.rs/)

### Internal Documentation
- [TrustedApp Dev CheatSheet](./TrustedApp-Dev-CheatSheet.md)
- [Directory Rules](./Directory-Rules.md)
- [Header Documentation](./header.md)
- [Hero Tabs Specification](./hero-tabs-spec.md)

### Development Tools
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Jest Testing Framework](https://jestjs.io/docs/getting-started)
- [Testing Library](https://testing-library.com/docs/)
- [ESLint Rules](https://eslint.org/docs/rules/)

---

*This architecture documentation should be updated as the codebase evolves. Last updated: December 2024* 