import { ORDER_URL, MAIN_RENDER_ID } from "../constants/constant.js";
import { fetchData } from "../utilities/fetch.js";
import { render } from "./render.js";

export async function sortEvent(item) {
  // console.log("sort api call", item.innerHTML);
  let orderBy = item.id.toLowerCase().replace(" ", "");
  let sort_order = "asc";
  let url = ORDER_URL + orderBy + "?order=" + sort_order;
  let sorted_data = await fetchData(url);
  // console.log("data sorted");
  render(sorted_data, MAIN_RENDER_ID);
}
