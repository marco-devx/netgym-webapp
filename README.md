# NetGym WebApp

A modern baseball player management dashboard built for the NetGym technical challenge. This application allows users to view player statistics, sort data, edit player details, and generate AI-powered biographies.

---

## 📖 Description

The **NetGym WebApp** is a high-performance frontend application designed to demonstrate advanced modern web development practices. It features:
- **Interactive Player List:** Sortable columns for comprehensive statistical analysis.
- **Detailed Player View:** In-depth look at a player's season performance.
- **Edit Capabilities:** Real-time editing of player statistics with backend synchronization.
- **AI Integration:** LLM-powered biography generation for players.
- **Robust Persistence:** Optimized state management ensuring data consistency across reloads.
- **Clean UI:** A polished, user-friendly interface using Tailwind CSS.

## 🚀 Tech Stack

- **Runtime:** [Bun](https://bun.sh)
- **Build Tool:** [RSBuild](https://bundless.rsbuild.dev)
- **Framework:** [React 19](https://react.dev)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Data Fetching:** [TanStack Query](https://tanstack.com/query)
- **Routing:** [React Router v7](https://reactrouter.com)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Code Quality:** [Biome](https://biomejs.dev)

## ✨ Key Features

### ⚾ Player Management
- **List View:** View all players with key stats (Hits, Runs, Average, etc.).
- **Sorting:** Sort by any column (e.g., sort by 'Hits' descending).
- **Detail View:** Click on any player to see their full profile and season statistics.

### ✏️ Editing & Persistence
- **Edit Mode:** Update player statistics directly from the UI.
- **Smart Saving:** Only modified fields are sent to the server (PATCH).
- **Instant Updates:** Changes are reflected immediately, and browser state is updated to prevent stale data on refresh.

### 🤖 AI Bio Generator
- **Bio Generation:** Request an AI-generated biography for any player.
- **Polling Architecture:** robust polling mechanism to check job status.
- **Renewal:** Re-generate bios on demand.

## 🏁 Getting Started

### Prerequisites
- **Bun:** [Install Bun](https://bun.sh/docs/install)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd netgym-webapp

# Install dependencies
bun install
```

### Development

Start the development server:

```bash
bun dev
```

The application will be available at `http://localhost:3000`.

### Production Build

```bash
bun run build
```

The output will be generated in the `dist` directory.

### Code Quality

We use **Biome** for linting and formatting.

```bash
# Lint code
bun lint

# Format code
bun format
```

## 📁 Project Structure

```
src/
├── components/       # UI Components
│   ├── common/       # Shared components (LoadingSpinner, etc.)
│   └── PlayerList/   # Player-related components (Table, BioGenerator)
├── config/           # App configuration (Axios, i18n)
├── pages/            # Application Pages (Home, PlayerDetail)
├── services/         # API services (Player, Bio)
├── types/            # TypeScript definitions
└── utils/            # Helper functions
```

## 🤝 Contributing

1.  Ensure your code passes `bun lint`.
2.  Submit a Pull Request.

---
