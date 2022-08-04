import { getCurrentSearchItems } from "../utilities/dropDown.js";

export function render(data, id) {
  console.log("render homes on : ", id);
  document.querySelector(id).innerHTML = data
    .map(
      ({ releaseYear, title, type, rating }) => `
      <div class="col-6 col-md-3">
          <figure>
              <img src="https://a0.muscache.com/im/pictures/54335902/8572cc9d_original.jpg" class="w-100 mb-2"alt="">
              <figcaption>
                  <span class="color-text">${releaseYear}</span>
                  <span class="place-name">${title}</span>
                  <span class="price">${type}</span>
                  <span class="rating">
                      ${rating}
                  </span>
              </figcaption>
          </figure>
      </div>
  `
    )
    .join("");
}

export function renderDropDown(data, id) {
  document.querySelector(id).innerHTML = `
    <h3>Space</h3>
    <div class="search">
        <input placeholder="Search" class="search-input" id="search-input-spaces">
    </div>
    <ul class="menu-filter">
        <li class="menu-filter-item" id="spacesSelectAll">Select All</li>
        <li class="menu-filter-item" id="spacesClearAll">Clear</li>
    </ul>
    <ul class="check-list" id="check-list-spaces">
        ${data
          .map(
            ({ title }) =>
              `<li data-value='${title}' class="inside-list">${title}</li>`
          )
          .join("")}
    </ul>
    <div class="drop-down-action-btn">
        <button class="line-btn line-btn-common cancel-button" id="spacesCancel">Cancel</button> 
        <button class="soild-btn solid-btn-common" id="spacesSave" disabled>Save</button>
    </div>`;
}

export function renderInsideList(str, data) {
  let currentList = getCurrentSearchItems(str, data);
  document.querySelector("#check-list-spaces").innerHTML = currentList
    .map((item) => `<li data-value='${item}' class='inside-list'>${item}</li>`)
    .join("");
}
