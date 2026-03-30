# CoachFlow AI

CoachFlow AI is a portfolio-quality personal trainer website demo built with
Next.js. It showcases the kind of premium, conversion-focused site you could
ship for a real trainer client: a polished multi-page marketing site, a
localized AI-powered free-plan flow, and clear CTA paths for booking or DM.

The visible brand in the demo is `Alex Carter | Online Personal Trainer`, but
the project is intentionally structured so the concept can be adapted for real
trainer leads.

## What This Project Is

This repo demonstrates a small modern trainer website with:

- a shared site shell with navbar and footer
- light/dark theme persistence
- English and Hungarian content switching
- a dedicated `Free Plan` page with a personalized AI intake
- a dedicated `Contact` page with booking and Instagram CTA paths
- a gallery section and coach-focused landing-page structure

It is not a SaaS dashboard or admin product. The goal is to show a believable
trainer website experience that also includes a useful AI lead magnet.

## Feature Highlights

- **Multi-page trainer website**
  - `Home`, `Free Plan`, and `Contact` pages
  - reusable navbar/footer across the site
- **Localized UI**
  - English and Hungarian language switching
  - dictionary-driven copy for core marketing pages and funnel UI
- **Theme toggle**
  - light and dark mode
  - cookie-backed persistence with server-side preference reads
- **AI personalized starter plan**
  - React Hook Form + Zod validation
  - server-side OpenAI route
  - structured, trainer-style plan output
- **Conversion-focused CTA flow**
  - free-plan intake as the main lead-gen step
  - booking and Instagram buttons throughout the site
  - graceful fallbacks when public CTA URLs are not configured

## Pages And User Flow

### `/`

The homepage is the main trainer landing page. It includes:

- hero section
- coach introduction
- how-it-works section
- fitness gallery section
- CTA into the free-plan experience
- final CTA block for booking / DM / contact

### `/free-plan`

This is the main lead-generation page. A visitor:

1. reads a short intro
2. answers the personalized starter-plan intake
3. submits a localized request to `POST /api/ai-summary`
4. receives a structured AI-generated plan
5. can continue to booking or Instagram DMs

### `/contact`

This page gives the trainer a clean, minimal contact surface with:

- short intro copy
- booking CTA
- Instagram CTA
- simple "what to expect" details block

## Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- OpenAI API
- Supabase
- Resend

## Getting Started

### 1. Install dependencies

```bash
npm install
```

If PowerShell blocks the `npm` shim on your machine, use:

```powershell
npm.cmd install
```

### 2. Create local environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

### 3. Configure environment variables

#### Required for the main AI plan flow

```env
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

#### Optional public CTA URLs

These power the booking and DM buttons used across the site:

```env
NEXT_PUBLIC_BOOKING_URL=
NEXT_PUBLIC_INSTAGRAM_URL=
```

If they are left blank, the UI falls back to internal contact paths instead of
rendering broken links.

#### Optional future-facing integrations

These are present in the environment schema, but they are **not central to the
current primary demo flow**:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
```

### 4. Run the app

```bash
npm run dev
```

If needed in PowerShell:

```powershell
npm.cmd run dev
```

Open:

```text
http://localhost:3000
```

## Localization And Theme Behavior

The app uses a lightweight dictionary-based approach instead of a full i18n
framework.

- Supported languages:
  - `en`
  - `hu`
- Main marketing copy, navbar labels, CTA text, form labels, and result framing
  switch with the language toggle
- The current language is also sent to the AI route so the structured plan is
  generated in the active language

Theme and language preferences are persisted with cookies:

- `site-theme`
- `site-lang`

Server components read those cookies through `getSitePreferences()` so the
correct language and theme are applied during rendering.

## AI Personalized Plan Flow

### Form input

The intake currently collects:

- `goal`
- `currentLevel`
- `biggestStruggle`
- `timeCommitment`
- `budget`

Validation is built with a localized schema factory so labels, options, and
messages stay aligned with the active dictionary.

### Request shape

`POST /api/ai-summary`

```ts
type AiSummaryRequest = {
  answers: {
    goal: string;
    currentLevel: string;
    biggestStruggle: string;
    timeCommitment: string;
    budget: string;
  };
  language: "en" | "hu";
};
```

### Response shape

The route returns structured JSON in this format:

```ts
type AiPlan = {
  goalClarity: string;
  biggestBottleneck: string;
  focusNext7Days: string;
  simplePlan: string;
  softCta: string;
};
```

### Route behavior

The AI route:

- validates the incoming payload with Zod
- builds a trainer-specific prompt for Alex Carter
- instructs the model to answer in English or Hungarian
- enforces structured output with `zodResponseFormat`
- returns safe error messages for invalid input and provider failures

Current model settings in the repo:

- model: `gpt-5-mini`
- reasoning effort: `minimal`

## Project Structure

```text
public/
  gallery/
    coaching-floor.svg
    habit-planning.svg
    lifestyle-progress.svg
    training-atmosphere.svg

src/
  app/
    api/
      ai-summary/
        route.ts
      leads/
        route.ts
    contact/
      page.tsx
    free-plan/
      page.tsx
    globals.css
    layout.tsx
    page.tsx
  components/
    funnel/
      qualification-form.tsx
      qualification-funnel.tsx
      recommendation-preview.tsx
    landing/
      about-coach-section.tsx
      contact-cta-section.tsx
      funnel-placeholder-section.tsx
      gallery-section.tsx
      hero-section.tsx
      how-it-works-section.tsx
    layout/
      footer.tsx
      language-switcher.tsx
      navbar.tsx
      theme-toggle.tsx
  lib/
    dictionaries.ts
    env.ts
    openai.ts
    server-site-preferences.ts
    site-preferences.ts
    supabase.ts
    utils.ts
    validations/
      funnel.ts
  types/
    funnel.ts
```

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## API Notes

### `POST /api/ai-summary`

Primary AI route for the free-plan flow.

- validates localized intake data
- generates structured trainer guidance
- returns the `AiPlan` payload shown above

### `POST /api/leads`

This route currently exists as a placeholder and returns `501 Not Implemented`.
It is not part of the main demo flow yet.

## Current Limitations / Next Steps

- No persistent lead storage yet
- No live email automation flow yet
- Supabase and Resend are scaffolded, but not central to the current demo
- Gallery assets are local placeholders designed to show layout/style direction
- Booking and Instagram CTAs depend on public env URLs for full external-link
  behavior

## Verification Checklist

Run these before shipping changes:

```bash
npm run lint
npm run build
```

Then sanity-check locally:

- open `/`
- open `/free-plan`
- open `/contact`
- verify navbar navigation works
- verify theme toggle persists after refresh
- verify language switcher persists after refresh
- submit invalid free-plan answers and confirm localized validation appears
- submit valid answers and confirm the AI result renders
- confirm booking / Instagram buttons use env URLs when configured and internal
  fallbacks when they are not
