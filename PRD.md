# Product Requirements Document (PRD)

## Title

Untitled UI Vite Starter Kit (React)

## Overview

This project is an open-source starter kit for building modern web applications with React, Vite, Tailwind CSS, and Untitled UI React components. It provides a comprehensive boilerplate with a rich set of customizable UI components, built-in routing, themes, and responsive layouts to accelerate the development of web-based dashboards and applications.

## Purpose and Goals

- Provide a quick, modern setup for React applications using Vite as the build tool.
- Offer a robust set of open-source UI components, based on the Untitled UI design system.
- Enable rapid prototyping and production with type-safe, scalable, and easily maintainable code.
- Serve as the foundation for applications requiring dashboard layouts, navigation, and interactive UI elements.

## Key Features

1. **Component Library Integration**
    - Rich set of basic UI components (buttons, forms, badges, tooltips, select, avatar, modals, etc.).
    - Foundations for icons, patterns, logos, and social/payment integrations.
    - Components split by category: base, application, marketing, foundations, shared assets.
    - Example integrations for drag-and-drop, pagination, file upload, data tables, and date pickers.

2. **Modern Tooling**
    - Built with React 19.1, Vite, and TypeScript 5.8 for optimized performance and type safety.
    - Tailwind CSS v4.1 for utility-first styling and rapid UI development.
    - Includes React Aria for accessibility and interaction patterns.

3. **Application Architecture**
    - Modular directory structure (`src/pages`, `src/components`, `src/hooks`, `src/styles`, `src/utils`).
    - React Router-based page routing (e.g., home screen, dashboard, 404 not found).
    - Core layouts (Sidebar navigation, header, responsive page containers).
    - Theme provider for light/dark modes and consistent styling.
    - Examples of complex UI flows: dashboard, system lists, event calendars, etc.

4. **Development Experience**
    - Easy local setup with `npm run dev`, production builds, and preview commands.
    - Type definitions and utility hooks for common UX patterns (clipboard, responsive behavior, etc.).
    - Built-in Vite aliasing (`@/` -> `src/`) for simplifying imports.

5. **Sample Content**
    - Sample event data, dashboards, and page templates for real-world context.
    - Notification banners, event cards, badge/tag UI, and multi-system widgets.
    - Pre-configured 404 page for missing routes.

## User Stories

- As a developer, I want to scaffold a modern React app with prebuilt UI and patterns, so I can focus on business logic.
- As a designer, I want the codebase to follow a design system, so the resulting UI is visually consistent and extensible.
- As a project owner, I want to accelerate time-to-market for my dashboard or app, minimizing setup friction.
- As a team, I want a modular architecture, so we can collaborate effectively and add/replace features easily.

## Acceptance Criteria

- Project can be started locally, builds successfully, and renders sample routes/pages.
- Core layout and navigation is responsive, accessible, and follows the Untitled UI design system.
- All basic components are usable out-of-the-box and customizable.
- Includes sample data/content so new users understand how to extend/replace demo features.

## Out of Scope

- Backend logic, authentication, and persistent storage (the kit does not provide an API/backend).
- Advanced business logic or domain-specific workflows.
- Mobile app (native) support; this starter kit is focused on web UIs.

## Non-functional Requirements

- Modern browser support (latest Chrome, Firefox, Safari, Edge).
- Accessible by default (where components leverage React Aria).
- Fast startup, HMR, and reliable production builds.
- Scalable and maintainable project file structure.

## Resources and Links

- [Untitled UI React Documentation](https://www.untitledui.com/react/docs/introduction)
- [Untitled UI Figma](https://www.untitledui.com/figma)
- [Component source (src/components)](./src/components/)
- [Development Setup in README.md](./README.md)

---

This PRD is based on the current state of the repo and should be updated as features/components evolve.

