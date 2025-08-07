# Challenge 18 - React with Firebase

## Table of Contents

<details>
  <summary>Click to expand</summary>
  - 📜 Project Description  <br>
  - ⚙️ Technologies Used   <br>
  - 🔨 Installation   <br>
  - 🔗 Live Demo <br>
  - 🚀 Usage   <br>
  - 🔧 Features & Components   <br>
  - 🧰 Template Reference <br>
  - 📝 Credits   <br>
  - 📞 Contact   <br>
</details>

---

## Project Description 📜

This **Fitness Tracker App** is a React + TypeScript application built with **Firebase** integration for authentication and data storage. Users can log their workouts, view all workouts, and add new ones with a form that includes proper validation and user-friendly UX.

The app features **Google Authentication**, **Firestore integration**, and deployment via **Firebase Hosting**. It also uses **Material UI** for polished UI components and **Context API** for managing authentication state.

---

## Technologies Used ⚙️

- ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
- ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)
- ![Material UI](https://img.shields.io/badge/Material--UI-007FFF?style=flat-square&logo=mui&logoColor=white)
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)

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
   git checkout Challenge18_React_with_Firebase
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

## 🔗 Live Demo

[Click here to view the live app](https://fitness-tracker-challeng-e4680.web.app)

---

## Usage 🚀

- Unauthenticated users land on the **Welcome Page**, where they can log in with Google.
- After login, users are redirected to the **All Workouts** page.
- From there, users can:
  - View all previously tracked workouts.
  - Add a new workout via the **Add New Workout** form.
  - Navigate using the persistent **Navbar**.
  - Log out securely.

### Add Workout Form 📝

- Users fill out:
  - **Exercise Type** (dropdown, fetched from Firestore)
  - **Duration** (in minutes)
  - **Intensity** (Low, Medium, High)
- **Validation**: The submit button stays disabled unless all required fields are filled in correctly.
- On form submission:
  - The workout is saved to Firestore under the logged-in user.
  - The user is redirected to the Home page.

---

## Features & Components 🔧

### 🔐 Authentication

- Google login with Firebase Auth.
- Context API for managing login state.
- Logout redirects to the Welcome Page.

### 🧩 Components

- **WelcomePage**

  - Shown to users who are not logged in.
  - Contains a welcome message and login button.

- **Navbar**

  - Visible after login.
  - Includes links to All Workouts, Add New Workout, and Logout.

- **AllWorkouts**

  - Fetches and displays all workouts from Firestore.
  - If no workouts are found, a friendly message is shown.

- **AddNewWorkout**
  - A form to add a new workout:
    - Select exercise type
    - Enter duration (number input)
    - Choose intensity level
  - Submit button is disabled until form is valid.
  - Adds the workout to the user's personal workout list.

### 🔧 Additional Features

- Form validation via React state
- Data fetching with Firebase Firestore
- Google Auth integration with Firebase
- Responsive UI with Material UI

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

This project was built as part of a React + Firebase challenge during my Front-End Development course at **Brainster Academy**. It combines modern tools like React, TypeScript, Firebase, and Material UI to demonstrate real-world full-stack app development.

Special thanks to the Brainster mentors and team for guidance and support during the project.

---

## Contact 📞

📫 You can reach me at [makedonkatochevska@gmail.com](mailto:makedonkatochevska@gmail.com) or connect with me on:

- [LinkedIn](https://www.linkedin.com/in/makedonka-tochevska)
- [GitHub](https://github.com/makedonkatochevska)
