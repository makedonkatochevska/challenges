# Challenge 19 - NEXT JS

## Table of Contents

<details>
  <summary>Click to expand</summary>
  - 📜 Project Description  <br>
  - ⚙️ Technologies Used   <br>
  - 🔨 Installation   <br>
  - 🚀 Usage   <br>
  - 📝 API Endpoints & Resources  <br>
  - 🧰 Template Reference <br>
  - 📝 Credits   <br>
  - 📞 Contact   <br>
</details>

---

## Project Description 📜

This project is a **Next.js E-commerce app** built to demonstrate full-stack functionality with **pre-rendering**, dynamic filtering, and client-side search. It fetches data from a **JSON server** (`db.json`) and populates pre-built HTML skeleton components with actual content using server-side data fetching.

Key functionalities include:

- Dynamic product and blog filtering by category, gender, or search query.
- Pre-rendered pages with `generateStaticParams`.
- Fully functional header, footer, and reusable components.
- AJAX/Fetch integration with JSON server for data.

---

## Technologies Used ⚙️

- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
- ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
- ![JSON Server](https://img.shields.io/badge/JSON_Server-FF6C37?style=flat-square)
- ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white)

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
   git checkout Challenge24_NextJS
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start JSON server:

   ```bash
   npm run server
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

---

## Usage 🚀

### Home Page

- Displays banner content, featured products, and featured blogs.
- Clicking on a category filter leads to the shop overview page with filtered products.
- Featured products and blogs link to their respective detail pages.

### Shop Overview Page

- Filter products by **gender** and/or search query.
- Server-side filtering using JSON server endpoints.
- Clear filters with “All Products”.
- Show a message if no results match the filters.

### Shop Detail Page

- View detailed information of a product.
- Display **related products** using a random selection of 4 products.

### Blog Overview Page

- Filter blogs by **category** and/or search query.
- Server-side filtering using JSON server endpoints.
- Show a message if no results match the filters.

### Blog Detail Page

- View full blog details.
- Display **related blogs** using a random selection of 3 blogs.

### Search Page

- Use the search query sent from the header form.
- Display results from both products and blogs.
- Fetch data server-side.

---

## API Endpoints & Resources 📝

- **Banner Content:** `http://localhost:5001/banner_content`
- **About Page:** `http://localhost:5001/about_page`
- **Products:** `http://localhost:5001/products`
  - Filter by search: `/products?q=<searchTerm>`
  - Filter by gender: `/products?gender_like=<gender>`
  - Combined filter: `/products?gender_like=<gender>&q=<searchTerm>`
- **Blogs:** `http://localhost:5001/blogs`
  - Filter by search: `/blogs?q=<searchTerm>`
  - Filter by category: `/blogs?category_like=<category>`
  - Combined filter: `/blogs?category_like=<category>&q=<searchTerm>

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

This project was built as part of a Next.js + Front-End Development challenge. All components with HTML skeletons were provided; the focus was on fetching data and implementing functionalities using pre-rendering.

---

## Contact 📞

📫 You can reach me at [makedonkatochevska@gmail.com](mailto:makedonkatochevska@gmail.com) or connect with me on:

- [LinkedIn](https://www.linkedin.com/in/makedonka-tochevska)
- [GitHub](https://github.com/makedonkatochevska)
