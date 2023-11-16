import axios from "axios";

const API = axios.create({
    baseURL: process.env.REACT_APP_API_BASEURL,
    headers: {
        "Requested": `${ process.env.REACT_APP_API_REQFROM }/${ process.env.REACT_APP_VERSION }`,
    },
    withCredentials: true,
    timeout: 10000
});

export default API;