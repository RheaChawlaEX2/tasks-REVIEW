import {  MAIN_RENDER_ID, MAIN_URL } from "../constants/constant.js";
import { fetchData } from "../utilities/fetch.js";
import { render } from "./render.js";

export async function typeFilter(select) {
  const filter_by = select.options[select.selectedIndex].value;
  document.getElementById("type-heading").innerText = `${filter_by}`
  let url = window.location.href +"&type="+ filter_by.replace(" ", "%20");
  let filtered_data = await fetchData(url);
  render(filtered_data, MAIN_RENDER_ID);
}

// export async function titleFilter(select) {
//   const filter_by = select
// }
