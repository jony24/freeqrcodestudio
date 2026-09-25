# Free QR Code Studio

Production-oriented Next.js/React/TypeScript QR-code generator prepared for GitHub + Vercel.

## Stack

- Next.js 15 + React 19 + TypeScript
- Tailwind CSS
- `qrcode` for client-side QR generation
- No database or account system required
- Static public routes and Next.js metadata/sitemap/robots support

## Local setup

1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_SITE_URL` to your real production URL.
3. Set `NEXT_PUBLIC_CONTACT_EMAIL` to the real support address.
4. Keep `NEXT_PUBLIC_ADSTERRA_ENABLED=false` until real Adsterra snippets are installed.
5. Install dependencies with `npm install`.
6. Run `npm run dev`.
7. Run `npm run build` before deployment.

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL, sitemap, robots, metadata |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact page email |
| `NEXT_PUBLIC_ANALYTICS_ID` | Reserved for an analytics provider integration; empty means inactive |
| `NEXT_PUBLIC_ADSTERRA_ENABLED` | Enables Adsterra rendering only when `true` |

## Adsterra

Open `config/ads.ts` and paste only the real publisher snippets supplied by Adsterra into the clearly labeled fields. Do not fabricate zone IDs or scripts. Keep ads disabled until the snippets are real and reviewed.

## Deployment to GitHub

```bash
git init
git add .
git commit -m "Initial Free QR Code Studio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Deployment to Vercel

1. Import the GitHub repository into Vercel.
2. Add the environment variables from `.env.example` in Vercel Project Settings.
3. Deploy.
4. Add the custom production domain in Vercel.
5. Update `NEXT_PUBLIC_SITE_URL` to the final custom domain and redeploy.
6. Verify `/sitemap.xml`, `/robots.txt`, canonical tags, and Open Graph metadata.

## Google Search Console

1. Add and verify the final domain property.
2. Open Sitemaps.
3. Submit `https://YOUR-DOMAIN.com/sitemap.xml`.
4. Inspect important public URLs and request indexing when appropriate.

## Important manual review before launch

- Replace `YOUR-DOMAIN.com`.
- Replace `contact@example.com`.
- Add actual Adsterra snippets if desired.
- Decide on and integrate a real analytics provider/ID if desired.
- Review privacy, terms, cookie, and disclaimer text for the jurisdiction and services actually used.
- Test QR downloads and scanning on real Android and iPhone devices.
- Test any Adsterra code in a staging/deployment environment before enabling it.

## Routes

Home, QR generator, 17 QR tool routes, blog index + 12 articles, FAQ, About, Contact, Privacy Policy, Terms, Cookie Policy, Disclaimer, and Next.js 404, sitemap and robots endpoints.
