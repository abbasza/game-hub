import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "07c30ecf21534e299652e2dc9425470d",
    },
});