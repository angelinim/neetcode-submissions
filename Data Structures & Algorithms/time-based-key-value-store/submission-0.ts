
class TimeMap {
    keystore: Map<string,Map<number, string>>;
    constructor() {
        this.keystore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        // map of maps...
        if(!this.keystore.has(key)){
            this.keystore.set(key, new Map<number,string>())
        }
        this.keystore.get(key).set(timestamp,value);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const val = this.keystore.get(key);
        if(!val){
            return "";
        }

        if(val.has(timestamp)){
            return val.get(timestamp);
        }
        // if the exact timestamp doesn't exist
        // find the next highest or return ""
        // get all timestamps in an arr
        // sort by timestamp in decending order
        let arr: [number, string][] = Array.from(val);
        arr.sort((a,b) => b[0] - a[0]);
        for(let a of arr){
            if(a[0] <= timestamp){
                return a[1];
            }
        }
        return "";
    }
}















