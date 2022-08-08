import { MAIN_URL, MAIN_RENDER_ID } from "../constants/constant.js";
import { fetchData } from "../utilities/fetch.js";
import { render } from "./render.js";

export async function sortEvent(item) {
  let orderBy = item.id.toLowerCase().replace(" ", "");
  let sort_order = "asc";
  let url = MAIN_URL + "&" + orderBy + "?order=" + sort_order;
  console.log("sort",url)
  let sorted_data = await fetchData(url);
  render(sorted_data, MAIN_RENDER_ID);
}
