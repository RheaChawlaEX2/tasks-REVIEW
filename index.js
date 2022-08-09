import { render, renderInsideList } from "./src/render.js";
import { fetchData } from "./utilities/fetch.js";
import { MAIN_URL, MAIN_RENDER_ID } from "./constants/constant.js";
import { toggleWishList } from "./src/wishList.js";
import QueryParams from "./utilities/addQueryParams.js";

window.addEventListener("load", async () => {
  console.log("on loading");
  let url = MAIN_URL;
  let data = await fetchData(url + "&pageSize=1000");
  render(data, MAIN_RENDER_ID);
  wishList(data);

  let addQueryParam = new QueryParams();
  

  //filter
  const type = document.querySelector("#type");
  type.addEventListener("change", async () => {
    const filter_by = type.options[type.selectedIndex].value;
    addQueryParam.setTypeParam(filter_by.replace(" ", "%20"));
    data = await fetchData(addQueryParam.fetchUrl());
    render(data, MAIN_RENDER_ID);
    wishList(data);
  });

  //search
  let search = document.querySelector("#search-bar");
  search.addEventListener("keyup", async () => {
    let str = "";
    str += document.querySelector("#search-bar").value;
    addQueryParam.setSearchParam(str);
    data = await fetchData(addQueryParam.fetchUrl());
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

  //sort
  document.querySelector(".sort").addEventListener('click',async () => {
    addQueryParam.setOrderParam("asc");
    let data = await fetchData(addQueryParam.fetchUrl());
    render(data, MAIN_RENDER_ID);
    wishList(data);
  });

  function wishList(data) {
    console.log("hello")
    for (let i = 0; i < data.length; i++) {
      let wishListBtn = document.querySelectorAll(".wishlist")[i];
      wishListBtn.addEventListener("click", (e) => {
        console.log("hi")
        toggleWishList(e);
      });
    }
  }
});
