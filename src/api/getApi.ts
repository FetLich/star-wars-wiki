import axios from 'axios'
import {ApiConfig} from "../appConfiguration/ApiConfig";

export const getApi = async (url: string): Promise<any> =>{

    let getConfig = ApiConfig;
    getConfig.method = 'get';

    return await axios({
        ...getConfig,
        url: url,
    }).then ( (response) => {
        return {
            status: response.status,
            data: response.data,
            requestUrl: response.config.url
        }
    }).catch((error) =>{
        console.log(error)
        return {
            status: error.status,
            data: error.response
        }
    })
}