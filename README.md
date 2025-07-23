# Challenge 17 - React Context

## Table of Contents

<details>
  <summary>Click to expand</summary>
  - 📜 Project Description <br>
  - ⚙️ Technologies Used <br>
  - 🔨 Installation <br>
  - 🚀 Usage <br>
  - 🧰 Template Reference <br>
  - 📝 Credits <br>
  - 📞 Contact <br>
</details>

---

## Project Description 📜

This **Restaurant Application** is built with **React**, **TypeScript**, and **Zustand** using a mobile-first approach and clean component architecture.

It uses a local `db.json` server as its data source and provides interactive navigation via **React Router**.

Key features include:

- Mobile-first UI with centralized layout on larger screens.
- **Component-based** architecture with reusable, strongly typed components.
- **Zustand** is used for global state management (especially for handling favorites).
- Data fetched from a local JSON server via `npm run server`.
- Uses **AJAX PUT requests** to update reviews dynamically.
- Restaurant rating is calculated based on average star reviews and is live-updated.
- Smooth navigation using **React Router DOM** with clearly structured routes.
- Engaging error handling using **Lottie animations**.

### Pages & Components:

- **Navbar** — Persistent on all pages. Contains a logo (links to home) and a heart icon (links to favorites).
- **Footer** — Shared footer with consistent branding.
- **AllRestaurants** — Lists all restaurants from `db.json` using `RestaurantCard`.
- **RestaurantCard** — Displays summary info, links to restaurant detail page.
- **RestaurantDetail** — Displays detailed info about one restaurant, including a fully functional reviews section.
- **Reviews** — Users can submit reviews, triggering a `PUT` request to update `db.json`.
- **PopularRestaurants** — Displays top 10 restaurants by number of reviews, optionally sorted by rating.
- **SurpriseRestaurant** — Shows a link to a random restaurant each time it's clicked.
- **Cuisines** — Buttons for each cuisine type, linking to a filtered cuisine detail page.
- **CuisineDetail** — Shows only restaurants of the selected type.
- **Favorites** — Lists all favorite restaurants (globally managed with Zustand).

---

## Technologies Used ⚙️

- ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)
- ![Zustand](https://img.shields.io/badge/Zustand-000000?style=flat-square&logo=react&logoColor=white)
- ![Lottie](https://img.shields.io/badge/Lottie-FF3E00?style=flat-square&logo=lottie&logoColor=white)
- ![CSS Modules](https://img.shields.io/badge/CSS_Modules-1572B6?style=flat-square&logo=css3&logoColor=white)
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

---

## Installation 🔨

To run this project locally, follow the steps below:

### Steps to Install

1. Clone the repository:

   ```bash
   git clone https://github.com/makedonkatochevska/challenges.git .
   ```

2. Switch to the challenge branch:

   ```bash
   git checkout Challenge17_React_Context
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the JSON server:

   ```bash
   npm run server
   ```

5. Start the development server:

   ```bash
   npm run start
   ```

---

## Usage 🚀

- Visit the **Home Page** (`/`) to see a welcome message and a list of all restaurants.
- Click on a **restaurant card** to navigate to that restaurant’s detail page, where you can see detailed info and reviews.
- Submit a new review using the review form; this will update the restaurant’s rating in real time by sending a `PUT` request to the backend.
- Use the cuisine buttons to filter restaurants by their type.
- Visit the **Favorites Page** to view all your favorite restaurants, which are saved globally using Zustand and persist across page reloads.
- Click the **Surprise Me** button to go to a random restaurant’s detail page.
- If you visit an unknown or invalid route, the app will show a user-friendly **404 Error Page** with engaging Lottie animations.
- The **Navbar** is always visible with links to the Home Page and Favorites Page for easy navigation.

---

## 🧰 Template Reference

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

---

## Credits 📝

This project was developed as part of a React + TypeScript challenge, focused on component architecture, state management, and dynamic routing.
Special thanks to Brainster Academy for the starter data and project structure.

---

## Contact 📞

📫 You can reach me at [makedonkatochevska@gmail.com](mailto:makedonkatochevska@gmail.com) or connect with me on:

- [LinkedIn](https://www.linkedin.com/in/makedonka-tochevska)
- [GitHub](https://github.com/makedonkatochevska)
