import axios from "axios";
import {Endpoints} from "../../../api/endpoints";
const {REACT_APP_API_BASEURL} = process.env

const instance = axios.create({
    baseURL: REACT_APP_API_BASEURL,
    headers: {
        "Content-Type": "application/json",
    },
})

export const LocationApi = {
    getLoc: () => instance.get(Endpoints.LOCATION),
    // getLocations: (pageNumber) => instance.get(`${Endpoints.LOCATION}${pageNumber !== 1 ? `?page=${pageNumber}` : ''}`),
    getNextLoc: (pageNumber) => instance.get(Endpoints.LOCATION + '?page=' + pageNumber),
    // getUsers: (pageNumber) => instance.get(`${Endpoints.CHARACTERS}${pageNumber !== 1 ? `?page=${pageNumber}` : ''}`),
    // getCharacters: (token) => tokenInstance(token).get(Endpoints.CHARACTERS)
}