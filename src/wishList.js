import { renderWishList } from "./render.js";

let movieList = [];
let counter = 0;
let wishlist = document.getElementById("wishlistOption");

function wishListData(movieList) {
  let option = document.createElement("option");
  option.innerHTML = "";
  for (let movie of movieList) {
    option.innerHTML = renderWishList(
      movie["releaseYear"],
      movie["title"],
      movie["type"],
      movie["rating"]
    );
    option.setAttribute("id", movie["title"]);
  }
  return option;
}

function addMovieToWishlist(releaseYear, title, type, rating) {
  console.log("add entered");

  movieList.push({ releaseYear, title, type, rating });
  wishlist.innerHTML = "";
  wishlist.innerHTML = `WishList (${++counter})`;
  document.getElementById("list").appendChild(wishListData(movieList));
}

function removeMovieFromWishList(title) {
  console.log("remove entered");

  let removedMovie = movieList.filter((movie) => {
    return movie["title"] === title;
  });

  let parent = document.getElementById("list");
  for (let removed of removedMovie) {
    parent.removeChild(document.getElementById(removed["title"]));
    wishlist.innerHTML = "";
    if (--counter > 0) {
      wishlist.innerHTML = `WishList (${counter})`;
    }
    else {
      counter = 0;
      wishlist.innerHTML = `WishList`;
    }
  }
}

export function toggleWishList(e) {
  let title = e.target.parentElement.querySelector("#title").innerText;
  let type = e.target.parentElement.querySelector("#type").innerText;
  let rating = e.target.parentElement.querySelector("#rating").innerText;
  let releaseYear =
    e.target.parentElement.querySelector("#releaseYear").innerText;
  if (e.target.innerText === "WishList") {
    addMovieToWishlist(releaseYear, title, type, rating);
    e.target.innerText = "Remove";
  } else {
    removeMovieFromWishList(title);
    e.target.innerText = "WishList";
  }
  return e.target.innerText;
}
