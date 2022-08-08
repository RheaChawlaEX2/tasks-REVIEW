import { render, renderInsideList } from "./src/render.js";
import { fetchData } from "./utilities/fetch.js";
import { MAIN_URL, MAIN_RENDER_ID } from "./constants/constant.js";
import { sortEvent } from "./src/sort.js";
import { typeFilter } from "./src/filter.js";
import { toggleWishList } from "./src/wishList.js";
import { addQueryParams } from "./utilities/addQueryParams.js";

window.addEventListener("load", async () => {
  console.log("on loading");
  let url = MAIN_URL;
  let data = await fetchData(url + "&pageSize=1000");
  render(data, MAIN_RENDER_ID);

   //sort
  document.querySelectorAll(".sort").forEach(async (item) => {
    item.addEventListener("click", async () => await sortEvent(item));
    wishList(data);
  });

  //filter
  const type = document.querySelector("#type");
  type.addEventListener("change", async () => {
    data = await typeFilter(type);
    render(data, MAIN_RENDER_ID);
    wishList(data);
  });

  //search
  let search = document.querySelector("#search-bar");
    search.addEventListener("keyup", async () => {
    let str = "";
    str += document.querySelector("#search-bar").value;
    let searchUrl = addQueryParams("", str)
    data = await fetchData(searchUrl);
    renderInsideList(str, data);
    render(data, MAIN_RENDER_ID);
    wishList(data);
    for (let i = 0; i < data.length; i++) {
      let searchList = document.querySelectorAll(".inside-list")[i];
      console.log(searchList);
      searchList.addEventListener("click", () => {
        document.querySelector("#search-bar").innerText = searchList.innerText;
      });
    }
  });

  async function filteredData() {
    if (search.innerText && type.options[type.selectedIndex].value) {
      url = addQueryParams(search.innerText, type.options[type.selectedIndex].value);
      data = await fetchData(url);
      render(data, MAIN_RENDER_ID);
      wishList(data);
    }
  }
  filteredData();
  
  function wishList(data) {
    for (let i = 0; i < data.length; i++) {
      let wishListBtn = document.querySelectorAll(".wishlist")[i];
      wishListBtn.addEventListener("click", (e) => {
        toggleWishList(e);
      });
    }
  }
  data;
});
