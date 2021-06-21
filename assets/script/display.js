// Dish Variables
var dishNameEl = document.querySelector(".dish-name");
var dishIngredientsFirstEl = document.querySelector(".dish-ingredients-first");
var dishIngredientsSecondEl = document.querySelector(
  ".dish-ingredients-second"
);
var dishInstructionsEl = document.querySelector(".dish-instructions");
var dishImageEl = document.querySelector(".dish-image");
var dishNameEl = document.querySelector(".dish-name");
// Drink Variables
var drinkNameEl = document.querySelector(".drink-name");
var drinkIngredientsFirstEl = document.querySelector(
  ".drink-ingredients-first"
);
var drinkIngredientsSecondEl = document.querySelector(
  ".drink-ingredients-second"
);
var drinkInstructionsEl = document.querySelector(".drink-instructions");
var drinkImageEl = document.querySelector(".drink-image");
var drinkNameEl = document.querySelector(".drink-name");
// Movie Variables
var movieTitleEl = document.querySelector(".movie-title");
var movieYearEl = document.querySelector(".year");
var movieGenreEl = document.querySelector(".genre");
var movieOverviewEl = document.querySelector(".movie-description");
var movieImageEl = document.querySelector(".movie-image");
// Date Object
var date = JSON.parse(localStorage.getItem("date"));
console.log(date);

var returnEl = document.querySelector(".return-container");
returnEl.addEventListener("click", function () {
  window.location.replace("./index.html");
});

var setDishName = function () {
  dishNameEl.textContent = date[0].name;
};
var setDishIngredients = function () {
  for (let i = 0; i < date[0].ingredients.length; i += 2) {
    var newIngredientOneEl = document.createElement("li");
    var newIngredientTwoEl = document.createElement("li");
    newIngredientOneEl.textContent =
      "-" + date[0].ingredients[i] + ", " + date[0].measurements[i];
    dishIngredientsFirstEl.append(newIngredientOneEl);
    if (date[0].ingredients[i + 1]) {
      newIngredientTwoEl.textContent =
        "-" + date[0].ingredients[i + 1] + ", " + date[0].measurements[i + 1];
      dishIngredientsSecondEl.append(newIngredientTwoEl);
    }
  }
};
var setDishInstructions = function () {
  dishInstructionsEl.textContent = date[0].instructions;
};
var setDishImage = function () {
  dishImageEl.setAttribute("src", date[0].image);
};

var setDrinkName = function () {
  drinkNameEl.textContent = date[1].name;
};
var setDrinkIngredients = function () {
  for (let i = 0; i < date[1].ingredients.length; i += 2) {
    var newIngredientOneEl = document.createElement("li");
    var newIngredientTwoEl = document.createElement("li");
    newIngredientOneEl.textContent =
      "-" + date[1].ingredients[i] + ", " + date[1].measurements[i];
    drinkIngredientsFirstEl.append(newIngredientOneEl);
    if (date[1].ingredients[i + 1]) {
      newIngredientTwoEl.textContent =
        "-" + date[1].ingredients[i + 1] + ", " + date[1].measurements[i + 1];
      drinkIngredientsSecondEl.append(newIngredientTwoEl);
    }
  }
};
var setDrinkInstructions = function () {
  drinkInstructionsEl.textContent = date[1].instructions;
};
var setDrinkImage = function () {
  drinkImageEl.setAttribute("src", date[1].image);
};

var setMovieTitle = function () {
  movieTitleEl.textContent = date[2].title;
};
var setMovieYear = function () {
  movieYearEl.textContent = date[2].year;
};
var setMovieGenre = function () {
  movieGenreEl.textContent = date[2].genre;
};
var setMovieOverview = function () {
  movieOverviewEl.textContent = date[2].overview;
};
var setMovieImage = function () {
  movieImageEl.setAttribute("src", date[2].image);
};
setDishName();
setDishIngredients();
setDishInstructions();
setDishImage();

setDrinkName();
setDrinkIngredients();
setDrinkInstructions();
setDrinkImage();

setMovieTitle();
setMovieYear();
setMovieGenre();
setMovieOverview();
setMovieImage();
