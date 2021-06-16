// Troy Grossi

// food navigation
var foodNavEl = document.querySelector("#food-nav");
var displayFoodButtons = function (event) {
  tabSelectEl = foodNavEl.querySelector(".is-active");
  if (tabSelectEl.id === "food-name") {
    document.querySelector("#buttons-food-surprise").style.display = "none";
    document.querySelector("#buttons-food-type").style.display = "none";
    document.querySelector("#buttons-food-name").style.display = "flex";
  } else if (tabSelectEl.id === "food-type") {
    document.querySelector("#buttons-food-surprise").style.display = "none";
    document.querySelector("#buttons-food-name").style.display = "none";
    document.querySelector("#buttons-food-type").style.display = "flex";
  } else if (tabSelectEl.id === "food-surprise") {
    document.querySelector("#buttons-food-type").style.display = "none";
    document.querySelector("#buttons-food-name").style.display = "none";
    document.querySelector("#buttons-food-surprise").style.display = "flex";
  }
};
var activateFoodTab = function (event) {
  console.log(foodNavEl.querySelector(".is-active"));
  console.log(event.target);
  console.log(event.target.className);
  foodNavEl.querySelector(".is-active").removeAttribute("class");
  if (event.target.className === "food-name") {
    document.querySelector("#food-name").setAttribute("class", "is-active");
    console.log("test1");
  } else if (event.target.className === "food-type") {
    document.querySelector("#food-type").setAttribute("class", "is-active");
    console.log("test1");
  } else if (event.target.className === "food-surprise") {
    document.querySelector("#food-surprise").setAttribute("class", "is-active");
  }
  displayFoodButtons(event);
};
foodNavEl.addEventListener("click", activateFoodTab);

// drink navigation
var drinkNavEl = document.querySelector("#drink-nav");
var displayDrinkButtons = function (event) {
  tabSelectEl = drinkNavEl.querySelector(".is-active");
  if (tabSelectEl.id === "drink-name") {
    document.querySelector("#buttons-drink-surprise").style.display = "none";
    document.querySelector("#buttons-drink-type").style.display = "none";
    document.querySelector("#buttons-drink-name").style.display = "flex";
  } else if (tabSelectEl.id === "drink-type") {
    document.querySelector("#buttons-drink-surprise").style.display = "none";
    document.querySelector("#buttons-drink-name").style.display = "none";
    document.querySelector("#buttons-drink-type").style.display = "flex";
  } else if (tabSelectEl.id === "drink-surprise") {
    document.querySelector("#buttons-drink-type").style.display = "none";
    document.querySelector("#buttons-drink-name").style.display = "none";
    document.querySelector("#buttons-drink-surprise").style.display = "flex";
  }
};
var activateDrinkTab = function (event) {
  console.log(drinkNavEl.querySelector(".is-active"));
  console.log(event.target);
  console.log(event.target.className);
  drinkNavEl.querySelector(".is-active").removeAttribute("class");
  if (event.target.className === "drink-name") {
    document.querySelector("#drink-name").setAttribute("class", "is-active");
    console.log("test1");
  } else if (event.target.className === "drink-type") {
    document.querySelector("#drink-type").setAttribute("class", "is-active");
    console.log("test1");
  } else if (event.target.className === "drink-surprise") {
    document
      .querySelector("#drink-surprise")
      .setAttribute("class", "is-active");
  }
  displayDrinkButtons(event);
};
drinkNavEl.addEventListener("click", activateDrinkTab);

// movie navigation
var movieNavEl = document.querySelector("#movie-nav");
var displayMovieButtons = function (event) {
  tabSelectEl = movieNavEl.querySelector(".is-active");
  if (tabSelectEl.id === "movie-genre") {
    document.querySelector("#buttons-movie-surprise").style.display = "none";
    document.querySelector("#buttons-movie-year").style.display = "none";
    document.querySelector("#buttons-movie-genre").style.display = "flex";
  } else if (tabSelectEl.id === "movie-year") {
    document.querySelector("#buttons-movie-surprise").style.display = "none";
    document.querySelector("#buttons-movie-genre").style.display = "none";
    document.querySelector("#buttons-movie-year").style.display = "flex";
  } else if (tabSelectEl.id === "movie-surprise") {
    document.querySelector("#buttons-movie-year").style.display = "none";
    document.querySelector("#buttons-movie-genre").style.display = "none";
    document.querySelector("#buttons-movie-surprise").style.display = "flex";
  }
};
var activateMovieTab = function (event) {
  console.log(movieNavEl.querySelector(".is-active"));
  console.log(event.target);
  console.log(event.target.className);
  movieNavEl.querySelector(".is-active").removeAttribute("class");
  if (event.target.className === "movie-genre") {
    document.querySelector("#movie-genre").setAttribute("class", "is-active");
    console.log("test1");
  } else if (event.target.className === "movie-year") {
    document.querySelector("#movie-year").setAttribute("class", "is-active");
    console.log("test1");
  } else if (event.target.className === "movie-surprise") {
    document
      .querySelector("#movie-surprise")
      .setAttribute("class", "is-active");
  }
  displayMovieButtons(event);
};
movieNavEl.addEventListener("click", activateMovieTab);

// Troy Grossi
