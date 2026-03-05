# XTeam - Enterprise IT Solutions Landing Page

A modern, professional landing page for XTeam, showcasing premium CRM systems, ERP platforms, Telegram bot development, and custom web and mobile solutions. Built with Next.js 16, React 19, and a luxury glassmorphism design aesthetic.

## Features

- **Multi-language Support**: Full internationalization with English, Russian, and Uzbek translations
- **Theme System**: Dark/Light/System modes with automatic detection and persistence
- **Responsive Design**: Mobile-first design that works seamlessly across all devices
- **Smooth Animations**: Fade-in, slide-in, floating elements, and glow effects with scroll-based triggers
- **Glass Morphism UI**: Modern glassmorphism effects with backdrop blur and transparency
- **Accessible Components**: Built with semantic HTML and ARIA labels for screen readers
- **Performance Optimized**: Using Next.js 16 with Turbopack and React Compiler support
- **Modern Stack**: TypeScript, Tailwind CSS v4, shadcn/ui components, and Lucide icons

## Tech Stack

- **Framework**: Next.js 16.1 (App Router)
- **React**: 19.2 with React Compiler support
- **Styling**: Tailwind CSS v4, PostCSS
- **UI Components**: shadcn/ui (Radix UI based)
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Animations**: CSS animations with Tailwind utilities
- **i18n**: Custom translation system with JSON files
- **Analytics**: Vercel Analytics

## Project Structure

```
├── app/
│   ├── layout.tsx                 # Root layout (Server Component)
│   ├── layout-client.tsx          # Client layout with TranslationProvider
│   ├── page.tsx                   # Home page
│   ├── globals.css                # Global styles and animations
│   └── layout.config.ts           # Metadata configuration
├── components/
│   ├── navbar.tsx                 # Navigation with language/theme switcher
│   ├── hero.tsx                   # Hero section with CTA
│   ├── trust.tsx                  # Features/trust section
│   ├── services.tsx               # Services showcase
│   ├── projects.tsx               # Portfolio/projects
│   ├── about.tsx                  # About company
│   ├── faq.tsx                    # FAQ section
│   ├── contact.tsx                # Contact form
│   ├── footer.tsx                 # Footer
│   └── ui/                        # shadcn/ui components
├── lib/
│   ├── translation-context.tsx    # Translation and theme context
│   ├── translations/
│   │   ├── en.json               # English translations
│   │   ├── ru.json               # Russian translations
│   │   └── uz.json               # Uzbek translations
│   └── utils.ts                   # Utility functions
├── public/                         # Static assets
└── package.json

```

## Getting Started

### Prerequisites

- Node.js 18+ or later
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd xteam-landing
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
pnpm build
pnpm start
```

## Customization

### Changing Colors

Colors are defined using design tokens in `app/globals.css` using CSS custom properties (CSS variables). Modify the `:root` and `.dark` sections to change the color scheme:

```css
:root {
  --primary: oklch(0.1 0 0);        /* Black */
  --primary-foreground: oklch(1 0 0); /* White */
  /* ... other colors ... */
}
```

### Updating Translations

Edit the JSON files in `lib/translations/`:
- `en.json` - English
- `ru.json` - Russian  
- `uz.json` - Uzbek

The translation system uses dot notation paths (e.g., `hero.title`) to access nested values.

### Modifying Content

Each section is a separate component in the `components/` directory:
- Edit the components to change text, images, and structure
- Content strings are pulled from translation files for multi-language support
- Update translation files to see changes reflected across all languages

### Adding New Sections

1. Create a new component in `components/` (e.g., `components/testimonials.tsx`)
2. Add translations to `lib/translations/*.json`
3. Import and add the component to `app/page.tsx`
4. Style using Tailwind classes and existing design tokens

## Features in Detail

### Multi-Language Support

The `useTranslation()` hook provides access to:
- `language`: Current language ('en' | 'ru' | 'uz')
- `setLanguage()`: Function to change language
- `t()`: Translation function using dot notation

```tsx
const { t, language, setLanguage } = useTranslation();
<h1>{t('hero.title')}</h1>
```

### Theme Management

The theme system provides:
- `theme`: Current theme ('light' | 'dark' | 'system')
- `setTheme()`: Function to change theme
- `isDark`: Boolean indicating if dark mode is active

Changes are automatically persisted and detected from system preferences when set to 'system'.

### Animations

Global animations defined in `app/globals.css`:
- `fadeInUp`: Fade in with upward movement
- `slideIn`: Slide in from left
- `float`: Continuous floating motion
- `glow`: Box shadow glow effect

Use with `animate-fade-in`, `animate-slide-in`, etc., and stagger with inline styles:

```tsx
<div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
```

## Performance

- **Turbopack**: Next.js 16's stable default bundler for faster builds
- **React Compiler**: Automatic optimization of components (stable in Next.js 16)
- **Image Optimization**: Next.js Image component for lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Vercel Analytics**: Built-in performance monitoring

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Next.js and configure build settings
4. Click Deploy

Alternatively, use the Vercel CLI:
```bash
vercel
```

### Environment Variables

Currently, no environment variables are required. For future API integrations, add them to `.env.local`:

```
NEXT_PUBLIC_API_URL=your_api_url
```

## Accessibility

- Semantic HTML elements (`main`, `header`, `nav`, `section`)
- ARIA labels and roles for screen readers
- Keyboard navigation support
- Color contrast compliance
- Form labels properly associated with inputs

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions, please open an issue on GitHub or contact support@xteam.com

---

Built with ❤️ using Next.js, React, and Tailwind CSS
