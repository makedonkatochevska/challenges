// html elements
const productsSectionContainer = document.querySelector(".products-section");
const brandFilterContainer = document.querySelector("#brandFilterContainer");
const genderContainer = document.getElementById("genderContainer");
const showAllBtn = document.getElementById("showAllBtn");
const showAllContainer = document.getElementById("showAllFilter");
const showAllP = document.getElementById("showAllP");

// initial array for all products
let allProducts = [];

// active filters
let activeFilters = {
  brand: null,
  gender: null,
};

// Fetch data function
async function fetchData() {
  try {
    const response = await fetch(
      "https://challenges.brainster.tech/ajax_data/data.json"
    );

    const data = await response.json();
    console.log(data.products);
    allProducts = data.products;
    renderCards(allProducts);
    handleGenderCategories(data.products);
    handleBrandsCategories(data.products);
    showAllBtnData(data.products);
  } catch (error) {
    console.log("Error", error);
  }
}

// Render cards function
function renderCards(cardsData) {
  productsSectionContainer.innerHTML = "";

  cardsData.forEach((card) => {
    productsSectionContainer.innerHTML += `
	  <div class="card">
        <img src="./img/${card.image}.png" alt="" />
        <div class="title-container">
            <h4>${card.name}</h4>
            <p>${card.price} $</p>
        </div>
    </div>
	`;
  });
}

// Function for handling brand categories
function handleBrandsCategories(cardsData) {
  brandFilterContainer.innerHTML = "";

  const brands = [...new Set(cardsData.map((card) => card.brand))];

  const brandCount = {};

  cardsData.forEach((card) => {
    if (brandCount[card.brand]) {
      brandCount[card.brand]++;
    } else {
      brandCount[card.brand] = 1;
    }
  });

  brands.forEach((brand) => {
    renderBrandsCategories(brand, brandCount[brand]);
  });
}

// Function to render brand categories
function renderBrandsCategories(brand, count) {
  const li = document.createElement("li");

  li.innerHTML = `
      <div class="filter-list-inner">
        <p class="filter-name" data-brand="${brand}">${brand}</p>
        <button class="filter-number-btn" >${count}</button> 
      </div>
    `;
  brandFilterContainer.appendChild(li);

  //event
  li.addEventListener("click", () => {
    toggleFilter("brand", brand, li);
  });
}

// Function for handling gender categories
function handleGenderCategories(cardsData) {
  const genders = [...new Set(cardsData.map((card) => card.gender))];
  genderContainer.innerHTML = "";

  const genderCount = {};

  cardsData.forEach((card) => {
    if (genderCount[card.gender]) {
      genderCount[card.gender]++;
    } else {
      genderCount[card.gender] = 1;
    }
  });

  genders.forEach((gender) => {
    renderGenderCategory(gender, genderCount[gender]);
  });
}

// Function to render gender categories
function renderGenderCategory(gender, count) {
  const li = document.createElement("li");

  li.innerHTML = `
    <div class="filter-list-inner">
      <p class="filter-name" data-gender="${gender}">${gender}</p>
      <button class="filter-number-btn">${count}</button>
    </div>
  `;
  genderContainer.appendChild(li);

  //event
  li.addEventListener("click", () => {
    toggleFilter("gender", gender, li);
  });
}

// Toggle filter logic
function toggleFilter(filterType, value, liElement) {
  //html elements
  const filterP = liElement.querySelector(".filter-name");
  const filterButton = liElement.querySelector(".filter-number-btn");

  showAllP.classList.remove("active-filter");
  showAllBtn.classList.remove("active-button");

  // Check which type is the filter
  if (filterType === "brand") {
    const allBrandItems = document.querySelectorAll(
      `#brandFilterContainer .filter-name`
    );

    allBrandItems.forEach((item) => {
      item.classList.remove("active-filter");
      item.nextElementSibling.classList.remove("active-button");
    });

    if (activeFilters.brand === value) {
      // remove the selected brand if it's already active
      activeFilters.brand = null;
      filterP.classList.remove("active-filter");
      filterButton.classList.remove("active-button");
    } else {
      activeFilters.brand = value;
    }
  } else if (filterType === "gender") {
    const allGenderItems = document.querySelectorAll(
      `#genderContainer .filter-name`
    );

    allGenderItems.forEach((item) => {
      item.classList.remove("active-filter");
      item.nextElementSibling.classList.remove("active-button");
    });

    if (activeFilters.gender === value) {
      activeFilters.gender = null;
      filterP.classList.remove("active-filter");
      filterButton.classList.remove("active-button");
    } else {
      activeFilters.gender = value;
    }
  }

  // add the active class
  if (activeFilters.brand === value || activeFilters.gender === value) {
    filterP.classList.add("active-filter");
    filterButton.classList.add("active-button");
  }

  //console.log("Active Filters:", activeFilters);
  filterProducts();
}

// Filter logic
function filterProducts() {
  let filteredProducts = allProducts;

  if (activeFilters.brand) {
    filteredProducts = filteredProducts.filter(
      (product) => product.brand === activeFilters.brand
    );
    //console.log("Filtered by Brand:", filteredProducts);
  }

  if (activeFilters.gender) {
    filteredProducts = filteredProducts.filter(
      (product) => product.gender === activeFilters.gender
    );
    //console.log("Filtered by Gender:", filteredProducts);
  }

  renderCards(filteredProducts);
}

// Show All button handling function
function showAllBtnData(data) {
  initialShowAllState();

  showAllBtn.textContent = data.length;

  showAllContainer.addEventListener("click", () => {
    activeFilters = { brand: null, gender: null }; // reset all filters
    renderCards(allProducts);
    resetActiveClass();

    // toggle the active classes on "Show All" when clicked
    if (showAllBtn.classList.contains("active-filter")) {
      showAllP.classList.remove("active-filter");
      showAllBtn.classList.remove("active-button");
    } else {
      showAllP.classList.add("active-filter");
      showAllBtn.classList.add("active-button");
    }

    //console.log("Show All clicked. Active Filters:", activeFilters);
  });
}

// Reset all active classes when Show All button is clicked
function resetActiveClass() {
  const allFilterP = document.querySelectorAll(".filter-name");
  const allFilterNumBtns = document.querySelectorAll(".filter-number-btn");

  allFilterP.forEach((item) => {
    item.classList.remove("active-filter");
  });

  allFilterNumBtns.forEach((item) => {
    item.classList.remove("active-button");
  });
}

// Initial Show All Button state
function initialShowAllState() {
  showAllP.classList.add("active-filter");
  showAllBtn.classList.add("active-button");
}

// LOAD EVENT
fetchData();
