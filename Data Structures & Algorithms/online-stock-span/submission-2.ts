class StockSpanner {
    stk:number[];
    span: number[];
    constructor() {
        this.stk = [];
        this.span = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price: number): number {
        let res = 1;
        if(this.stk.length === 0){
            this.stk.push(price);
            this.span.push(1);
            return 1;
        }

        while(this.stk.length > 0){
            if(price >= this.stk[this.stk.length-1]){
                this.stk.pop();
                let s = this.span.pop();
                res+=s;
            }else{
                break;
            }
        }
        this.stk.push(price);
        this.span.push(res);
        console.log(this.stk,this.span)
        return res;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
