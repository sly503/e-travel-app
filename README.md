# Spring Boot + React Base Template - Frontend

Modern React frontend built with the latest technologies. Ready to be customized for your project.

## Tech Stack

- **React 19** - Latest React with new features
- **Vite 7** - Lightning-fast build tool
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Modern utility-first CSS
- **shadcn/ui** - High-quality, accessible component library
- **TanStack Query** - Powerful data fetching and caching
- **TanStack Router** - Type-safe routing (ready to use)
- **Axios** - HTTP client for API calls
- **Jotai** - Lightweight state management
- **Bun** - Fast JavaScript runtime and package manager

## Getting Started

### Prerequisites

- Bun 1.2+ installed
- Spring Boot backend running on port 8081

### Installation

```bash
cd frontend
bun install
```

### Development

```bash
# Start development server (port 5173)
bun dev

# Type checking
bun run typecheck

# Linting
bun run lint

# Format code
bun run format

# Run tests
bun test
```

### Build

```bash
# Build for production
bun run build

# Preview production build
bun run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── lib/
│   │   ├── api.ts       # API client and endpoints
│   │   └── utils.ts     # Utility functions
│   ├── hooks/           # Custom React hooks
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles
├── components.json      # shadcn/ui configuration
└── vite.config.ts       # Vite configuration
```

## API Integration

The frontend is configured to connect to the Spring Boot backend at `http://localhost:8081`.

### Example Usage

```typescript
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

function UsersList() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await api.get("/api/admin/users");
      return response.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data?.data.map((user) => (
        <div key={user.id}>{user.username}</div>
      ))}
    </div>
  );
}
```

## Adding Components

Add new shadcn/ui components:

```bash
# Add a single component
bunx shadcn@canary add button

# Add multiple components
bunx shadcn@canary add dialog table form
```

## Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:8081
```

## Available shadcn/ui Components

Currently installed:
- Button
- Card
- Input

Browse all available components: https://ui.shadcn.com/docs/components

## Code Style

- Use Prettier for formatting (configured in package.json)
- Follow ESLint rules
- Use TypeScript strict mode
- Prefer functional components with hooks

## Notes

- This is a base setup suitable for multiple applications
- Tailwind CSS v4 is configured with the new `@import "tailwindcss"` syntax
- Path aliases are set up: `@/` maps to `src/`
- Dark mode is ready to use with the `.dark` class
