# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Root level (uses Turborepo)
pnpm install
pnpm dev              # Starts all apps
pnpm build            # Builds all apps  
pnpm test             # Runs tests for all apps
pnpm lint             # Biome linter
pnpm lint:fix         # Auto-fix linting issues

# App-specific commands using Turbo filters
pnpm bose             # Target @brands/bose app
pnpm jetblue          # Target @brands/jetblue app  
pnpm mongodb          # Target @brands/mongodb app  
pnpm techcrunch       # Target @brands/techcrunch app  
pnpm vermes           # Target @brands/vermes app

# Individual app development (from apps/[name]/)
pnpm dev              # Start single app (ports: mongodb=3000, vermes=3001, bose=3002)
pnpm test             # Vitest tests
```

## Architecture Overview

This Turborepo monorepo contains brand website clones showcasing Next.js and Vercel features.

**Key architectural patterns:**

1. **Feature Flagging System**: All apps use Vercel's `flags` package
   - Flags defined in `src/lib/flags.ts`
   - Middleware precomputes flags and rewrites URLs to `/{flagged}/{lang}/{locale}/{postalCode}/path`

2. **Custom I18n/Localization**: 
   - Language detection from cookies + Accept-Language headers
   - Postal code from Vercel IP headers (`x-vercel-ip-postal-code`)
   - URL rewriting via Next.js middleware for context injection

3. **Middleware Pattern**: Each app's `src/middleware.ts`:
   - Computes feature flags using `precompute(flags)`
   - Determines user language, locale, postal code
   - Rewrites all URLs to include this context

**Structure:**
- `/apps` - Three Next.js apps (bose, jetblue, mongodb, techcrunch, hermes)
- `/packages/ui` - Shared shadcn/ui components  
- `/packages/config` - Shared TypeScript/Vitest configs

**Tech Stack:**
- Next.js 15+ with React 19
- Tailwind CSS v4 with tw-animate-css
- Vitest + Testing Library
- Biome (linting/formatting)
- pnpm workspaces