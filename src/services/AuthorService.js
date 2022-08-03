import axios from 'axios';

const springBootAppUrl = `http://localhost:9999/`;

const getAuthorByIdService = (id) => {
    console.log('getAuthorByIdService');
    return axios.get(`${springBootAppUrl}user/get-author-by-id/${id}`);
}

const getAuthorByNameService = (name) => {
    console.log('getAuthorByNameService');
    return axios.get(`${springBootAppUrl}user/get-author-by-name/${name}`);
}

const getAllAuthorsService = () => {
    console.log(`getAllAuthorsService`);
    return axios.get(`${springBootAppUrl}user/get-all-authors`);
}

const addAuthorService = (author) => {
    console.log(`addAuthorService`);
    return axios.post(`${springBootAppUrl}admin/addAuthor`, author);
}

export { getAuthorByIdService, getAuthorByNameService, getAllAuthorsService, addAuthorService };