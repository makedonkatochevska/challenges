# Challenge 16 - React + TypeScript Music App

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

This React + TypeScript **Music Application** is a mobile-first project that dynamically displays artists and their albums with smooth navigation using React Router.

Key features include:

- Mobile-focused design with a centered layout on desktop.
- Data sourced from a local `db.ts` file including artists and albums information.
- React Router for SPA navigation between pages:
  - **Home Page** — shows a welcome screen and a list of all artists.
  - **Artist Page** — detailed artist info and albums list.
  - **Album Page** — detailed album information.
  - **Error Page** — displays a user-friendly 404 page with engaging Lottie animations for unmatched routes.
- Component-based design with reusable and strongly typed components:
  - `Navbar` — visible on all pages, with a Link to the Home Page.
  - `ArtistsList` and `ArtistItem` — listing and individual artist cards.
  - `ArtistPage` and `AlbumsList` — artist details and albums overview.
  - `AlbumPage` — detailed album view.
  - `ErrorPage` — 404 page with Lottie animation.
- TypeScript types for artists and albums data ensure type safety.
- Clean code structure and best practices with React hooks and router.

---

## Technologies Used ⚙️

- ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)
- ![Lottie](https://img.shields.io/badge/Lottie-FF3E00?style=flat-square&logo=lottie&logoColor=white)
- ![CSS Modules](https://img.shields.io/badge/CSS_Modules-1572B6?style=flat-square&logo=css3&logoColor=white)
- ![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)

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
   git checkout Challenge16_React_Routing
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

---

## Usage 🚀

- The app opens on the **Home Page**, displaying a welcome message and a list of artists.
- Click an artist card (`ArtistItem`) to navigate to that artist’s detail page with their info and albums.
- On the **Artist Page**, view detailed artist information along with their albums.
- Click an album image to open the **Album Page** with detailed album information.
- Use the **Navbar** link to return to the Home Page anytime.
- If the user navigates to an unknown route, the **Error Page** appears featuring a Lottie animation and a friendly 404 message.

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

This project is developed to practice React, TypeScript, React Router, and component design, featuring Lottie animations for improved user experience on error pages.

Thanks to Brainster Academy for the challenge and starter data.

---

## Contact 📞

📫 You can reach me at [makedonkatochevska@gmail.com](mailto:makedonkatochevska@gmail.com) or connect with me on:

- [LinkedIn](https://www.linkedin.com/in/makedonka-tochevska)
- [GitHub](https://github.com/makedonkatochevska)
