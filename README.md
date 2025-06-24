# Challenge 15 - React + TypeScript Bike Store

## Table of Contents

<details>
  <summary>Click to expand</summary>
  - 📜 Project Description <br>
  - ⚙️ Technologies Used <br>
  - 🔗 Demo <br>
  - 🔨 Installation <br>
  - 🚀 Usage <br>
  - 🧰 Template Reference <br>
  - 📝 Credits <br>
  - 📞 Contact <br>
</details>

---

## Project Description 📜

This React-based **Bike Store Application** is a modern rewrite of a JavaScript DOM challenge focused on fetching and displaying bikes dynamically with filtering functionality. The app fetches bike data from an external API and displays cards for each product. Users can filter bikes by **either gender or brand**, but only one filter at a time is allowed.

Key features include:

- Data fetching with React hooks (`useEffect`, `useState`) and async/await.
- Components: `Card`, `CardsContainer`, `Filters`, `EachFilter`, `Header`, `Footer`, `MainSection`.
- Single-filter logic: users can filter by **one** gender or **one** brand at a time.
- Real-time filter badge counts reflecting how many products match each filter.
- Active filter highlighting with bold and orange styling.
- Clean, modular React component structure.
- Desktop-only layout consistent with the original challenge design.

---

## Technologies Used ⚙️

- ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
- ![CSS Modules](https://img.shields.io/badge/CSS_Modules-1572B6?style=flat-square&logo=css3&logoColor=white)
- ![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)
- ![Fetch API](https://img.shields.io/badge/Fetch-API-005571?style=flat-square&logo=javascript&logoColor=white)
- ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

---

## 🔗 Demo

Check out the live demo of the Adventure Blog App:

👉 [Live Demo](https://i.imghippo.com/files/kLe9228jdU.png)

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
   git checkout Challenge15_React_Hooks_Events
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

- On app load, bike data is fetched asynchronously from  
  `https://challenges.brainster.tech/ajax_data/data.json`.
- Users can filter the bike list by selecting **one filter at a time** — either a gender or a brand.
- Clicking the same active filter again will toggle it off and reset the product list to show all bikes.
- The **"Show All"** filter clears any active filters and displays the full bike collection.
- Filter badges dynamically show the number of bikes available for each filter option.
- Active filters are visually highlighted with bold text and an orange color.
- Components used include:
  - `Card` — displays individual bike info.
  - `CardsContainer` — renders the list of filtered bike cards.
  - `Filters` and `EachFilter` — display and manage filtering options.
  - `MainSection` — holds state and orchestrates data flow between components.

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

This project is a React rewrite of the **Async JavaScript DOM & Filter - Bike Store Application Challenge** originally developed by **Brainster Academy**.

It showcases skills in:

- Asynchronous data fetching with `fetch()` and React hooks.
- Dynamic rendering and filtering of lists based on user interaction.
- Clean component architecture and state management in React.
- Applying UI logic to highlight active filters and display dynamic counts.

Thanks to Brainster Academy for the original challenge and learning resources that inspired this project.

---

## Contact 📞

📫 You can reach me at [makedonkatochevska@gmail.com](mailto:makedonkatochevska@gmail.com) or connect with me on:

- [LinkedIn](https://www.linkedin.com/in/makedonka-tochevska)
- [GitHub](https://github.com/makedonkatochevska)
