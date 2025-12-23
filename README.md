# Timestamp 1337 - Event Website

Production-ready event website built with Next.js 15, TypeScript, and Tailwind CSS. Features a single-page landing with sections, dedicated speakers and partners pages, and a data-driven content management system.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`.

## 📁 Project Structure

```
Event-main/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── speakers/           # Speakers page
│   ├── partners/          # Partners page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx        # Sticky navigation
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── SpeakerCard.tsx    # Speaker card
│   ├── SpeakerGrid.tsx    # Speakers grid
│   ├── GalleryGrid.tsx    # Gallery with lightbox
│   ├── ScheduleTabs.tsx   # Schedule component
│   ├── FAQAccordion.tsx   # FAQ accordion
│   └── ContactForm.tsx    # Contact form
├── content/               # Content JSON files
│   ├── site.json         # Site configuration
│   ├── speakers.json     # Speakers data
│   ├── gallery.json      # Gallery images
│   ├── schedule.json     # Event schedule
│   ├── faq.json          # FAQ items
│   └── partners.json     # Partners data
├── lib/                   # Utilities
│   ├── contentSchemas.ts # Zod validation schemas
│   ├── contentLoader.ts  # Content loading functions
│   └── utils.ts          # Helper functions
└── public/               # Static assets
    ├── speakers/         # Speaker photos
    ├── gallery/           # Gallery images
    ├── partners/          # Partner logos
    └── placeholder-event.jpg
```

## 📝 Editing Content

All content is managed through JSON files in the `/content` directory. No database or CMS required for v1.

### Site Configuration

Edit `/content/site.json` to update:
- Site name, dates, venue
- CTA button text
- Social media links
- Contact information
- SEO metadata

### Speakers

Edit `/content/speakers.json` to add/update speakers:
- Add speaker photos to `/public/speakers/`
- Update JSON with speaker details, social links, and tags

### Gallery

Edit `/content/gallery.json` to manage gallery images:
- Add images to `/public/gallery/`
- Update JSON with image paths and metadata

### Schedule

Edit `/content/schedule.json` to update event schedule:
- Modify day1 and day2 arrays
- Each item needs: startTime, duration, title, description (optional), track (optional)

### FAQ

Edit `/content/faq.json` to update FAQ items:
- Array of objects with `q` (question) and `a` (answer)

### Partners

Edit `/content/partners.json` to manage partners:
- Separate current and previous partners
- Each group has: partners, mediaPartners, universities, memberships
- Add logos to `/public/partners/`

## 🎨 Customization

### Theme Colors

Edit CSS variables in `/app/globals.css`:

```css
:root {
  --color-accent-primary: #31e6e3;
  --color-accent-secondary: #7c3aed;
  --color-bg: #070a12;
  --color-bg-alt: #0b1020;
  --color-text: #eaf0ff;
  --color-text-muted: #aab3d0;
}
```

### Tailwind Configuration

Modify `/tailwind.config.ts` to extend the theme, add custom colors, or adjust animations.

### Metadata & SEO

Update SEO settings in:
- `/content/site.json` (seo object)
- `/app/layout.tsx` (generateMetadata function)

## 🖼️ Placeholder Images

The project expects placeholder images. Add the following to `/public/`:

### Required Images

- `/public/placeholder-event.jpg` - Event venue image (used in About section)
- `/public/speakers/` - Speaker photos (6 images)
  - `alex-chen.jpg`
  - `sarah-johnson.jpg`
  - `michael-rodriguez.jpg`
  - `emma-williams.jpg`
  - `david-kim.jpg`
  - `lisa-anderson.jpg`
- `/public/gallery/` - Gallery images (12 images)
  - `gallery-1.jpg` through `gallery-12.jpg`
- `/public/partners/` - Partner logos
  - Current partners: `techcorp.png`, `blockchain-ventures.png`, etc.
  - Previous partners: `previous-1.png`, etc.

### Image Recommendations

- **Speaker photos**: 400x400px, square aspect ratio
- **Gallery images**: 1200x800px, landscape aspect ratio
- **Partner logos**: 300x200px, maintain aspect ratio
- **Event image**: 1200x600px, landscape

You can use placeholder services like:
- [Placeholder.com](https://placeholder.com)
- [Unsplash](https://unsplash.com) (free stock photos)
- [Pexels](https://pexels.com) (free stock photos)

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and configure build settings
4. Deploy!

### Other Platforms

The project can be deployed to any platform supporting Next.js:
- **Netlify**: Use Next.js build preset
- **AWS Amplify**: Configure build settings for Next.js
- **Railway**: Auto-detects Next.js
- **Self-hosted**: Run `npm run build` and `npm start`

### Environment Variables

No environment variables required for v1. For production, consider adding:
- `NEXT_PUBLIC_SITE_URL` - For absolute URLs in metadata
- Contact form email service (SendGrid, Resend, etc.)

## 🔧 API Routes

### `/api/contact`

Handles contact form submissions (sponsor/speaker inquiries).

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "Developer",
  "company": "TechCorp",
  "message": "I'd like to become a speaker...",
  "type": "speaker"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you! We will get back to you soon."
}
```

Currently logs to console. In production, integrate with:
- Email service (SendGrid, Resend)
- Database (PostgreSQL, MongoDB)
- CRM system

## 🎯 Features

- ✅ Single-page landing with smooth scroll navigation
- ✅ Responsive design (mobile-first)
- ✅ Dark mode optimized
- ✅ SEO optimized (metadata, Open Graph)
- ✅ Image optimization (next/image)
- ✅ Framer Motion animations
- ✅ Type-safe content (Zod validation)
- ✅ Accessible (semantic HTML, ARIA labels)
- ✅ Performance optimized (lazy loading, code splitting)

## 📚 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Validation**: Zod
- **Icons**: Lucide React
- **Image Optimization**: next/image

## 🔮 Future Enhancements

- [ ] CMS integration (Contentful, Sanity, Strapi)
- [ ] Ticket purchase integration
- [ ] Live schedule updates
- [ ] Speaker detail pages with bio modals
- [ ] Newsletter subscription
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Admin dashboard for content management

## 📄 License

Private project - All rights reserved.

## 🤝 Support

For questions or issues, contact: info@timestamp1337.com
