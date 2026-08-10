class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks: string, k: number): number {
        let l = 0;
        let count = 0;
        let ans;

        for(let r = 0; r < blocks.length; r++){
            if(blocks[r] === 'W'){
                count++;
            }
            if(r-l+1 > k){
                if(blocks[l] === 'W'){
                    count--;
                }
                l++;
            }
            if(r-l+1 === k){
                if(ans == null){
                    ans = count;
                } else {
                    ans = Math.min(ans,count);
                }
            }
        }

        return ans;
    }
}
