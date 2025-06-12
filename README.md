# Challenge 14 - React + TypeScript Adventure Blog 🌍

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

The **Adventure Blog Application** is a responsive single-page React app created using **TypeScript** and **Vite**, designed to showcase different travel destinations. The challenge focuses on component-based design, prop handling, and working with external data using **JSON Server**.

### Key Features:

- **Banner Component**: A large, eye-catching banner with centered content.
- **DetailsBlock Component**: Displays text on one side and an image on the other. Two unique variations are created.
- **PlacesContainer Component**: Fetches and iterates over travel places from `db.json`.
- **Place Component**: Displays individual place info such as an image, title, and short description.
- **Footer Component**: A simple footer for the site.
- **Responsive Design**: Optimized for laptops, tablets, and mobile devices.
- **Dummy Images**: Uses [Picsum](https://picsum.photos/) for placeholder images.
- **TypeScript Best Practices**: All components, props, and methods are typed properly using `.tsx` extensions.

---

## Technologies Used ⚙️

- ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
- ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
- ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

---

## 🔗 Demo

Check out the live demo of the Adventure Blog App:

👉 [Laptop Version](https://i.imghippo.com/files/kLe9228jdU.png)

---

## Installation 🔨

To run this project locally, follow the steps below:

### Steps to Install

1. Clone the repository:

   ```bash
   git clone https://github.com/makedonkatochevska/challenges.git
   ```

2. Clone the repository:

   ```bash
   git clone https://github.com/makedonkatochevska/challenges.git
   ```

3. Switch to the challenge branch:

   ```bash
   git checkout Challenge19_React_Basics
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. In a separate terminal, run the JSON server:
   ```bash
   npm run server
   ```

---

## Usage 🚀

### Components Overview

#### 1. **Banner**

- Displays a full-width banner image with centered heading or intro text.

#### 2. **DetailsBlock**

- Reusable layout component showing text and an image side by side.
- Two unique versions are created using different content.

#### 3. **PlacesContainer**

- Fetches destination data from `db.json`.
- Loops through places and renders each with the `Place` component.

#### 4. **Place**

- Displays individual place card with title, image, and brief description.

#### 5. **Footer**

- Static footer with optional links or copyright.

### Responsiveness

- Fully responsive layout tested on laptop, tablet, and mobile devices.

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

This project was developed as part of a React + TypeScript coding challenge focused on creating reusable components, consuming JSON-based data, and building a clean, responsive design with best practices in mind.

---

## Contact 📞

📫 You can reach me at [makedonkatochevska@gmail.com](mailto:makedonkatochevska@gmail.com) or connect with me on:

- [LinkedIn](https://www.linkedin.com/in/makedonka-tochevska)
- [GitHub](https://github.com/makedonkatochevska)
