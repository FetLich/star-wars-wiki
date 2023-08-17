export function saveResults(key:string, obj: any) {
    var stringValue = JSON.stringify(obj);
    localStorage.setItem(key, stringValue);
}
export function getResults(key: string): any|null {
    if(!key)
    {
        return null;
    }
    let resItem = localStorage.getItem(key);
    if(resItem!==undefined && resItem!=null && resItem.length>0)
    {
        return JSON.parse(resItem);
    }
    return null;
}