class DynamicArray {
    arr: number[];
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.arr = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        let lastElement = this.arr.length-1;
        while(lastElement >= 0 && this.arr[lastElement] == null){
            lastElement--;
        }
        
        if(lastElement < 0){
            this.arr[0] = n;
        } else if(lastElement == this.arr.length-1){
            this.resize();
            this.arr[lastElement+1] = n;
        } else {
            this.arr[lastElement+1] = n;
        }
    }

    /**
     * @returns {number}
     */
    popback(): number {
        let lastElement = this.arr.length-1;
        while(lastElement >= 0 && this.arr[lastElement] == null){
            lastElement--;
        }
        const val = this.arr[lastElement];
        this.arr[lastElement] = null;
        return val;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        let newArr = new Array(this.arr.length * 2);
        for(let i = 0; i < this.arr.length; i++){
            newArr[i] = this.arr[i];
        }

        this.arr = newArr;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        let count = 0;
        for(let val of this.arr){
            if (typeof val === 'number'){
                count++;
            }
        }
        return count;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.arr.length;
    }
}
