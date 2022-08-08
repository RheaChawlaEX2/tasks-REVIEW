import { render, renderInsideList } from "./src/render.js";
import { fetchData } from "./utilities/fetch.js";
import { MAIN_URL, MAIN_RENDER_ID } from "./constants/constant.js";
import { sortEvent } from "./src/sort.js";
import { typeFilter } from "./src/filter.js";
import { toggleWishList} from "./src/wishList.js";


window.addEventListener("load", async () => {
  console.log("on loading");
  const data = await fetchData(MAIN_URL+"&pageSize=1000");
  render(data, MAIN_RENDER_ID);

  //sort
  document.querySelectorAll(".sort").forEach(async (item) => {
    item.addEventListener("click", async () => await sortEvent(item));
  });

  //filter
  const select = document.querySelector("#type");
  select.addEventListener("change", async () => await typeFilter(select));


  //search
  document.querySelector("#search-bar").addEventListener("keyup", async() => {
    let str = "";
    str += document.querySelector("#search-bar").value;
    let url = MAIN_URL + "&name=" + str;
    let search = await fetchData(url);
    renderInsideList(str, search);
    console.log(url)
    render(search, MAIN_RENDER_ID);   
  })
  
 
  //wishlist
  for (let i = 0; i < data.length; i++) {
  let wishListBtn = document.querySelectorAll(".wishlist")[i];
  wishListBtn.addEventListener('click', (e) => {
    toggleWishList(e)
  })
  };
  
 

});

