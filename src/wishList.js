import {renderWishList} from "./render.js"

let movieList = [];
export function addMovieToWishlist(releaseYear, title, type, rating) {
  movieList.push({ releaseYear, title, type, rating });
    console.log("movieList", movieList);
    let option = document.createElement('option');
    option.innerHTML = '';
    let html = '';
    for (let i = 0; i < movieList.length; i++){
        html = renderWishList(releaseYear, title, type, rating);
    }
    
  option.innerHTML = html;
    document.getElementById('list').appendChild(option);
  
    
    console.log();
    
}

// export function toggleMovieList(){
//   var click = document.getElementById("list");  
//   if(click.style.display == "") {  
//      click.style.display ="block";  
//   } else {  
//      click.style.display ="";  
//   }   
// }


