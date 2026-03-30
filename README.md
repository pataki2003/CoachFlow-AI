# AI Coach Funnel Demo

A small demo app that shows how a coach or consultant could turn landing-page traffic into a more qualified booking flow.

The current MVP includes:
- a polished landing page
- an interactive qualification form
- client-side validation with React Hook Form + Zod
- a server-side OpenAI recommendation route
- a premium result card that displays a short AI-generated next step

Planned later phases still include:
- email capture
- booking CTA flow
- Supabase persistence
- Resend integration

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

## Current Flow

1. A visitor lands on the homepage.
2. The hero CTA scrolls to the interactive funnel section.
3. The visitor answers five qualification questions.
4. The client submits the answers to `POST /api/ai-summary`.
5. The backend validates the payload, calls OpenAI, and returns structured JSON:
   - `title`
   - `summary`
   - `nextStep`
6. The frontend swaps the form into a recommendation card.

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

Copy `.env.example` to `.env.local` and fill in the values you need.

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

### 3. Required env for the current phase

Only `OPENAI_API_KEY` is required for the AI recommendation flow right now.

```env
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

These are already prepared for later phases but are not used yet:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
NEXT_PUBLIC_BOOKING_URL=
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

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
src/
  app/
    api/
      ai-summary/
        route.ts
      leads/
        route.ts
    globals.css
    layout.tsx
    page.tsx
  components/
    funnel/
      qualification-form.tsx
      qualification-funnel.tsx
      recommendation-preview.tsx
    landing/
      hero-section.tsx
      how-it-works-section.tsx
      benefits-section.tsx
      funnel-placeholder-section.tsx
  lib/
    env.ts
    openai.ts
    supabase.ts
    utils.ts
    validations/
      funnel.ts
  types/
    funnel.ts
```

## API Notes

### `POST /api/ai-summary`

This route:
- validates the qualification answers with Zod
- calls OpenAI on the server only
- enforces a structured recommendation shape
- returns safe error messages for invalid input or provider failures

No secrets are exposed to the client.

## Current Limitations

- No persistence yet
- No lead capture yet
- No booking logic yet
- No Resend email flow yet
- The `leads` route is still a placeholder for a later phase

## Quick Verification

Run these before shipping a change:

```bash
npm run lint
npm run build
```

Then test locally:
- open the homepage
- scroll to the funnel
- submit invalid answers and confirm inline validation appears
- submit valid answers and confirm the AI recommendation card renders

