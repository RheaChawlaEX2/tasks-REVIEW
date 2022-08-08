import { MAIN_URL } from "../constants/constant.js";

export default class QueryParams{
    constructor(type, search, order) {
        this.type = "Movie";
        this.search = search;
        this.order = 'asc';
    }

    setTypeParam(type) {
        this.type = type;
    }
    setSearchParam(search) {
        this.search = search;
    }
    setOrderParam(order) {
        this.order = order;
    }

    fetchUrl() {
       let url = MAIN_URL + "&type=" + this.type + "&order=" + this.order + "&name=" + this.search;
        return url;      
    }

}

 function addQueryParams(typeParamValue="", searchParamValue="") {
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