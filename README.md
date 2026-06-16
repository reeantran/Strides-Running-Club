# Strides at UCSD — Next.js + Tailwind Migration

## Setup

```bash
npm install
npm run dev        # localhost:3000
npm run build      # production build (same as Vercel does)
```

Copy your existing `fonts/` folder → `public/fonts/`
Copy your existing `images/` folder → `public/images/`

---

## File Map (old → new)

| Old file              | New file                          | Notes                              |
|-----------------------|-----------------------------------|------------------------------------|
| `style.css`           | `app/globals.css` + Tailwind      | Font-faces kept; rest is utilities |
| `strides.js`          | Split into components             | Hamburger → Navbar state; tabs → ScheduleTabs state |
| `index.html`          | `app/page.jsx`                    | ✅ Done                            |
| `cards.html`          | `app/cards/page.jsx`              | Hub page, link grid                |
| `common-cards.html`   | `app/common-cards/page.jsx`       | Uses RouteCard + data array        |
| `uncommon-cards.html` | `app/uncommon-cards/page.jsx`     |                                    |
| `rare-cards.html`     | `app/rare-cards/page.jsx`         |                                    |
| `epic-cards.html`     | `app/epic-cards/page.jsx`         |                                    |
| `legendary-cards.html`| `app/legendary-cards/page.jsx`    |                                    |
| `golden-card.html`    | `app/golden-card/page.jsx`        |                                    |
| `officers.html`       | `app/officers/page.jsx`           | Fetches Google Sheet (temporary)   |
| `schedule.html`       | `app/schedule/page.jsx`           | Uses ScheduleTabs component        |
| `vercel.json`         | Not needed (Next.js on Vercel)    | Vercel auto-detects Next.js        |

---

## Components

| Component          | Replaces                                      |
|--------------------|-----------------------------------------------|
| `Navbar.jsx`       | Navbar HTML block duplicated in every file    |
| `Footer.jsx`       | Footer HTML block duplicated in every file    |
| `RouteCard.jsx`    | Individual card markup repeated per card      |
| `OfficerCard.jsx`  | Officer card markup repeated per officer      |
| `ScheduleTabs.jsx` | Tab JS + day-content HTML in schedule.html    |

---

## Data pattern for cards

Instead of hardcoded card HTML, each tier page imports a data array:

```js
// data/cards/common.js
export const commonCards = [
  {
    cardImage: '/images/cards/common/card1.avif',
    mapUrl: 'https://onthegomap.com/...',
    mapImage: '/images/maps/common/map1.avif',
    artCredit: 'Art by ...',
    description: 'Route description here.',
  },
  // ...
];
```

Then the page:
```jsx
// app/common-cards/page.jsx
import RouteCard from '@/components/RouteCard';
import { commonCards } from '@/data/cards/common';

export default function CommonCardsPage() {
  return (
    <div className="max-w-content w-full mx-auto my-[50px] px-12
                    grid gap-[30px]"
         style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(384px, 1fr))' }}>
      {commonCards.map((card, i) => (
        <RouteCard key={i} rarity="common" {...card} />
      ))}
    </div>
  );
}
```

---

## Sanity CMS (next step — officers + schedule only)

When ready, officers and schedule data moves from Google Sheets / hardcoded JSX
into Sanity Studio. The components stay the same — only the data source changes.

```bash
npm install next-sanity @sanity/image-url
npx sanity init --env
```
