# Overview

This is a modern portfolio website built for Suyog Pawara, a Computer Engineering graduate and Java Full Stack Developer. The application features a responsive single-page design showcasing personal information, skills, projects, certificates, and contact details. Built with React, TypeScript, and Tailwind CSS, it includes interactive components, smooth animations, dark/light theme support, and a functional contact form with EmailJS integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a modern React-based Single Page Application (SPA) architecture:
- **React 18** with TypeScript for type safety and modern development patterns
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing (currently single route)
- **TanStack Query** for server state management and data fetching
- **Tailwind CSS** for utility-first styling with custom CSS variables for theming

## Component Structure
The portfolio is organized into modular components:
- **Layout Components**: Navigation, Hero, Footer with sticky positioning and smooth scrolling
- **Content Sections**: About, Skills, Projects, Certificates, Contact - each with scroll animations
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives
- **Custom Hooks**: useTheme for dark/light mode, useTypingAnimation for text effects, useScrollAnimation for viewport-based animations

## Styling System
- **Design System**: shadcn/ui "new-york" style with neutral base colors
- **Theme Support**: CSS custom properties enabling seamless dark/light theme switching
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Animations**: Custom CSS animations for floating elements, gradients, and scroll-triggered effects

## Backend Architecture
The server follows an Express.js-based architecture:
- **Express Server** with TypeScript for API endpoints (currently minimal)
- **Modular Storage Interface** with in-memory implementation and future database extensibility
- **Development/Production Modes** with Vite integration for development and static file serving for production

## Data Management
- **Type-Safe Interfaces**: Comprehensive TypeScript types for Project, Skill, Certificate, and ContactForm
- **Static Data**: Portfolio content stored as typed constants within components
- **Form Handling**: React Hook Form with validation for contact form
- **State Management**: React Query for server state, React hooks for local state

# External Dependencies

## UI and Styling
- **@radix-ui**: Comprehensive suite of unstyled, accessible UI primitives (accordion, dialog, dropdown, etc.)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS for processing
- **class-variance-authority & clsx**: Type-safe variant handling and conditional className utilities
- **Lucide React**: Modern icon library for consistent iconography

## Development and Build Tools
- **Vite**: Fast build tool with TypeScript support and hot module replacement
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment
- **@replit/vite-plugin-cartographer**: Development tooling for Replit integration

## Database and ORM
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect configuration
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **Drizzle-kit**: Database migrations and schema management

## Communication and Forms
- **@emailjs/browser**: Client-side email service integration for contact form functionality
- **React Hook Form**: Performant form library with validation support
- **@hookform/resolvers**: Form validation resolvers for integration with validation libraries

## Routing and State Management
- **Wouter**: Minimalist client-side routing library
- **@tanstack/react-query**: Powerful data fetching and state management for server state

## Fonts and Assets
- **Google Fonts**: Inter font family for modern typography
- **Unsplash**: Placeholder images for projects and profile photos