# Ansaf Portfolio Website

A personal portfolio website built with Next.js (app router), TypeScript, and Tailwind CSS. The project showcases projects, skills, experience and contact information with progressive enhancement and a lightweight PWA setup.

## Features
- Next.js (app router) + TypeScript
- Tailwind CSS for styling
- Component-based structure under `src/app/components`
- Service worker and basic PWA assets in `public/`

## Requirements
- Node.js (16+ recommended)
- pnpm (recommended, project includes `pnpm-lock.yaml`) or npm/yarn

## Local setup (Windows - cmd.exe)
1. Install dependencies:
   pnpm install

2. Run the development server:
   pnpm dev

3. Build for production:
   pnpm build
   pnpm start

If you prefer npm:
1. npm install
2. npm run dev

## Useful files
- `src/app/page.tsx` — main app entry (home page)
- `src/app/layout.tsx` — app layout and global wrappers
- `src/app/components/` — all page sections and UI components
- `public/` — static assets (images, icons, service worker)
- `tailwind.config.ts` and `postcss.config.mjs` — Tailwind setup

## Editing
- Add new pages or sections under `src/app/components/` and import them into `src/app/page.tsx` as needed.
- Global styles are in `src/app/globals.css`.

## Contributing
Pull requests are welcome. Keep commits small and focused. Describe changes clearly in PR descriptions.

## License
This repository does not include a license file. Add a `LICENSE` file if you wish to specify usage terms.
