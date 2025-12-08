# Brands

This monorepo is built around creating clones of existing websites but built to highlight the feature-set of Next.js & 
Vercel.

## Running Locally

This repository is a simple Turborepo starter that contains the basic Turborepo setup and configuration.

To start using, you can use the following commands:

```zsh
pnpm install
pnpm dev
pnpm build
```

This project also has some configured some tools like:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Vitest](https://vitest.dev/) for unit testing
- [Biome](https://biomejs.dev/) for code linting & formatting

## Applications

Located under `/apps`, you will find an application.

- `bose`: a [Next.js](https://nextjs.org/) clone of Bose.com
- `vermes`: a [Next.js](https://nextjs.org/) clone of Hermes

## Packages

In this example, there is a shared package called `ui` which is basic [`shadcn/ui`](https://ui.shadcn.com/) package.

## Shared Configuration

Located under `/packages/config` is all the shared configuration which the Turborepo uses. This is a great space to put
handy developer tools and code cleanliness configuration.

- `@vrands/vitest-config`: `vitest` configurations for `base` and `ui` configurations
- `@vrands/typescript-config`: `tsconfig.json`s used throughout the monorepo

## Useful Turborepo Links

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
