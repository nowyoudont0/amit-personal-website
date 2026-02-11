# Amit Kumar Personal Website - Technical Specification

---

## Component Inventory

### shadcn/ui Components (Built-in)
| Component | Purpose | Customization |
|-----------|---------|---------------|
| Button | CTAs, navigation | Custom colors, hover effects |
| Card | Experience, Education cards | Custom shadows, borders |
| Badge | Tags, certifications | Custom colors |
| Sheet | Mobile navigation menu | Slide-in animation |
| Separator | Visual dividers | Custom color |

### Custom Components
| Component | Purpose | Location |
|-----------|---------|----------|
| Navigation | Fixed header with menu | `components/Navigation.tsx` |
| Hero | Hero section with typing | `sections/Hero.tsx` |
| WaveBackground | Animated wave effect | `components/WaveBackground.tsx` |
| TypeWriter | Typing animation | `components/TypeWriter.tsx` |
| About | About section | `sections/About.tsx` |
| Experience | Timeline experience | `sections/Experience.tsx` |
| Education | Education cards | `sections/Education.tsx` |
| Achievements | Stats and recognitions | `sections/Achievements.tsx` |
| Sports | Sports section | `sections/Sports.tsx` |
| Contact | Contact/Footer | `sections/Contact.tsx` |
| ScrollReveal | Scroll animation wrapper | `components/ScrollReveal.tsx` |
| CountUp | Number counter animation | `components/CountUp.tsx` |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| **Hero Typing Effect** | react-type-animation | TypeAnimation component with cursor | Medium |
| **Wave Background** | CSS + Canvas | Animated SVG paths or Canvas rendering | High |
| **Scroll Reveal** | Framer Motion | useInView + motion.div with variants | Medium |
| **Navigation Scroll Effect** | React hooks | useScroll for background opacity change | Low |
| **Card Hover Lift** | CSS/Tailwind | hover:translate-y + transition | Low |
| **Stats Counter** | Custom hook | useCountUp with requestAnimationFrame | Medium |
| **Stagger Children** | Framer Motion | staggerChildren in parent variants | Medium |
| **Mobile Menu Slide** | Framer Motion | AnimatePresence + motion.div | Medium |
| **Button Hover Glow** | CSS | box-shadow transition on hover | Low |
| **Image Parallax** | Framer Motion | useScroll + useTransform | Medium |
| **Smooth Scroll** | CSS/JS | scroll-behavior: smooth + scrollIntoView | Low |
| **Page Load Sequence** | Framer Motion | Initial animation with stagger delays | Medium |

---

## Animation Library Choices

### Primary: Framer Motion
- **Rationale**: Best React integration, declarative API, excellent performance
- **Use for**: Scroll reveals, page transitions, gesture animations, layout animations

### Secondary: react-type-animation
- **Rationale**: Purpose-built for typing effects, easy to use
- **Use for**: Hero section typing animation

### CSS/Tailwind
- **Rationale**: Performance, simplicity for basic transitions
- **Use for**: Hover effects, simple transitions, backdrop blur

---

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── images/
│   │   ├── amit-headshot.jpg
│   │   └── hockey-team.jpg
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn components
│   │   ├── Navigation.tsx
│   │   ├── WaveBackground.tsx
│   │   ├── TypeWriter.tsx
│   │   ├── ScrollReveal.tsx
│   │   └── CountUp.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Achievements.tsx
│   │   ├── Sports.tsx
│   │   └── Contact.tsx
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   └── useCountUp.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Dependencies

### Core (Auto-installed by webapp-building)
- React 18+
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

### Additional Required
```bash
npm install framer-motion react-type-animation lucide-react
```

### Optional
```bash
npm install @fontsource/inter
```

---

## Color Configuration (Tailwind)

```javascript
// tailwind.config.js extend colors
colors: {
  primary: {
    dark: '#0a1628',
    blue: '#1e3a5f',
    light: '#ffffff',
  },
  secondary: {
    gray: '#f5f5f7',
  },
  text: {
    primary: '#1d1d1f',
    secondary: '#6e6e73',
  },
  accent: {
    blue: '#0071e3',
  },
}
```

---

## Animation Timing Constants

```typescript
// lib/animation.ts
export const ANIMATION = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.6,
    hero: 0.8,
  },
  easing: {
    default: [0.25, 0.46, 0.45, 0.94],
    bounce: [0.34, 1.56, 0.64, 1],
    smooth: [0.43, 0.13, 0.23, 0.96],
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
};
```

---

## ScrollReveal Component Specification

```typescript
interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}
```

## TypeWriter Component Specification

```typescript
interface TypeWriterProps {
  sequences: (string | number)[];  // ['text', 1000, 'next text']
  wrapper?: string;
  speed?: number;
  repeat?: number;
  className?: string;
}
```

---

## Performance Considerations

1. **Image Optimization**
   - Use WebP format where possible
   - Lazy load below-fold images
   - Proper sizing with srcset

2. **Animation Performance**
   - Use transform and opacity only
   - Apply will-change sparingly
   - Respect prefers-reduced-motion

3. **Code Splitting**
   - Lazy load sections below fold
   - Dynamic imports for heavy components

4. **Font Loading**
   - Use font-display: swap
   - Preload critical fonts

---

## Accessibility Requirements

1. **Keyboard Navigation**
   - All interactive elements focusable
   - Visible focus indicators
   - Skip to content link

2. **Screen Readers**
   - Semantic HTML structure
   - ARIA labels where needed
   - Alt text for images

3. **Motion**
   - Respect prefers-reduced-motion
   - Provide static alternatives

4. **Color Contrast**
   - 4.5:1 minimum for text
   - 3:1 for large text/UI components
