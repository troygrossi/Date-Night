// Troy Grossi

var Date = [
  {
    name: "",
    ingredients: [],
    measurements: [],
    instructions: "",
    image: "",
  },
  {
    name: "",
    ingredients: [],
    measurements: [],
    instructions: "",
    image: "",
  },
  {
    title: "",
    overview: "",
    genre: [],
    year: "",
    image: "https://image.tmdb.org/t/p/original/",
  },
  {
    savedName: "",
  },
];

//  Drink API
var saveDrinkObject = function (data) {
  for (let i = 0; i < Date[1].ingredients.length; i++) {
    Date[1].ingredients.pop;
    Date[1].measurements.pop;
  }
  Date[1].name = data.drinks[0].strDrink;
  if (data.drinks[0].strIngredient1) {
    Date[1].ingredients.push(data.drinks[0].strIngredient1);
    Date[1].measurements.push(data.drinks[0].strMeasure1);
  }
  if (data.drinks[0].strIngredient2) {
    Date[1].ingredients.push(data.drinks[0].strIngredient2);
    Date[1].measurements.push(data.drinks[0].strMeasure2);
  }
  if (data.drinks[0].strIngredient3) {
    Date[1].ingredients.push(data.drinks[0].strIngredient3);
    Date[1].measurements.push(data.drinks[0].strMeasure3);
  }
  if (data.drinks[0].strIngredient4) {
    Date[1].ingredients.push(data.drinks[0].strIngredient4);
    Date[1].measurements.push(data.drinks[0].strMeasure4);
  }
  if (data.drinks[0].strIngredient5) {
    Date[1].ingredients.push(data.drinks[0].strIngredient5);
    Date[1].measurements.push(data.drinks[0].strMeasure5);
  }
  if (data.drinks[0].strIngredient6) {
    Date[1].ingredients.push(data.drinks[0].strIngredient6);
    Date[1].measurements.push(data.drinks[0].strMeasure6);
  }
  if (data.drinks[0].strIngredient7) {
    Date[1].ingredients.push(data.drinks[0].strIngredient7);
    Date[1].measurements.push(data.drinks[0].strMeasure7);
  }
  if (data.drinks[0].strIngredient8) {
    Date[1].ingredients.push(data.drinks[0].strIngredient8);
    Date[1].measurements.push(data.drinks[0].strMeasure8);
  }
  if (data.drinks[0].strIngredient9) {
    Date[1].ingredients.push(data.drinks[0].strIngredient9);
    Date[1].measurements.push(data.drinks[0].strMeasure9);
  }
  if (data.drinks[0].strIngredient10) {
    Date[1].ingredients.push(data.drinks[0].strIngredient10);
    Date[1].measurements.push(data.drinks[0].strMeasure10);
  }
  if (data.drinks[0].strIngredient11) {
    Date[1].ingredients.push(data.drinks[0].strIngredient11);
    Date[1].measurements.push(data.drinks[0].strMeasure11);
  }
  if (data.drinks[0].strIngredient12) {
    Date[1].ingredients.push(data.drinks[0].strIngredient12);
    Date[1].measurements.push(data.drinks[0].strMeasure12);
  }
  if (data.drinks[0].strIngredient13) {
    Date[1].ingredients.push(data.drinks[0].strIngredient13);
    Date[1].measurements.push(data.drinks[0].strMeasure13);
  }
  if (data.drinks[0].strIngredient14) {
    Date[1].ingredients.push(data.drinks[0].strIngredient14);
    Date[1].measurements.push(data.drinks[0].strMeasure14);
  }
  if (data.drinks[0].strIngredient15) {
    Date[1].ingredients.push(data.drinks[0].strIngredient15);
    Date[1].measurements.push(data.drinks[0].strMeasure15);
  }
  Date[1].instructions = data.drinks[0].strInstructions;
  Date[1].image = data.drinks[0].strDrinkThumb;
  localStorage.setItem("date", JSON.stringify(Date));
};
//step 3
var getDrinkByID = function (drinkID) {
  var apiUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID;
  fetch(apiUrl)
    .then(function (response) {
      //cathes error if request has no matching repository name
      if (!response.ok) {
        alert("error1");
        return 0;
      }
      return response.json();
    })
    .then(function (data) {
      saveDrinkObject(data);
    }) //cathes error if request fails to send
    .catch(function (error) {
      alert("error2");
    });
};

//step 2
var getDrinkID = function (data) {
  var random = Math.floor(Math.random() * data.drinks.length);
  var drinkID = data.drinks[random].idDrink;
  getDrinkByID(drinkID);
};
//step 1
var getDrinkByRandom = function () {
  var apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  fetch(apiUrl)
    .then(function (response) {
      //cathes error if request has no matching repository name
      if (!response.ok) {
        alert("error1");
        return 0;
      }
      return response.json();
    })
    .then(function (data) {
      saveDrinkObject(data);
    }) //cathes error if request fails to send
    .catch(function (error) {
      alert("error2");
    });
};
var getDrinkByIngredient = function (ingredient) {
  var apiUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;
  fetch(apiUrl)
    .then(function (response) {
      //cathes error if request has no matching repository name
      if (!response.ok) {
        alert("error1");
        return 0;
      }
      return response.json();
    })
    .then(function (data) {
      getDrinkID(data);
    }) //cathes error if request fails to send
    .catch(function (error) {
      alert("error2");
    });
};
var getDrinkByCategory = function (category) {
  var apiUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + category;
  fetch(apiUrl)
    .then(function (response) {
      //cathes error if request has no matching repository name
      if (!response.ok) {
        alert("error1");
        return 0;
      }
      return response.json();
    })
    .then(function (data) {
      getDrinkID(data);
      //   getDrinkID(data);
    }) //cathes error if request fails to send
    .catch(function (error) {
      alert("error2");
    });
};
// Drink API

// step 4
var saveFoodObject = function (data) {
  for (let i = 0; i < Date[0].ingredients.length; i++) {
    Date[0].ingredients.pop;
    Date[0].measurements.pop;
  }
  Date[0].name = data.meals[0].strMeal;
  if (data.meals[0].strIngredient1) {
    Date[0].ingredients.push(data.meals[0].strIngredient1);
    Date[0].measurements.push(data.meals[0].strMeasure1);
  }
  if (data.meals[0].strIngredient2) {
    Date[0].ingredients.push(data.meals[0].strIngredient2);
    Date[0].measurements.push(data.meals[0].strMeasure2);
  }
  if (data.meals[0].strIngredient3) {
    Date[0].ingredients.push(data.meals[0].strIngredient3);
    Date[0].measurements.push(data.meals[0].strMeasure3);
  }
  if (data.meals[0].strIngredient4) {
    Date[0].ingredients.push(data.meals[0].strIngredient4);
    Date[0].measurements.push(data.meals[0].strMeasure4);
  }
  if (data.meals[0].strIngredient5) {
    Date[0].ingredients.push(data.meals[0].strIngredient5);
    Date[0].measurements.push(data.meals[0].strMeasure5);
  }
  if (data.meals[0].strIngredient6) {
    Date[0].ingredients.push(data.meals[0].strIngredient6);
    Date[0].measurements.push(data.meals[0].strMeasure6);
  }
  if (data.meals[0].strIngredient7) {
    Date[0].ingredients.push(data.meals[0].strIngredient7);
    Date[0].measurements.push(data.meals[0].strMeasure7);
  }
  if (data.meals[0].strIngredient8) {
    Date[0].ingredients.push(data.meals[0].strIngredient8);
    Date[0].measurements.push(data.meals[0].strMeasure8);
  }
  if (data.meals[0].strIngredient9) {
    Date[0].ingredients.push(data.meals[0].strIngredient9);
    Date[0].measurements.push(data.meals[0].strMeasure9);
  }
  if (data.meals[0].strIngredient10) {
    Date[0].ingredients.push(data.meals[0].strIngredient10);
    Date[0].measurements.push(data.meals[0].strMeasure10);
  }
  if (data.meals[0].strIngredient11) {
    Date[0].ingredients.push(data.meals[0].strIngredient11);
    Date[0].measurements.push(data.meals[0].strMeasure11);
  }
  if (data.meals[0].strIngredient12) {
    Date[0].ingredients.push(data.meals[0].strIngredient12);
    Date[0].measurements.push(data.meals[0].strMeasure12);
  }
  if (data.meals[0].strIngredient13) {
    Date[0].ingredients.push(data.meals[0].strIngredient13);
    Date[0].measurements.push(data.meals[0].strMeasure13);
  }
  if (data.meals[0].strIngredient14) {
    Date[0].ingredients.push(data.meals[0].strIngredient14);
    Date[0].measurements.push(data.meals[0].strMeasure14);
  }
  if (data.meals[0].strIngredient15) {
    Date[0].ingredients.push(data.meals[0].strIngredient15);
    Date[0].measurements.push(data.meals[0].strMeasure15);
  }
  if (data.meals[0].strIngredient16) {
    Date[0].ingredients.push(data.meals[0].strIngredient16);
    Date[0].measurements.push(data.meals[0].strMeasure16);
  }
  if (data.meals[0].strIngredient17) {
    Date[0].ingredients.push(data.meals[0].strIngredient17);
    Date[0].measurements.push(data.meals[0].strMeasure17);
  }
  if (data.meals[0].strIngredient18) {
    Date[0].ingredients.push(data.meals[0].strIngredient18);
    Date[0].measurements.push(data.meals[0].strMeasure18);
  }
  if (data.meals[0].strIngredient19) {
    Date[0].ingredients.push(data.meals[0].strIngredient19);
    Date[0].measurements.push(data.meals[0].strMeasure19);
  }
  if (data.meals[0].strIngredient20) {
    Date[0].ingredients.push(data.meals[0].strIngredient20);
    Date[0].measurements.push(data.meals[0].strMeasure20);
  }
  Date[0].instructions = data.meals[0].strInstructions;
  Date[0].image = data.meals[0].strMealThumb;
  localStorage.setItem("date", JSON.stringify(Date));
};
//step 3
var getFoodByID = function (mealID) {
  var apiUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID;
  fetch(apiUrl)
    .then(function (response) {
      //cathes error if request has no matching repository name
      if (!response.ok) {
        alert("error1");
        return 0;
      }
      return response.json();
    })
    .then(function (data) {
      saveFoodObject(data);
    }) //cathes error if request fails to send
    .catch(function (error) {
      alert("error2");
    });
};

//step 2
var getFoodID = function (data) {
  var random = Math.floor(Math.random() * data.meals.length);
  var mealID = data.meals[random].idMeal;
  getFoodByID(mealID);
};
//step 1
var getFoodByRandom = function () {
  var apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
  fetch(apiUrl)
    .then(function (response) {
      //cathes error if request has no matching repository name
      if (!response.ok) {
        alert("error1");
        return 0;
      }
      return response.json();
    })
    .then(function (data) {
      saveFoodObject(data);
    }) //cathes error if request fails to send
    .catch(function (error) {
      alert("error2");
    });
};
var getFoodByRegion = function (region) {
  var apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + region;
  fetch(apiUrl)
    .then(function (response) {
      //cathes error if request has no matching repository name
      if (!response.ok) {
        alert("error1");
        return 0;
      }
      return response.json();
    })
    .then(function (data) {
      getFoodID(data);
    }) //cathes error if request fails to send
    .catch(function (error) {
      alert("error2");
    });
};
var getFoodByCategory = function (category) {
  var apiUrl =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category;
  fetch(apiUrl)
    .then(function (response) {
      //cathes error if request has no matching repository name
      if (!response.ok) {
        alert("error1");
        return 0;
      }
      return response.json();
    })
    .then(function (data) {
      getFoodID(data);
    }) //cathes error if request fails to send
    .catch(function (error) {
      alert("error2");
    });
};
// //Food API

// Movie API
var Genre = {
  getIdByGenre: function (genre) {
    switch (genre) {
      case "Action":
        return 28;
      case "Adventure":
        return 12;
      case "Animation":
        return 16;
      case "Comedy":
        return 35;
      case "Crime":
        return 80;
      case "Documentary":
        return 99;
      case "Drama":
        return 18;
      case "Family":
        return 10751;
      case "Fantasy":
        return 14;
      case "History":
        return 36;
      case "Horror":
        return 27;
      case "Music":
        return 10402;
      case "Mystery":
        return 9648;
      case "Romance":
        return 10749;
      case "ScienceFiction":
        return 878;
      case "tvMovie":
        return 10770;
      case "Thriller":
        return 53;
      case "War":
        return 10751;
      case "Western":
        return 37;
    }
  },
  getGenreById: function (id) {
    switch (id) {
      case 28:
        return "Action";
      case 12:
        return "Adventure";
      case 16:
        return "Animation";
      case 35:
        return "Comedy";
      case 80:
        return "Crime";
      case 99:
        return "Documentary";
      case 18:
        return "Drama";
      case 10751:
        return "Family";
      case 14:
        return "Fantasy";
      case 36:
        return "History";
      case 27:
        return "Horror";
      case 10402:
        return "Music";
      case 9648:
        return "Mystery";
      case 10749:
        return "Romance";
      case 878:
        return "Science Fiction";
      case 10770:
        return "tvMovie";
      case 53:
        return "Thriller";
      case 10752:
        return "War";
      case 37:
        return "Western";
    }
  },
};
// Step 4
var saveMovie = function (data) {
  var randomMovie = Math.floor(Math.random() * data.results.length);
  Date[2].title = data.results[randomMovie].title;
  Date[2].overview = data.results[randomMovie].overview;
  Date[2].year = data.results[randomMovie].release_date;
  var genre = [];
  for (let i = 0; i < data.results[randomMovie].genre_ids.length; i++) {
    Date[2].genre.push(
      Genre.getGenreById(data.results[randomMovie].genre_ids[i])
    );
  }
  Date[2].image += data.results[randomMovie].poster_path;
};
// Step 3
var getMovieByPage = function (year, genre, page) {
  var apiUrl =
    "https://api.themoviedb.org/3/discover/movie?primary_release_year=" +
    year +
    "&with_genres=" +
    genre +
    "&language=en-US&certification=R&sort_by=popularity.desc&api_key=9f60c24a97220d2f6780c3978364a342&page=" +
    page;
  fetch(apiUrl)
    .then(function (response) {
      //cathes error if request has no matching repository name
      if (!response.ok) {
        alert("error1");
        return 0;
      }
      return response.json();
    })
    .then(function (data) {
      saveMovie(data);
    }) //cathes error if request fails to send
    .catch(function (error) {
      alert("error2");
    });
};
// // Step 2
var getPage = function (data, year, genre) {
  var popularityScale = 5;
  if (data.total_pages >= 5) {
    var randomPage = Math.floor(Math.random() * popularityScale) + 1;
    getMovieByPage(year, genre, randomPage);
  } else {
    var randomPage = Math.floor(Math.random() * data.total_pages) + 1;
    getMovieByPage(year, genre, randomPage);
  }
};
// Step 1
var getMovieData = function (year, genre, page) {
  var apiUrl =
    "https://api.themoviedb.org/3/discover/movie?primary_release_year=" +
    year +
    "&with_genres=" +
    genre +
    "&language=en-US&certification=R&sort_by=popularity.desc&api_key=9f60c24a97220d2f6780c3978364a342&page=" +
    page;
  fetch(apiUrl)
    .then(function (response) {
      //cathes error if request has no matching repository name
      if (!response.ok) {
        alert("error1");
        return 0;
      }
      return response.json();
    })
    .then(function (data) {
      getPage(data, year, genre);
    }) //cathes error if request fails to send
    .catch(function (error) {
      alert("error2");
    });
};
// Movie API

// food navigation
var foodNavEl = document.querySelector("#food-nav");
var displayFoodButtons = function (event) {
  var tabSelectEl = foodNavEl.querySelector(".is-active");
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
  var tabSelectEl = drinkNavEl.querySelector(".is-active");
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
  var tabSelectEl = movieNavEl.querySelector(".is-active");
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

// event listener to change button colors
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

var getFood = function () {
  var buttonsCategory = foodCategoryButtons.childNodes;
  var buttonsArea = foodAreaButtons.childNodes;
  var buttonSurprise = foodSurprise.childNodes;
  for (let i = 0; i < buttonsCategory.length; i++) {
    if (buttonsCategory[i].className === "button is-rounded is-light") {
      getFoodByCategory(buttonsCategory[i].textContent);
    }
  }
  for (let i = 0; i < buttonsArea.length; i++) {
    if (buttonsArea[i].className === "button is-rounded is-light") {
      getFoodByRegion(buttonsArea[i].textContent);
    }
  }
  if (buttonSurprise.className === "button is-rounded is-light") {
    getFoodByRandom(buttonSurprise.textContent);
  }
};
var getDrink = function () {
  var buttonsCategory = drinkCategoryButtons.childNodes;
  var buttonsIngredients = drinkIngredientsButtons.childNodes;
  var buttonSurprise = drinkSurprise.childNodes;
  for (let i = 0; i < buttonsCategory.length; i++) {
    if (buttonsCategory[i].className === "button is-rounded is-light") {
      getDrinkByCategory(buttonsCategory[i].textContent);
    }
  }
  for (let i = 0; i < buttonsIngredients.length; i++) {
    if (buttonsIngredients[i].className === "button is-rounded is-light") {
      getDrinkByIngredient(buttonsIngredients[i].textContent);
    }
  }
  if (buttonSurprise.className === "button is-rounded is-light") {
    getDrinkByRandom(buttonSurprise.textContent);
  }
};

var genres = "";
var years = "";
var getMovie = function () {
  var buttonsGenre = movieGenreButtons.childNodes;
  var buttonsYear = movieYearButtons.childNodes;
  var buttonSurprise = movieSurprise.childNodes;
  var comma = false;
  for (let i = 0; i < buttonsGenre.length; i++) {
    if (buttonsGenre[i].className === "button is-rounded is-dark") {
      if (comma) {
        genres += ", " + Genre.getIdByGenre(buttonsGenre[i].textContent);
      } else {
        genres += Genre.getIdByGenre(buttonsGenre[i].textContent);
        comma = true;
      }
    }
  }
  for (let i = 0; i < buttonsYear.length; i++) {
    if (buttonsYear[i].className === "button is-rounded is-dark") {
      if (comma) {
        years += ", " + buttonsYear[i].textContent;
      } else {
        years += buttonsYear[i].textContent;
        comma = true;
      }
    }
  }
  getMovieData(years, genres, 1);
};
getDisplay = async function (event) {
  window.location.replace("./display.html");
};
var submitEl = document.querySelector(".submit-container");
submitEl.addEventListener("click", function () {
  getMovie();
  getFood();
  getDrink();
  //wait for API data
  setTimeout(getDisplay, 2000);
});

var selectEl = document.querySelector(".saved-dates");
var getSavedData = function () {
  if (localStorage.getItem("index")) {
    var index = parseInt(localStorage.getItem("index"));
    var tempDate;
    for (let i = index; i > 0; i--) {
      var tempDate = JSON.parse(localStorage.getItem("date" + i));
      var newOptionEl = document.createElement("option");
      newOptionEl.value = i;
      newOptionEl.textContent = tempDate[3].savedName;
      selectEl.append(newOptionEl);
    }
  }
};
getSavedData();

var saveButtonEl = document.querySelector(".saved-button");
saveButtonEl.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    Date = JSON.parse(localStorage.getItem("date" + selectEl.value));
    console.log("date" + selectEl.value);
    localStorage.setItem("date", JSON.stringify(Date));
    window.location.replace("./display.html");
  }
});

// Troy Grossi
