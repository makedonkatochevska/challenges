# Challenge 13 - Async JavaScript DOM & Filter - Bike Store Application

## Table of Contents

<details>
  <summary>Click to expand</summary>
  - 📜 Project Description <br>
  - ⚙️ Technologies Used <br>
  - 🔨 Installation <br>
  - 🚀 Usage <br>
  - 📝 Credits <br>
  - 📞 Contact <br>
</details>
---

## Project Description 📜

The **Bike Store Application** is a dynamic, JavaScript-based e-commerce interface that showcases bikes fetched from an external JSON API using `fetch()` and `async/await`. The page displays bike cards generated from an array of product data and provides robust filtering options based on **brand** and **gender**. Users can interactively toggle filters, view filtered results, and get real-time updates on filter badge counts. This project emphasizes **DOM manipulation**, **asynchronous JavaScript**, **array filtering**, and **UI logic**.

### Key Features:

- Fetches bike data from:  
  `https://challenges.brainster.tech/ajax_data/data.json` using `fetch()`.
- Dynamically generated **bike cards** using JavaScript.
- Functional **left sidebar with filters** by **gender** and **brand**.
- **Filter toggle functionality** — click again to remove a filter.
- **Combined filters** — users can filter by brand and gender at the same time.
- **Badge counters** next to each filter dynamically show product count.
- Visual **highlighting** of selected filters (bold + orange).
- Consistent design layout based on the provided video instructions.

> ⚠️ Note: Design is for desktop only. The page is not responsive. You must not alter the given files; only your custom code is used for functionality.

---

## Technologies Used ⚙️

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
- ![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)
- ![Fetch API](https://img.shields.io/badge/Fetch-API-005571?style=flat-square&logo=javascript&logoColor=white)
- ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

---

## Installation 🔨

To run these exercises locally, follow these steps:

### Steps to Install

1. Clone the repository:
   ```bash
   git clone https://github.com/makedonkatochevska/challenges.git
   ```
2. Switch the branch
   ```bash
   git checkout Challenge13_Async_JavaScript
   ```
3. Open the index.html file into the browser of choice.

---

## Usage 🚀

### Website Functionality

#### 1. **Dynamic Bike Cards**

- On page load, bike data is fetched using `fetch()` and `async/await` from an external JSON file.
- JavaScript dynamically creates and displays bike cards with images, names, prices, and other details based on the fetched data.

##### 2. **Sidebar Filters**

- **"Show All" Filter**:

  - Clicking this will **reset all filters** (both gender and brand).
  - All available bikes will be shown.

- **Gender Filters**:

  - Options: `Male`, `Female`
  - Clicking one will filter the displayed bikes by gender.
  - Clicking again will toggle the filter off.

- **Brand Filters**:

  - Filter by specific brands (e.g., Cube, Trek, etc.).
  - Clicking a brand shows only bikes from that brand.
  - You can toggle each brand filter on/off.
  - Can be combined with gender filters.

- **Combined Filtering**:
  - You can apply **one gender** and **one brand** filter simultaneously.
  - For example, viewing only **Female** bikes from the **Cube** brand.

#### 3. **Filter Badge Counts**

- Each filter (except “Show All”) has a badge indicating the number of items it will show.

#### 4. **Active Filter Highlighting**

- Active filters are styled with a **bold font** and **orange color**.
- Clicking a selected filter again will deactivate it and remove the styling.

> ⚠️ Note: All UI behavior and design effects (including hover states) are implemented exactly as shown in the provided video. This site is intended for desktop use only and is not responsive.

---

## Credits 📝

This project was developed as part of a JavaScript challenge focused on the following concepts:

- **Asynchronous JavaScript** using `fetch()` and `async/await`.
- **DOM Manipulation** to dynamically generate bike cards and handle user interactions.
- **Array Filtering** to enable gender and brand filtering functionality.
- **CSS Styling** to replicate the design and hover effects shown in the provided video.
- **UI/UX** design practices for a clean and interactive e-commerce page.

A special thanks to **Brainster Academy** for providing the materials and challenges that made this project possible.

---

## Contact 📞

📫 You can reach me through email at [makedonkatochevska@gmail.com](mailto:makedonkatochevska@gmail.com) or follow me on:

- [LinkedIn](https://www.linkedin.com/in/makedonka-tochevska)
- [GitHub](https://github.com/makedonkatochevska)
