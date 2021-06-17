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
  foodNavEl.querySelector(".is-active").removeAttribute("class");
  if (event.target.className === "food-name") {
    document.querySelector("#food-name").setAttribute("class", "is-active");
  } else if (event.target.className === "food-type") {
    document.querySelector("#food-type").setAttribute("class", "is-active");
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
  drinkNavEl.querySelector(".is-active").removeAttribute("class");
  if (event.target.className === "drink-name") {
    document.querySelector("#drink-name").setAttribute("class", "is-active");
  } else if (event.target.className === "drink-type") {
    document.querySelector("#drink-type").setAttribute("class", "is-active");
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
  movieNavEl.querySelector(".is-active").removeAttribute("class");
  if (event.target.className === "movie-genre") {
    document.querySelector("#movie-genre").setAttribute("class", "is-active");
  } else if (event.target.className === "movie-year") {
    document.querySelector("#movie-year").setAttribute("class", "is-active");
  } else if (event.target.className === "movie-surprise") {
    document
      .querySelector("#movie-surprise")
      .setAttribute("class", "is-active");
  }
  displayMovieButtons(event);
};
movieNavEl.addEventListener("click", activateMovieTab);

var submitEl = document.querySelector(".submit-container");
submitEl.addEventListener("click", function () {
  window.location.replace("./display.html");
});

// event listener to chnage button colors
var foodCategoryButtons = document.querySelector("#buttons-food-name");
var foodAreaButtons = document.querySelector("#buttons-food-type");
var foodSurprise = document.querySelector("#buttons-food-surprise");
var foodButtons = document.querySelector("#food-container");
foodButtons.addEventListener("click", function (event) {
  var buttonsCategory = foodCategoryButtons.childNodes;
  var buttonsArea = foodAreaButtons.childNodes;
  var buttonSurprise = foodSurprise.childNodes;
  if (event.target.tagName === "BUTTON") {
    for (let i = 0; i < buttonsCategory.length; i++) {
      buttonsCategory[i].className = "button is-rounded is-danger";
    }
    for (let i = 0; i < buttonsArea.length; i++) {
      buttonsArea[i].className = "button is-rounded is-danger";
    }
    buttonSurprise[1].className = "button is-rounded is-danger";
    event.target.className = "button is-rounded is-light";
  }
});
var foodCategoryButtons = document.querySelector("#buttons-food-name");
var foodAreaButtons = document.querySelector("#buttons-food-type");
var foodSurprise = document.querySelector("#buttons-food-surprise");
var foodButtons = document.querySelector("#food-container");
foodButtons.addEventListener("click", function (event) {
  var buttonsCategory = foodCategoryButtons.childNodes;
  var buttonsArea = foodAreaButtons.childNodes;
  var buttonSurprise = foodSurprise.childNodes;
  if (event.target.tagName === "BUTTON") {
    for (let i = 0; i < buttonsCategory.length; i++) {
      buttonsCategory[i].className = "button is-rounded is-danger";
    }
    for (let i = 0; i < buttonsArea.length; i++) {
      buttonsArea[i].className = "button is-rounded is-danger";
    }
    buttonSurprise[1].className = "button is-rounded is-danger";
    event.target.className = "button is-rounded is-light";
  }
});
var drinkCategoryButtons = document.querySelector("#buttons-drink-name");
var drinkIngredientsButtons = document.querySelector("#buttons-drink-type");
var drinkSurprise = document.querySelector("#buttons-drink-surprise");
var drinkButtons = document.querySelector("#drink-container");
drinkButtons.addEventListener("click", function (event) {
  var buttonsCategory = drinkCategoryButtons.childNodes;
  var buttonsIngredients = drinkIngredientsButtons.childNodes;
  var buttonSurprise = drinkSurprise.childNodes;
  if (event.target.tagName === "BUTTON") {
    for (let i = 0; i < buttonsCategory.length; i++) {
      buttonsCategory[i].className = "button is-rounded is-link";
    }
    for (let i = 0; i < buttonsIngredients.length; i++) {
      buttonsIngredients[i].className = "button is-rounded is-link";
    }
    buttonSurprise[1].className = "button is-rounded is-link";
    event.target.className = "button is-rounded is-light";
  }
});
var movieGenreButtons = document.querySelector("#buttons-movie-genre");
var movieYearButtons = document.querySelector("#buttons-movie-year");
var movieSurprise = document.querySelector("#buttons-movie-surprise");
var movieButtons = document.querySelector("#movie-container");
movieButtons.addEventListener("click", function (event) {
  var buttonsGenre = movieGenreButtons.childNodes;
  var buttonsYear = movieYearButtons.childNodes;
  var buttonSurprise = movieSurprise.childNodes;
  if (event.target.tagName === "BUTTON") {
    if (event.target.id === "movie-surprise") {
      for (let i = 0; i < buttonsGenre.length; i++) {
        buttonsGenre[i].className = "button is-rounded is-black";
      }
      for (let i = 0; i < buttonsYear.length; i++) {
        buttonsYear[i].className = "button is-rounded is-black";
      }
      buttonSurprise[1].className = "button is-rounded is-black";
      event.target.className = "button is-rounded is-light";
    } else if (event.target.className === "button is-rounded is-dark") {
      event.target.className = "button is-rounded is-black";
    } else {
      event.target.className = "button is-rounded is-dark";
    }
  }
});
// Event listener to chnage button colors end
localStorage.setItem("test", "testing");
// Troy Grossi
