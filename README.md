# Swiss Watches Magazine — Frontend Recreation

A pixel-focused recreation of the Swiss Watches Magazine interface based on a provided Figma design.

The project focuses on accurate layout implementation, typography, spacing, reusable UI components, and motion interactions.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Next/Image
- SVG assets

## Implementation

The interface was recreated from the Figma design and structured into reusable React components.

Implemented sections include:

- Header and navigation
- Hero section
- Latest Stories
- Editorial Categories
- Curated content
- News
- Boutique Travel Guide
- Newsletter
- Videos

## Motion & Interaction

Interactive elements were implemented with Framer Motion.

The project uses reusable animation configurations for:

- image hover
- category hover
- title hover
- author hover
- bookmark interaction
- buttons

Hover areas are intentionally independent, allowing each UI element to react separately rather than triggering animation for the entire card.

## Project Structure

```text
components/
├── animations/
├── layout/
├── sections/
└── ui/

constants/
public/
└── images/
```

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Status

Frontend implementation completed as a portfolio case study.

The project successfully passes the Next.js production build.

## Live Demo

Deployment link will be added here.
