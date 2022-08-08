import { addQueryParams } from "../utilities/addQueryParams.js";
import { fetchData } from "../utilities/fetch.js";

export async function typeFilter(select) {
  const filter_by = select.options[select.selectedIndex].value;
 let typeFilterUrl = addQueryParams(filter_by, "")
  document.getElementById("type-heading").innerText = `${filter_by}`
  let filteredData = await fetchData(typeFilterUrl);
  return filteredData;
  
}

