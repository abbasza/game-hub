import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "496f1d70ff7745ed9223edd8e3dc0122",
    },
});
