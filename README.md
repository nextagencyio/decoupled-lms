# Decoupled LMS

A learning management system starter template for Decoupled Drupal + Next.js. Built for online education platforms, corporate training providers, and e-learning businesses that need to showcase courses, instructors, and student success stories.

![Decoupled LMS Screenshot](docs/screenshot.png)

## Features

- **Course Catalog** - Browse courses with categories, skill levels, pricing, ratings, and enrollment counts
- **Instructor Profiles** - Detailed instructor bios with credentials, expertise areas, and student metrics
- **Student Testimonials** - Success stories and reviews from learners who completed courses
- **Homepage** - Hero section with platform statistics, featured courses, and call-to-action blocks
- **Static Pages** - About, pricing, and other informational pages
- **Modern Design** - Clean, accessible UI optimized for online learning content

## Quick Start

### 1. Clone the template

```bash
npx degit nextagencyio/decoupled-lms my-lms
cd my-lms
npm install
```

### 2. Run interactive setup

```bash
npm run setup
```

This interactive script will:
- Authenticate with Decoupled.io (opens browser)
- Create a new Drupal space
- Wait for provisioning (~90 seconds)
- Configure your `.env.local` file
- Import sample content

### 3. Start development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Manual Setup

If you prefer to run each step manually:

<details>
<summary>Click to expand manual setup steps</summary>

### Authenticate with Decoupled.io

```bash
npx decoupled-cli@latest auth login
```

### Create a Drupal space

```bash
npx decoupled-cli@latest spaces create "My LMS"
```

Note the space ID returned (e.g., `Space ID: 1234`). Wait ~90 seconds for provisioning.

### Configure environment

```bash
npx decoupled-cli@latest spaces env 1234 --write .env.local
```

### Import content

```bash
npm run setup-content
```

This imports:
- Homepage with hero, statistics, and CTAs
- 4 Courses (React, Python Data Science, UX Design, AWS Cloud)
- 3 Instructors (Sarah Chen, Dr. James Rodriguez, Maya Patel)
- 3 Testimonials (career change stories and success highlights)
- 2 Static Pages (About, Pricing & Plans)

</details>

## Content Types

### Course
- Title, Body (detailed description)
- Category (taxonomy: Web Development, Data Science, Design, etc.)
- Skill Level (taxonomy: Beginner, Intermediate, Advanced)
- Instructor Name, Duration, Lessons Count
- Price, Enrollment Count, Rating
- Learning Outcomes (list)
- Prerequisites, Certificate Included (boolean)
- Course Image

### Instructor
- Title (name), Body (bio)
- Areas of Expertise (taxonomy)
- Courses Taught, Total Students, Rating
- Credentials (list)
- Website URL, Photo

### Testimonial
- Title, Body (full story)
- Student Name, Student Role/Title
- Course Taken, Pull Quote
- Rating, Student Photo

### Homepage
- Hero Title, Subtitle, Description
- Statistics (paragraph items with number and label)
- Featured Items Title
- CTA Title, Description, Primary and Secondary buttons

## Customization

### Colors & Branding
Edit `tailwind.config.js` to customize colors, fonts, and spacing.

### Content Structure
Modify `data/lms-content.json` to add or change content types and sample content.

### Components
React components are in `app/components/`. Update them to match your design needs.

## Demo Mode

Demo mode allows you to showcase the application without connecting to a Drupal backend. It displays mock content for the homepage, courses, instructors, and testimonials.

### Enable Demo Mode

Set the environment variable:

```bash
NEXT_PUBLIC_DEMO_MODE=true
```

Or add to `.env.local`:
```
NEXT_PUBLIC_DEMO_MODE=true
```

### What Demo Mode Does

- Shows a "Demo Mode" banner at the top of the page
- Returns mock data for all GraphQL queries
- Displays sample courses, instructors, and testimonials
- No Drupal backend required

### Removing Demo Mode

To convert to a production app with real data:

1. Delete `lib/demo-mode.ts`
2. Delete `data/mock/` directory
3. Delete `app/components/DemoModeBanner.tsx`
4. Remove `DemoModeBanner` from `app/layout.tsx`
5. Remove demo mode checks from `app/api/graphql/route.ts`

## Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nextagencyio/decoupled-lms)

Set `NEXT_PUBLIC_DEMO_MODE=true` in Vercel environment variables for a demo deployment.

### Other Platforms
Works with any Node.js hosting platform that supports Next.js.

## Documentation

- [Decoupled.io Docs](https://www.decoupled.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Drupal GraphQL](https://www.decoupled.io/docs/graphql)

## License

MIT
