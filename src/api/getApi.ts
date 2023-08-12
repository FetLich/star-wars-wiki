import axios from 'axios'
import {RequestConfig} from "./RequestConfig";


export const getApi = async (url: string, data: any, queryParameters: any): Promise<any> =>{

    let getConfig = RequestConfig;
    getConfig.method = 'get';

    let urlString: string = getConfig.baseUrl + '/' + url+ '/' +data;

    if(queryParameters)
    {
        urlString += '/?page' + queryParameters;
    }

    return await axios({
        ...getConfig,
        url: urlString,
    }).then ( (response) => {
        console.log(response)
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) =>{
        console.log(error)
        return {
            status: error.status,
            data: error.response
        }
    })
}