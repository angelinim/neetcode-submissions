class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let l = 1;
        let r = Math.max(...piles);
        let best = r;
        while(l <= r){
            let k = Math.floor((l+r)/2);
            let timeElapsed = 0;
            for(let pile of piles){
                timeElapsed += Math.ceil(pile/k);
            }
            if(timeElapsed > h){
                l = k+1;
            } else if(timeElapsed <= h){
                r = k-1;
                best = k;
            }
        }
        return best;
    }
}



