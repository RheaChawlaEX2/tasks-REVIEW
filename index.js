import { render } from "./src/render.js";
import { fetchData } from "./utilities/fetch.js";
import { MAIN_URL, MAIN_RENDER_ID } from "./constants/constant.js";
import { sortEvent } from "./src/sort.js";
import { filter } from "./src/filter.js";
import { handleCustomDropDown } from "./src/customDropDown.js";

window.addEventListener("load", async () => {
  console.log("on loading");
  const data = await fetchData(MAIN_URL);
  render(data, MAIN_RENDER_ID);

  //sort
  document.querySelectorAll(".sort").forEach(async (item) => {
    item.addEventListener("click", async () => await sortEvent(item));
  });

  //filter
  const select = document.querySelector("#type");
  select.addEventListener("change", async () => await filter(select));

  //custom drag down
  document
    .querySelector("#drop-down-selected-spaces")
    .addEventListener("click", async () => {
      console.log("clicked drop down");
      await handleCustomDropDown();
    });
});
