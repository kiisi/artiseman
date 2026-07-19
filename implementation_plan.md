# Artiseman — World-Class Artisan Marketplace Platform

A premium, modern artisan marketplace connecting customers with verified artisans. Built with Next.js 16, TypeScript, Tailwind CSS 4, and Lucide Icons.

## Tech Stack (Already Established)

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2.10 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 (via `@tailwindcss/postcss`) |
| React | 19.2.4 |
| Font | Geist (already configured) |
| Icons | Lucide React (to install) |

> [!IMPORTANT]
> **This is a massive project (~40+ pages, ~80+ components).** To deliver production-quality results without rushing, I propose a **6-phase approach** where each phase is self-contained, testable, and incrementally builds toward the full product.

---

## User Review Required

> [!WARNING]
> **Scope Management**: Building all 40+ pages to full production quality is a multi-week project. Each phase below is designed to be a shippable milestone. I recommend we proceed phase-by-phase with reviews between each.

> [!IMPORTANT]
> **shadcn/ui**: Your request mentions shadcn/ui. However, your project currently uses Tailwind CSS 4 with Next.js 16, and shadcn/ui may have compatibility constraints. I will build a **custom design system** from scratch that matches and exceeds shadcn/ui quality, specifically tailored to your brand colors and design language. This gives us full control and avoids dependency conflicts.

> [!IMPORTANT]
> **No Backend**: This is a frontend-only implementation with mock data. All pages will use static/mock data structures that can be easily swapped for API calls later.

---

## Open Questions

1. **Brand Name**: I'll use "Artiseman" as the product name throughout. Is this correct?
2. **Dark Mode**: Do you want dark mode support from day one, or light mode only for the initial build?
3. **Phase Priority**: Should I start with Phase 1 (Foundation + Landing Page) immediately, or do you want to reprioritize which pages come first?

---

## Brand Design System

### Colors
```
Primary:   #095256 (deep teal — major actions, buttons, branding)
Secondary: #087F8C (teal — highlights, navigation, secondary actions)  
Tertiary:  #5AAA95 (sage green — accents, badges, success, subtle bg)
```

### Extended Palette (Derived)
```
Neutral-50:   #F8FAFA    Neutral-900:  #0F1B1C
Neutral-100:  #F0F5F5    Success:      #5AAA95 (tertiary)
Neutral-200:  #E1EDED    Warning:      #E6A817
Neutral-300:  #C3D4D5    Danger:       #DC3545
Neutral-400:  #8FA8AA    Info:         #087F8C (secondary)
Neutral-500:  #5C7C7E
```

### Typography Scale
```
Display:   48px/56px  (font-bold, tracking-tight)
H1:        36px/44px  (font-bold, tracking-tight)
H2:        30px/38px  (font-semibold)
H3:        24px/32px  (font-semibold)
H4:        20px/28px  (font-medium)
Body:      16px/24px  (font-normal)
Small:     14px/20px  (font-normal)
Caption:   12px/16px  (font-medium)
```

### Spacing: 4px grid (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128)
### Radii: `sm: 6px`, `md: 8px`, `lg: 12px`, `xl: 16px`, `2xl: 24px`, `full`
### Shadows: 4 levels (sm, md, lg, xl) using teal-tinted shadows

---

## Proposed Changes — Phased Approach

---

### Phase 1: Foundation + Landing Page ⭐
*The most critical phase — establishes the entire design language*

#### Dependencies to Install
- `lucide-react` — icon library

#### [MODIFY] [globals.css](file:///c:/Users/KIISI/artiseman/app/globals.css)
Complete design system CSS: custom properties, color tokens, typography scale, spacing system, animation keyframes, utility classes, component base styles.

#### [MODIFY] [layout.tsx](file:///c:/Users/KIISI/artiseman/app/layout.tsx)
Update root layout with proper metadata, font configuration, and global providers.

#### [NEW] `app/components/ui/` — Core Design System Components
| File | Purpose |
|------|---------|
| `button.tsx` | Primary, Secondary, Outline, Ghost, Danger variants |
| `input.tsx` | Text, Search, Password inputs with labels/errors |
| `badge.tsx` | Status, category, and count badges |
| `card.tsx` | Base card with hover effects and variants |
| `avatar.tsx` | User avatars with fallback initials |
| `rating.tsx` | Star rating display and input |
| `skeleton.tsx` | Loading skeleton components |
| `container.tsx` | Max-width responsive container |
| `logo.tsx` | Brand logo component |

#### [NEW] `app/components/layout/` — Layout Components
| File | Purpose |
|------|---------|
| `header.tsx` | Public site header with nav |
| `footer.tsx` | Full site footer |
| `mobile-nav.tsx` | Mobile hamburger navigation |

#### [NEW] `app/components/sections/` — Landing Page Sections
| File | Purpose |
|------|---------|
| `hero.tsx` | Hero with search, headline, social proof |
| `categories.tsx` | Browse by service category grid |
| `how-it-works.tsx` | 3-step process illustration |
| `featured-artisans.tsx` | Carousel of top artisans |
| `why-choose-us.tsx` | USP cards with icons |
| `testimonials.tsx` | Customer testimonial carousel |
| `stats.tsx` | Platform statistics counter |
| `cta-section.tsx` | Call-to-action banner |
| `faq.tsx` | Accordion FAQ |

#### [MODIFY] [page.tsx](file:///c:/Users/KIISI/artiseman/app/page.tsx)
Complete landing page assembling all sections.

#### [NEW] `lib/mock-data.ts`
Mock data for artisans, categories, reviews, stats.

---

### Phase 2: Public Pages + Authentication

#### [NEW] Public Pages
| Route | File |
|-------|------|
| `/about` | `app/about/page.tsx` |
| `/services` | `app/services/page.tsx` |
| `/become-artisan` | `app/become-artisan/page.tsx` |
| `/pricing` | `app/pricing/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `/help` | `app/help/page.tsx` |
| `/faq` | `app/faq/page.tsx` |
| `/privacy` | `app/privacy/page.tsx` |
| `/terms` | `app/terms/page.tsx` |

#### [NEW] Authentication Pages
| Route | File |
|-------|------|
| `/login` | `app/(auth)/login/page.tsx` |
| `/register` | `app/(auth)/register/page.tsx` |
| `/forgot-password` | `app/(auth)/forgot-password/page.tsx` |
| `/reset-password` | `app/(auth)/reset-password/page.tsx` |
| `/verify-email` | `app/(auth)/verify-email/page.tsx` |
| `/verify-phone` | `app/(auth)/verify-phone/page.tsx` |

#### [NEW] `app/(auth)/layout.tsx`
Auth layout with split-screen design (form + branding illustration).

---

### Phase 3: Customer Dashboard

#### [NEW] Dashboard Layout & Pages
| Route | File |
|-------|------|
| `/dashboard` | `app/(dashboard)/customer/page.tsx` — Overview |
| `/dashboard/find-artisan` | Search + filters + map |
| `/dashboard/artisan/[id]` | Artisan profile detail |
| `/dashboard/request` | Create service request flow |
| `/dashboard/tracking/[id]` | Live job tracking |
| `/dashboard/messages` | Messaging interface |
| `/dashboard/bookings` | Bookings list + tabs |
| `/dashboard/payments` | Payment history + wallet |
| `/dashboard/reviews` | Reviews management |
| `/dashboard/notifications` | Notification center |
| `/dashboard/profile` | Profile settings |

#### [NEW] Dashboard Components
| File | Purpose |
|------|---------|
| `sidebar.tsx` | Collapsible dashboard sidebar |
| `dashboard-header.tsx` | Top bar with search, notifications |
| `stat-card.tsx` | Dashboard metric cards |
| `job-card.tsx` | Job listing cards |
| `artisan-card.tsx` | Artisan listing cards |
| `message-bubble.tsx` | Chat message components |
| `booking-card.tsx` | Booking listing cards |
| `payment-table.tsx` | Payment history table |
| `notification-item.tsx` | Notification list items |
| `filter-panel.tsx` | Advanced filter sidebar |
| `map-view.tsx` | Map placeholder component |
| `calendar-widget.tsx` | Date/time picker |
| `timeline.tsx` | Job progress timeline |

---

### Phase 4: Artisan Dashboard

#### [NEW] Artisan Dashboard Pages
| Route | File |
|-------|------|
| `/artisan/dashboard` | Artisan overview |
| `/artisan/requests` | Incoming job requests |
| `/artisan/jobs` | Active/completed jobs |
| `/artisan/availability` | Schedule management |
| `/artisan/portfolio` | Work portfolio |
| `/artisan/earnings` | Revenue analytics |
| `/artisan/reviews` | Customer feedback |
| `/artisan/settings` | Business settings |

---

### Phase 5: Admin Dashboard

#### [NEW] Admin Dashboard Pages
| Route | File |
|-------|------|
| `/admin` | Admin overview |
| `/admin/users` | User management |
| `/admin/artisans` | Artisan verification |
| `/admin/jobs` | Job monitoring |
| `/admin/disputes` | Dispute management |
| `/admin/analytics` | Platform analytics |
| `/admin/payments` | Payment tracking |
| `/admin/categories` | Category management |
| `/admin/settings` | System settings |

---

### Phase 6: Polish & Advanced Features

- Command palette (⌘K)
- Toast notification system
- Modal/drawer system
- Bottom sheets (mobile)
- All empty states
- All error states
- All loading skeletons
- Keyboard navigation
- Advanced animations
- Performance optimization
- SEO meta tags for all pages
- Responsive testing & fixes

---

## Verification Plan

### After Each Phase
1. **Build check**: `npm run build` must pass without errors
2. **Dev server**: `npm run dev` and visually inspect all pages
3. **Responsive**: Test at 375px (mobile), 768px (tablet), 1440px (desktop)
4. **Accessibility**: Check contrast ratios, focus states, aria labels
5. **Consistency**: Verify all pages use the design system consistently

### Manual Verification
- Browser testing at multiple viewport sizes
- Visual inspection of every component state (default, hover, focus, active, disabled)
- Navigation flow between all pages
- Loading and empty state verification
