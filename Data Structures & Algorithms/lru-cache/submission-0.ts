class LRUCache {
    valMap: Map<number, number>;
    recMap: Map<number, number>;
    cap: number;
    size: number;
    highestVal: number;
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.valMap = new Map();
        this.recMap = new Map();
        this.cap = capacity;
        this.size = 0;
        this.highestVal = 0;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if(!this.valMap.has(key)){
            return -1;
        }
        this.recMap.set(key, this.highestVal++);
        return this.valMap.get(key);
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if(this.valMap.has(key)){
            this.valMap.set(key,value);
            this.recMap.set(key, this.highestVal++);
            return;
        }else {
            if(this.size +1 > this.cap){
                // find least recently used
                let lowest = [-1, Number.MAX_VALUE];
                for(const [key, rec] of this.recMap){
                    if(rec < lowest[1]){
                        lowest = [key,rec];
                    }
                }
                this.valMap.delete(lowest[0]);
                this.recMap.delete(lowest[0]);
                this.valMap.set(key,value);
                this.recMap.set(key,this.highestVal++);
            } else {
                this.size++;
                this.valMap.set(key,value);
                this.recMap.set(key,this.highestVal++);
            }
        }
    }
}











