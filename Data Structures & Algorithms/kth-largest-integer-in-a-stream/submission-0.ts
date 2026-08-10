class KthLargest {
    k: number;
    minHeap: number[] = [];
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        // use a min heap of size k
        this.k = k;
        this.minHeap.push(-1);
        for(let n of nums){
            this.add(n);
        }
        console.log("////////////////");
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.minHeap.push(val);
        let idx = this.minHeap.length -1;
        let parent = Math.floor(idx/2);

        while(parent > 0 && this.minHeap[parent] > this.minHeap[idx]){
            // swap and remake idx's
            let temp  = this.minHeap[parent];
            this.minHeap[parent] = this.minHeap[idx];
            this.minHeap[idx] = temp;
            idx = parent;
            parent = Math.floor(idx/2);
        }
        if(this.minHeap.length-1 > this.k){
            this.poll()
        }

        return this.minHeap[1];
    }

    poll(){
        let hlen = this.minHeap.length;
        this.minHeap[1] = this.minHeap[this.minHeap.length-1];
        let idx = 1;
        while(idx*2 < hlen){
            let child1 = idx*2;
            let child2 = idx*2+1;
            if(child1 < hlen && 
                child2 < hlen && 
                this.minHeap[child1] <= this.minHeap[child2] &&
                this.minHeap[child1] < this.minHeap[idx]){
                    //swap child1 with new idx
                    let temp = this.minHeap[idx];
                    this.minHeap[idx] = this.minHeap[child1];
                    this.minHeap[child1] = temp;
                    idx = child1;
            } else if(
                child1 < hlen && 
                child2 < hlen && 
                this.minHeap[child1] > this.minHeap[child2] &&
                this.minHeap[child2] < this.minHeap[idx]){
                    //swap child2 with with idx
                    let temp = this.minHeap[idx];
                    this.minHeap[idx] = this.minHeap[child2];
                    this.minHeap[child2] = temp;
                    idx = child2;
            } else {
                break;
            }
        }
        this.minHeap.pop();
    }
}



