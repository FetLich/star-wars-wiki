import axios from 'axios'
import {ApiConfig} from "../AppConfiguration/ApiConfig";
import {getAbsolutePath} from "./UrlFormatter";


export const getApi = async (relevantUrl: string, data: any, page: number): Promise<any> =>{

    let getConfig = ApiConfig;
    getConfig.method = 'get';

    return await axios({
        ...getConfig,
        url: getAbsolutePath(relevantUrl, data, page),
    }).then ( (response) => {
        console.log(response)
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