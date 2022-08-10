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

