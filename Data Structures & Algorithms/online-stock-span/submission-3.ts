class StockSpanner {
    stk:number[];
    span: number[];
    constructor() {
        // redo greatest monotonic stack
        this.stk = [];
        this.span = []
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price: number): number {
        if(this.stk.length === 0){
            this.stk.push(price);
            this.span.push(1);
            return 1;
        }
        let res = 1;
        while(this.stk.length > 0 && 
            price >= this.stk[this.stk.length-1]){
            this.stk.pop();
            res += this.span.pop();
        }
        this.stk.push(price);
        this.span.push(res);

        return res;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
