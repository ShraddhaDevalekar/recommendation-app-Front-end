import axios from 'axios';

const springBootAppUrl = `http://localhost:9999/`;

const getBookByIdService = (id) => {
    console.log('getBookByIdService');
    return axios.get(`${springBootAppUrl}user/get-book-by-id/${id}`);
}
const getBookByNameService = (name) => {
    console.log('getBookByNameService');
    return axios.get(`${springBootAppUrl}user/get-book-by-name/${name}`);
}
const getAllBooksService = () => {
    console.log(`getAllBooksService`);
    return axios.get(`${springBootAppUrl}user/get-all-books`);
}

const addBookService = (book) => {
    console.log(`addBookService`);
    return axios.post(`${springBootAppUrl}admin/add-book`,book);
}

export { getBookByIdService, getBookByNameService, getAllBooksService, addBookService };













// import axios from 'axios';

// const springBootAppUrl = `http://localhost:9999/`;

// const getBookByIdService = (bookId) => {
//     console.log('getBookByIdService');
//     return axios.get(`${springBootAppUrl}user/get-book-by-id/${bookId}`);
// }

// const getBookByNameService = (name) => {
//     console.log('getBookByNameService');
//     return axios.get(`${springBootAppUrl}user/get-book-by-name/${name}`);
// }
// const getAllBooksService = () => {
//     console.log(`getAllBooksService`);
//     return axios.get(`${springBootAppUrl}user/get-all-books`);
// }

// const addBookService = (book) => {
//     console.log(`addBookService`);
//     return axios.post(`${springBootAppUrl}user/add-book`, book);
// }

// export { getBookByIdService, getBookByNameService, getAllBooksService, addBookService };
