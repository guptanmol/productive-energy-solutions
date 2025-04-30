#Productive Energy Solutions – React + Vite Setup

This project is a minimal React setup powered by **Vite**, configured with basic **ESLint rules** and **Hot Module Replacement (HMR)** for rapid development.

---

## Tech Stack

- **React** – UI Library
- **Vite** – Next-gen frontend tooling
- **Tailwind CSS** – Utility-first CSS framework
- **PostCSS** – CSS transformation
- **ESLint** – Linting setup with customization potential
- **@vitejs/plugin-react** – Uses Babel for Fast Refresh (HMR)

> **Note:** You can optionally switch to `@vitejs/plugin-react-swc` for faster builds using SWC.

---

## Project Structure

```
productive-energy-solutions/
├── public/             # Static assets
├── src/                # React components & app logic
│   └── ...             # Create components here
├── index.html          # Entry point
├── package.json        # Scripts & dependencies
├── tailwind.config.js  # Tailwind config
├── vite.config.js      # Vite config with plugin-react
└── README.md           # Project info
```

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the app locally
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

---

## Linting

This project includes basic ESLint configuration. To run linting:

```bash
npm run lint
```

## Plugin Options

| Plugin                    | Description                    |
|---------------------------|--------------------------------|
| `@vitejs/plugin-react`    | Babel-based, default setup     |
| `@vitejs/plugin-react-swc`| SWC-based, faster alternative  |

To switch to `swc`, install:
```bash
npm install --save-dev @vitejs/plugin-react-swc
```
Then update `vite.config.js` accordingly.

---

## Handoff Notes

- Make sure to clean up `.DS_Store` or OS-specific files before pushing to version control.
- Tailwind config is in place, but purge paths and theme customization might need adjustments depending on use cases.
- No routing is currently set up — consider adding React Router if scaling up.
- ESLint config can be extended for stricter rules.

---

