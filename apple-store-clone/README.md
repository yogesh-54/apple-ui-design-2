# Apple Store Page Clone

React + Tailwind CSS + Vite recreation of the Apple Store landing page,
using the images from the provided assets folder.

## Structure

```
apple-store-clone/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/          # product + card images
    └── components/
        ├── Header.jsx
        ├── StoreHero.jsx
        ├── CategoryIcons.jsx
        ├── LatestSection.jsx
        ├── HelpSection.jsx
        ├── DifferenceSection.jsx
        ├── CardRow.jsx      # reused for Accessories / Sound / Experience / Special stores
        ├── QuickLinks.jsx
        └── Footer.jsx
```

## Run it

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```
