import { getCurrentSearchItems } from "../utilities/dropDown.js";

export function render(data, id) {
  document.querySelector(id).innerHTML = data
    .map(
      (obj) => `
      <div class="col-6 col-md-3">
          <figure>
              <img src="https://a0.muscache.com/im/pictures/54335902/8572cc9d_original.jpg" class="w-100 mb-2"alt="">
              <figcaption id="data">
                  <span class="color-text" id="releaseYear">${obj.releaseYear}</span>
                  <span class="place-name" id="title">${obj.title}</span>
                  <span class="price" id="type">${obj.type}</span>
                  <span class="rating" id="rating">
                      ${obj.rating}
                  </span>
              </figcaption>
              <button class="wishlist"> WishList </button>
          </figure>
      </div>
  `
    )
    .join("");
}

export function renderWishList(releaseYear, title, type) {
  return `<div id="movies"><span>${releaseYear}<span>  <span>${title}</span>  <span>${type}</span></div>`;
}

export function renderInsideList(str, data) {
  let currentList = getCurrentSearchItems(str, data);
  document.querySelector("#check-list-spaces").innerHTML = currentList
    .map((item) => `<span data-value='${item}' class='inside-list' >${item}</span>`)
    .join("");


}