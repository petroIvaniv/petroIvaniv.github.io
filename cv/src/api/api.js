import axios from "axios";
import {Endpoints} from "./endpoints";
const { REACT_APP_API_BASEURL } = process.env

const instance = axios.create({
    baseURL: REACT_APP_API_BASEURL,
    headers: {
        "Content-Type": "application/json",
    },
})

// const tokenInstance = (token) => axios.create({
//     baseURL: REACT_APP_API_BASEURL,
//     headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`
//     },
// })



export const CharacterApi = {
    getCharacters: () => instance.get(Endpoints.CHARACTERS),
    getNextPage: (pageNumber) => instance.get(Endpoints.CHARACTERS + '?page=' + pageNumber),
    getUsers: (pageNumber) => instance.get(`${Endpoints.CHARACTERS}${pageNumber !== 1 ? `?page=${pageNumber}` : ''}`),
    // getCharacters: (token) => tokenInstance(token).get(Endpoints.CHARACTERS)
}

export const LocationApi = {

}
