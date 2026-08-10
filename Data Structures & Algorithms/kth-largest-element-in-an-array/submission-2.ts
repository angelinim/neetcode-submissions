class Solution {
    mh: number[] = [0];
    k: number;
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        // min heap of size k
        // use nums as a stream of numbers
        this.k = k;
        for(let n of nums){
            this.add(n);
        }
        return this.mh[1];
    }

    add(val: number){
        this.mh.push(val);
        let cIdx = this.mh.length-1;
        let pIdx = Math.floor(cIdx/2);

        while(pIdx > 0 && this.mh[cIdx] < this.mh[pIdx]){
            let temp = this.mh[pIdx];
            this.mh[pIdx] = this.mh[cIdx];
            this.mh[cIdx] = temp;
            cIdx = pIdx;
            pIdx = Math.floor(cIdx/2);
        }
        
        if(this.mh.length > this.k+1){
            this.popHeap();
        }
    }

    popHeap(){
        this.mh[1] = this.mh[this.mh.length-1];
        this.mh.pop();
        let pidx = 1;
        let c1idx = pidx*2;
        let c2idx = pidx*2+1;

        while(c1idx < this.mh.length){
            if(c2idx < this.mh.length){
                if(this.mh[c1idx] <= this.mh[c2idx] && this.mh[pidx] > this.mh[c1idx]){
                    let temp = this.mh[pidx];
                    this.mh[pidx] = this.mh[c1idx];
                    this.mh[c1idx] = temp;
                    pidx = c1idx;
                    c1idx = pidx*2;
                    c2idx = pidx*2+1;
                } else if(this.mh[c2idx] < this.mh[c1idx] && this.mh[pidx] > this.mh[c2idx]){
                    let temp = this.mh[pidx];
                    this.mh[pidx] = this.mh[c2idx];
                    this.mh[c2idx] = temp;
                    pidx = c2idx;
                    c1idx = pidx*2;
                    c2idx = pidx*2+1;
                } else {
                    break;
                }
            } else if(this.mh[pidx] > this.mh[c1idx]){
                let temp = this.mh[pidx];
                this.mh[pidx] = this.mh[c1idx];
                this.mh[c1idx] = temp;
                pidx = c1idx;
                c1idx = pidx*2;
                c2idx = pidx*2+1;
            } else {
                break;
            }
        }
    }
}
