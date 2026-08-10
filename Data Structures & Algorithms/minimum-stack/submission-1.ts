class MinStack {
    minList: number[];
    stack: number[];
    constructor() {
        this.stack = [];
        this.minList = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (this.minList.length == 0){
            this.minList.push(val);
        } else {
            let minval = Math.min(this.minList[this.minList.length -1], val);
            this.minList.push(minval);
        }
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        // what happens if I pop the lowest value?
        this.stack.pop();
        this.minList.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length-1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minList[this.minList.length-1];
    }
}
