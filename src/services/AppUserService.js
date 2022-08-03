import axios from 'axios';

const springBootAppUrl = `http://localhost:9999/`;

const signUpService = (appUser) => {
    console.log(appUser);
    return axios.post(`${springBootAppUrl}user/sign-up`, appUser);
}

const signInService = (appUser) => {
    console.log(appUser);
    return axios.post(`${springBootAppUrl}user/sign-in`, appUser);
}

const signOutService = (appUser) => {
    console.log(appUser);
    return axios.get(`${springBootAppUrl}user/sign-out/${appUser.userName}`);
}

const updateUserService = (appUser) => {
    console.log(appUser);
    return axios.put(`http://localhost:9999/user/update-user`, appUser);
}
export { signUpService, signInService, signOutService, updateUserService };