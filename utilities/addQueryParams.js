import { MAIN_URL } from "../constants/constant.js";


export function addQueryParams(typeParamValue="", searchParamValue="") {
    let url = "";
    if (typeParamValue !== "") {
        url = MAIN_URL + "&type=" + typeParamValue.replace(" ", "%20") ;
    }
    else if (searchParamValue !== "") {
        url = MAIN_URL + "&name=" + searchParamValue;
    }
    else {
        url = MAIN_URL + "&type=" + typeParamValue + "&name=" + searchParamValue;
    }
    return url;
}