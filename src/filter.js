import { fetchData } from "../utilities/fetch.js";

export async function typeFilter(select, url) {
  
  const filter_by = select.options[select.selectedIndex].value;
  console.log(filter_by)
  url = url + "&type=" + filter_by.replace(" ", "%20") + "&pageSize=1000";
  document.getElementById("type-heading").innerText = `${filter_by}`
  let filteredData = await fetchData(url);
  return filteredData;
  
}

