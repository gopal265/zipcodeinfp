import axios from "axios";

const base_url = "https://api.zippopotam.us/in";


// sends a get request to the respective api endpoints and gives the response
export const fetchLocationInfo = (postalCode) => axios.get(`${base_url}/${postalCode}`);