import {  MAIN_URL } from "../constants/constant.js";
import { fetchData } from "../utilities/fetch.js";


export async function typeFilter(select,url) {
  const filter_by = select.options[select.selectedIndex].value;
  document.getElementById("type-heading").innerText = `${filter_by}`
  let filterUrl =  url.replace(" ", "%20");
  let filteredData = await fetchData(filterUrl);
  return filteredData;
  
}

