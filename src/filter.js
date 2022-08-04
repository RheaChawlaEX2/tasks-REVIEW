import { FILTER_URL, MAIN_RENDER_ID } from "../constants/constant.js";
import { fetchData } from "../utilities/fetch.js";
import { render } from "./render.js";

export async function filter(select) {
  const filter_by = select.options[select.selectedIndex].value;
  console.log("Filter by: ", filter_by);
  let url = FILTER_URL + filter_by.replace(" ", "%20");
  let filtered_data = await fetchData(url);
  render(filtered_data, MAIN_RENDER_ID);
}
