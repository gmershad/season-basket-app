import axios from "axios";
//import Auth from "../modules/Auth";
import configData from '../configs';

const client = (config) => {
    // if (Auth.user_token) {
    //     const token = Auth.getToken();
    //     config.headers = {
    //         authorization: token,
    //     };
    // }

    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        function (error) {
            if (!error.response) {
                error.response = {
                    data: "net work error",
                    status: 500,
                };
            }

            if (error.response.status === 401) {
                // Auth.logout();
                // jumpTo("/login");
                throw error;
            }
            return Promise.reject(error);
        }
    );

    config.baseURL = configData.baseUrl;
    return axios(config);
};

export default client;