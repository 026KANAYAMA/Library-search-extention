import { createStore } from "vuex";
import { convertUrl2Isbn13 } from "asin2isbn";

export default createStore({
    state: {
        url : '',
    },
    getters: {},
    mutations: {
        searchUrl (state, url){
            state.url = convertToIsbn(url);
        },
    },
});

function convertToIsbn(url){
    let res = convertUrl2Isbn13(url);
    if (res.isbn != "") console.log(res.isbn);
    return res.isbn;
}