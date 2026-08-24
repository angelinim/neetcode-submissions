class FirstUnique {
    queue: number[];
    map: Map<number,number>;
    firstUnique: number;
    pos: number;
    /**
     * @param {number[]} nums
     */
    constructor(nums: number[]) {
        // map holding all of the numbers and how many times they show up
        // track each number in array
        // track pos of first unique number
        // iterate through to find next unique if first unique is no longer unique
        this.pos = 0;
        this.firstUnique = nums[0];
        this.queue = [];
        this.map = new Map<number,number>();
        this.map.set(nums[0],1);
        this.queue.push(nums[0]);
        for(let i = 1; i < nums.length; i++){
            this.add(nums[i]);
        }
    }

    /**
     * @return {number}
     */
    showFirstUnique(): number {
        return this.firstUnique;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    add(value: number): void {
        this.queue.push(value);
        // the case where we do not have a unique value
        if(this.firstUnique === -1){
            // set value in map
            if(this.map.has(value)){
                this.map.set(value, this.map.get(value)+1);
            } else {
                this.map.set(value, 1);
                this.firstUnique = value;
                this.pos = this.queue.length-1;
            }
            return;
        }

        // the case where we do have a unique value
        if(value === this.firstUnique){
            this.map.set(value, this.map.get(value)+1);

            for(; this.pos < this.queue.length; this.pos++){
                if(this.map.get(this.queue[this.pos]) === 1){
                    this.firstUnique = this.queue[this.pos];
                    break;
                }
            }
            if(this.pos === this.queue.length){
                this.firstUnique = -1;
                this.pos = -1;
            }
        } else {
            // set value in map
            if(this.map.has(value)){
                this.map.set(value, this.map.get(value)+1);
            } else {
                this.map.set(value, 1);
            }
        }
    }
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
