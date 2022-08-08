import {renderWishList} from "./render.js"

let movieList = [];
export function addMovieToWishlist(releaseYear, title, type, rating) {

  if (!isMovieInList(movieList, title)) {      
    let option = document.createElement('option');
    let html = '';
    option.innerHTML = '';
    movieList.push({ releaseYear, title, type, rating });
    console.log("movieList", movieList);  
    for (let movie of movieList) {       
      html = renderWishList(movie["releaseYear"], movie["title"], movie["type"], movie["rating"]);   
    }
    option.innerHTML = html;
    document.getElementById('list').appendChild(option);
  } 
}

function isMovieInList(movieList, title){
  for (let movie of movieList) { 
    if (movie["title"] === title ) {
      return true;
    }
  }
  return false;
}