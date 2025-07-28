# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Untitled UI Vite starter kit - a React application built with modern tooling and Untitled UI components. It's a TypeScript project using Vite as the build tool, React 19.1, Tailwind CSS v4.1, and React Aria Components.

## Development Commands

- `npm run dev` - Start development server (runs on http://localhost:5173)
- `npm run build` - Build for production (runs TypeScript compiler then Vite build)
- `npm run preview` - Preview production build locally

## Project Architecture

### File Structure
- `src/components/` - UI components organized by category:
  - `base/` - Basic UI components (buttons, inputs, forms, etc.)
  - `application/` - Complex app components (navigation, modals, tables, etc.)
  - `marketing/` - Marketing-specific components
  - `foundations/` - Design system foundations (icons, logos, patterns)
  - `shared-assets/` - Shared illustrations and patterns
- `src/providers/` - React context providers (theme, router)
- `src/hooks/` - Custom React hooks
- `src/pages/` - Page components
- `src/styles/` - Global CSS files
- `src/utils/` - Utility functions

### Key Technologies
- **React 19.1** with TypeScript 5.8
- **Vite** for build tooling and development server
- **Tailwind CSS v4.1** for styling
- **React Aria Components** for accessible UI primitives
- **React Router v7** for routing
- **Motion** for animations

### Import Aliases
- `@/` maps to `src/` directory (configured in vite.config.ts and tsconfig.json)

### Component Architecture
Components follow Untitled UI design patterns:
- Base components provide fundamental UI elements
- Application components compose base components into complex interfaces
- Components use React Aria for accessibility
- TypeScript interfaces define component props and navigation structures

### Theme System
- Theme provider supports light/dark/system modes
- Themes stored in localStorage with system preference detection
- Dark mode applied via CSS class on document root

### Navigation Configuration
Navigation items are defined with TypeScript interfaces in `src/components/application/app-navigation/config.ts` supporting:
- Hierarchical menu structures
- Icons, badges, and dividers
- Type-safe navigation configuration

## Development Notes

- TypeScript configuration uses strict mode with additional linting rules
- Path aliases configured for clean imports using `@/` prefix
- Component structure follows Untitled UI conventions and patterns
- No explicit linting/formatting commands in package.json - uses TypeScript compiler for type checking
