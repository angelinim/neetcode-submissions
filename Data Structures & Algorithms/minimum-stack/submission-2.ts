class MinStack {
    stk: number[];
    minStk: number[];

    constructor() {
        this.stk = [];
        this.minStk = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stk.push(val);
        if(this.minStk.length > 0){
            this.minStk.push(Math.min(this.minStk[this.minStk.length-1],val));
        } else {
            this.minStk.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stk.pop();
        this.minStk.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stk[this.stk.length-1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStk[this.minStk.length-1];
    }
}
