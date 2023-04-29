import axios from 'axios';

export const productService = {
    getProductList,
    getProductListPage,
    getProductListSort,
    getProductListMinmax
};

let data = {
    sort : 4, 
    min: 90000, 
    max: 100000,
    page: 2
}

function getProductList() {    
    return axios
        .get(
            `https://api.digikala.com/v1/search/?page=${data.page}&rows=15&price[min]=${data.min}&price[max]=${data.max}&has_selling_stock=1&sort=${data.sort}&q=سیب/`)
        .then(res => {
            console.log("data >> "); console.log(res.data);
            return res.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}


function getProductListPage(page) {    
    data.page = page;
    return axios
        .get(
            `https://api.digikala.com/v1/search/?page=${data.page}&rows=15&price[min]=${data.min}&price[max]=${data.max}&has_selling_stock=1&sort=${data.sort}&q=سیب/`)
        .then(res => {
            console.log("data >> "); console.log(res.data);
            return res.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}

function getProductListSort(sort) {    
    data.sort = sort
    return axios
        .get(
            `https://api.digikala.com/v1/search/?page=${data.page}&rows=15&price[min]=${data.min}&price[max]=${data.max}&has_selling_stock=1&sort=${data.sort}&q=سیب/`)
        .then(res => {
            console.log("data >> "); console.log(res.data);
            return res.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}

function getProductListMinmax(min, max) {   
    data.min = min;
    data.max = max; 
    return axios
        .get(
            `https://api.digikala.com/v1/search/?page=${data.page}&rows=15&price[min]=${data.min}&price[max]=${data.max}&has_selling_stock=1&sort=${data.sort}&q=سیب/`)
        .then(res => {
            console.log("data >> "); console.log(res.data);
            return res.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}