export interface IParams {
    baseUrl: string
    headers : any
    method: string
}
export const ApiConfig : IParams = {
    baseUrl: "https://swapi.dev/api",
    headers: {
        "Authorization": ""
    },
    method: ''
}