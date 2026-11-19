# plank-fde-training

Course project for Plank's AI FDE Course. It grows day by day into WorkBot, an enterprise workflow platform. The app is Next.js (App Router) with TypeScript and Tailwind, using the `src/` directory. There are no per-day folders: the repository is the deliverable.

## Commands

- `pnpm dev`: start the dev server.
- `pnpm build` / `pnpm start`: production build and server.
- `pnpm lint`: ESLint.
- `pnpm format` / `pnpm format:check`: write or check Prettier formatting.
- `pnpm typecheck`: `next typegen` then `tsc --noEmit`.
- `pnpm check`: lint, format check, typecheck and build, in that order. CI runs this on pushes to `main` and on pull requests. Run it before you finish a change.

## Conventions

Every change must follow these.

**Where files go**

- Routes, layouts and route-level files go in `src/app/`.
- Shared UI components go in `src/components/`. Generated primitives go in `src/components/ui/`.
- Helpers, data access and other non-UI code go in `src/lib/`.
- Import with the `@/*` alias (maps to `src/*`), not deep relative paths.

**Server Components by default**

A Server Component renders on the server and sends no JavaScript to the browser. Every component is one unless it opts out.

- Add `"use client"` only when a component needs state, effects, event handlers or browser APIs.
- Keep client components small and push them to the leaves of the tree. Do not mark a whole page or layout as client to fix one interaction.
- Fetch data in Server Components, not in client-side effects.

**Environment variables**

- Exactly one module reads `process.env`: `src/lib/config.ts`. It validates the values and exports them typed.
- Everything else imports from that module. Never read `process.env` anywhere else.
- Only the env module may expose a variable to the browser, and only with the `NEXT_PUBLIC_` prefix. Never put secrets in a `NEXT_PUBLIC_` variable.
- Do not commit `.env` files. Document new variables in `.env.example`.

## Next.js version

This is not the Next.js in your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing code, and heed deprecation notices.

## Commits

Keep commits small with honest messages. Course verification reads them.
