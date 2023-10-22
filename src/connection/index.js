import axios from "axios";

export default axios.create({
    baseURL: process.env.REACT_APP_API_BASEURL,
    headers: {
        "Requested-To": `${ process.env.REACT_APP_API_REQTO }/${ process.env.REACT_APP_VERSION }`
    },
    timeout: 10000
});