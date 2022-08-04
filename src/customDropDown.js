import { fetchData } from "../utilities/fetch.js";
import { MAIN_URL } from "../constants/constant.js";
import { renderDropDown, renderInsideList } from "./render.js";
import { selectItemOfListFunctionality } from "../utilities/dropDown.js";

export async function handleCustomDropDown() {
  let drop_down = document.querySelector("#drop-down-menu-spaces");
  if (drop_down.style.display == "block") {
    drop_down.style.display = "none";
  } else {
    const data = await fetchData(MAIN_URL);
    drop_down.style.display = "block";
    renderDropDown(data, "#drop-down-menu-spaces");
    await handleCustomDropDownFunctionalities(data, drop_down);
  }
}

async function handleCustomDropDownFunctionalities(data, drop_down) {
  handleInsideListOnKeyPress(data);

  document.querySelector("#spacesCancel").addEventListener("click", () => {
    drop_down.style.display = "none";
  });

  selectItemOfListFunctionality();

  document.querySelector("#spacesSave").addEventListener("click", () => {
    let find_title = document.querySelector("#search-input-spaces").value;
    drop_down.style.display = "none";
    console.log("find for title: ", find_title);
  });
}

function handleInsideListOnKeyPress(data) {
  let str = "";
  document
    .querySelector("#search-input-spaces")
    .addEventListener("keypress", (e) => {
      str = document.querySelector("#search-input-spaces").value + e.key;
      renderInsideList(str, data);
      selectItemOfListFunctionality();
    });

  document
    .querySelector("#search-input-spaces")
    .addEventListener("keydown", (e) => {
      if (e.keyCode == 8) {
        str = document.querySelector("#search-input-spaces").value;
        str = str.substring(0, str.length - 1);
        renderInsideList(str, data);
        selectItemOfListFunctionality();
      }
    });
}
