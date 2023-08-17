export interface IFilterClient {
    getData (filter: string | undefined, data: any, queryParams: { [name: string]: any; }, tryCache: boolean): Promise<any>
}