# Flashcard App

A simple flashcard app built with React and TypeScript as part of a React learning roadmap.

## Features

- Flip cards to reveal answers
- Navigate between cards with Previous / Next buttons
- Progress bar showing how far through the deck you are
- Card counter (e.g. "2 of 4")

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
└── App.tsx   # Main flashcard component with state and UI
```

## How It Works

The flashcard component holds two parallel arrays — `question` and `answer` — indexed by the current page. Clicking **Show Answer** toggles the card between showing the question and the answer. The progress bar fills as you advance through the deck, and navigation is clamped so you can't go past the first or last card.

---

*Roadmap project 01 — React Learning Series*
