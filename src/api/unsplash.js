import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID O41PDHMLKyV7KsjlPPY0pmrcw3JeM7YNvfsotXEqoPA",
    },
});
