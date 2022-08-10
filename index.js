import { render, renderInsideList } from "./src/render.js";
import { fetchData } from "./utilities/fetch.js";
import { MAIN_URL, MAIN_RENDER_ID } from "./constants/constant.js";
import { wishList } from "./src/wishList.js";
import QueryParams from "./utilities/addQueryParams.js";

window.addEventListener("load", async () => {
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
    str += search.value;
    addQueryParam.setSearchParam(str);
    data = await fetchData(addQueryParam.fetchUrl());
    renderInsideList(str, data);
    render(data, MAIN_RENDER_ID);
    wishList(data);
    let searchList = document.querySelectorAll(".inside-list");
    for (let i = 0; i < data.length; i++) {
      searchList[i].addEventListener("click", async () => {
        search.value = `${searchList[i].innerHTML}`;
        addQueryParam.setSearchParam(search.value);
        data = await fetchData(addQueryParam.fetchUrl());
        render(data, MAIN_RENDER_ID);
        wishList(data);
        document.querySelector("#check-list-spaces").style.display = "none";
      });
    }
  });

  //sort
  document.querySelector(".sort").addEventListener("click", async () => {
    addQueryParam.setOrderParam("asc");
    let data = await fetchData(addQueryParam.fetchUrl());
    render(data, MAIN_RENDER_ID);
    wishList(data);
  });
});
