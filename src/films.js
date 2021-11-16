// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);

  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director);
  console.log("EXERCICE 2 ->", result);

  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = array.filter(movie => movie.director === director);
  let result = moviesFromDirector.reduce((previousMovie, currentMovie) => previousMovie.score + currentMovie.score)/(moviesFromDirector.length).toFixed(2);

  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let result = array.map(movie => movie.title);
  const order = result.sort((a, b) => a > b ? 1 : -1).slice(0, 20);

  return result = order;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let ordered = array.sort((a, b) => {
    if (a.year === b.year){
      return a.title > b.title ? 1 : -1;
    }

    return a.year - b.year
  });
  let result = [...ordered];

  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let moviesCategory = array.filter(movie => movie.genre.includes(category) && movie.score);
  let result = moviesCategory.reduce((previousMovie, currentMovie) => previousMovie.score + currentMovie.score) / (moviesCategory.length).toFixed(2);

  if (moviesCategory.length.toFixed(2) > 1) {
    return result;
  }

  return moviesCategory[0].score;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
