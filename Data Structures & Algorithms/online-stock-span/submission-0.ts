class StockSpanner {
    stk:number[];
    constructor() {
        this.stk = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price: number): number {
        let res = 0
        this.stk.push(price);

        for(let i = this.stk.length-1; i >= 0; i--){
            if(price >= this.stk[i]){
                res++;
            } else{
                break;
            }
        }
        
        return res;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
