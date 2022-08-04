import axios from 'axios';

// Create services for other components in this way. 

const springBootAppUrl = `http://localhost:9999/`;

const getCategoryByIdService = (id) => {
    console.log('getCategoryByIdService');
    return axios.get(`${springBootAppUrl}user/get-category-by-id/${id}`);
}
const getCategoryByNameService = (name) => {
    console.log('getCategoryByNameService');
    return axios.get(`${springBootAppUrl}user/get-category-by-name/${name}`);
}
const getAllCategoryService = () => {
    console.log(`getAllCategoryService`);
    return axios.get(`${springBootAppUrl}user/getAllCategory`);
}

const addCategoryService = (category) => {
    console.log(`addCategoryService`);
    return axios.post(`${springBootAppUrl}admin/addCategory`,category);
}

// add more functionalities here 

export { getCategoryByIdService,getCategoryByNameService, getAllCategoryService, addCategoryService };