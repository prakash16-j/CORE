# CORE People Dashboard

A modern, responsive dashboard for managing and filtering people data, built with React and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vite.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## 🛠️ Setup Instructions

To get the project running locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd core
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 Assumptions Made

During the development of this dashboard, the following assumptions were made:

- **Mock Data**: The application currently uses local mock data for demonstration purposes. In a production environment, this would be replaced by an API integration.
- **Responsive Design**: The sidebar is hidden on mobile devices and can be toggled via a menu icon (intended behavior for mobile UX).
- **Filtering Logic**: Filtering is performed on the client-side based on the current search query and selected filters.
- **Styling**: Tailwind CSS 4 features (like `@tailwindcss/vite` plugin) are used for modern styling capabilities.
