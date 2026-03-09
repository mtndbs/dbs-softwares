# DBS Softwares

A modern, high-performance web application built with React, TypeScript, and Vite. This project emphasizes clean code architecture, modular design, and developer productivity.

## 🚀 Tech Stack

- **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State/Form Management:** [React Hook Form](https://react-hook-form.com/)
- **Backend/Database:** [Supabase](https://supabase.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

## 💎 Clean Code Principles

This project adheres to strict clean code principles to ensure maintainability, scalability, and readability.

### 1. Component-Based Architecture

- **Atomic Design:** Components are broken down into small, reusable pieces (e.g., `AppButton`, `AppInput`, `ProjectCard`) located in `src/components/`.
- **Layout Separation:** Structural components like `Header` and `Footer` are isolated in `src/layouts/` to separate page structure from content.
- **Single Responsibility:** Each component focuses on doing one thing well.

### 2. Type Safety with TypeScript

- **Interfaces & Types:** All components define explicit interfaces for their props (e.g., `ProjectCardProps`), ensuring strictly typed data flow.
- **No `any`:** We strive to avoid `any` types to maximize the benefits of compile-time error checking.

### 3. Organized Project Structure

- **Data Separation:** Static data and lists are moved to `src/data/` (e.g., `lists.ts`) to keep component logic clean and focused on rendering.
- **Consistent File Naming:** PascalCase for components (`ProjectCard.tsx`) and camelCase for utilities/hooks.

### 4. Efficient Styling

- **Utility-First:** We use Tailwind CSS to style components directly within the markup, preventing global namespace pollution and reducing CSS bundle size.
- **Responsive Design:** Built-in responsive modifiers ensure the application looks great on all devices.

### 5. Form Handling

- **Performance:** `react-hook-form` is used to manage form state efficiently without unnecessary re-renders.
- **Validation:** Type-safe form validation ensures data integrity before submission.

## 📂 Folder Structure

```
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable UI components (Buttons, Inputs, Cards)
├── data/            # Static data files and constants
├── layouts/         # Layout components (Header, Footer)
├── App.tsx          # Main application component
└── main.tsx         # Application entry point
```
