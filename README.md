# E-Travel App

A modern travel booking application built with **Astro + React** for SSR (Server-Side Rendering).

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         ASTRO (SSR Layer)                       │
│  - Renders pages on the server for fast initial load & SEO      │
│  - Serves static HTML + hydrates React components               │
├─────────────────────────────────────────────────────────────────┤
│                         REACT (UI Layer)                        │
│  - Interactive components with client-side state                │
│  - shadcn/ui for accessible, customizable UI components         │
│  - Jotai for lightweight state management                       │
├─────────────────────────────────────────────────────────────────┤
│                      TANSTACK QUERY (Data Layer)                │
│  - Server state management & caching                            │
│  - Automatic refetching & background updates                    │
├─────────────────────────────────────────────────────────────────┤
│                         TAILWIND CSS v4                         │
│  - Utility-first styling with new CSS-native approach           │
└─────────────────────────────────────────────────────────────────┘
```

## How It Works

### Astro + React Integration

```
src/
├── pages/           # Astro pages (.astro) - SSR entry points
│   └── index.astro  # Imports and renders React components
├── layouts/         # Astro layouts - shared HTML structure
│   └── Layout.astro # Base HTML with <head>, styles, etc.
├── components/      # React components (.tsx)
│   └── ui/          # shadcn/ui components
├── App.tsx          # Main React application component
└── index.css        # Global styles (Tailwind)
```

### The Request Flow

1. **User requests a page** (e.g., `/`)
2. **Astro renders** `src/pages/index.astro` on the server
3. **React components** are rendered to HTML (SSR)
4. **HTML is sent** to the browser (fast first paint)
5. **JavaScript loads** and React "hydrates" the page
6. **Page becomes interactive** (click handlers, state, etc.)

### Client Directives

In `.astro` files, use directives to control when React components hydrate:

```astro
---
import MyComponent from "../components/MyComponent";
---

<!-- Hydrate immediately on page load -->
<MyComponent client:load />

<!-- Hydrate when browser is idle -->
<MyComponent client:idle />

<!-- Hydrate when component is visible -->
<MyComponent client:visible />

<!-- Client-only, no SSR -->
<MyComponent client:only="react" />
```

## Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| SSR Framework | **Astro 5** | Server-side rendering, routing, build |
| UI Framework | **React 19** | Interactive components |
| Styling | **Tailwind CSS v4** | Utility-first CSS |
| Components | **shadcn/ui** | Accessible UI primitives |
| State (Client) | **Jotai** | Lightweight atomic state |
| State (Server) | **TanStack Query** | Data fetching & caching |
| HTTP Client | **Axios** | API requests |
| Runtime | **Bun** | Fast JS runtime & package manager |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) 1.2+

### Installation

```bash
bun install
```

### Development

```bash
# Start dev server at http://localhost:4321
bun dev

# Type checking
bun run check

# Linting
bun run lint

# Format code
bun run format
```

### Build & Preview

```bash
# Build for production
bun run build

# Preview production build
bun run preview
```

## Project Structure

```
e-travel-app/
├── src/
│   ├── pages/              # Astro pages (routes)
│   │   └── index.astro     # Home page
│   ├── layouts/            # Astro layouts
│   │   └── Layout.astro    # Base HTML template
│   ├── components/         # React components
│   │   └── ui/             # shadcn/ui components
│   ├── lib/                # Utilities
│   │   ├── api.ts          # API client
│   │   └── utils.ts        # Helper functions
│   ├── App.tsx             # Main React app
│   └── index.css           # Global styles
├── public/                 # Static assets
├── astro.config.mjs        # Astro configuration
├── tailwind.config.css     # Tailwind configuration
└── package.json
```

## Adding New Pages

Create a new `.astro` file in `src/pages/`:

```astro
---
// src/pages/flights.astro
import Layout from "../layouts/Layout.astro";
import FlightSearch from "../components/FlightSearch";
---

<Layout title="Search Flights - E-Travel">
  <FlightSearch client:load />
</Layout>
```

This creates a route at `/flights`.

## Adding shadcn/ui Components

```bash
# Add a single component
bunx shadcn@canary add button

# Add multiple components
bunx shadcn@canary add dialog table form select
```

## SSR Modes

In `astro.config.mjs`, you can configure the output mode:

```js
export default defineConfig({
  output: "static",  // Pre-render all pages at build time (default)
  // output: "server",  // Full SSR on every request
  // output: "hybrid",  // Mix of static and SSR per-page
});
```

## Environment Variables

Create a `.env` file:

```env
PUBLIC_API_URL=http://localhost:8081
```

Access in code:
```typescript
const apiUrl = import.meta.env.PUBLIC_API_URL;
```

## License

MIT
