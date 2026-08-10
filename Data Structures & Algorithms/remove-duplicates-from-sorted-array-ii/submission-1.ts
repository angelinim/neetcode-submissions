class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        // try the 2 pointer soln again.
        // try doing it differently
        // the point is to move r to the end of the
        // duplicate numbers and then move.
        let l = 0;
        let r = 0;

        while(r < nums.length){
            let count = 1;
            while(r+1 < nums.length && nums[r] === nums[r+1]){
                r++;
                count++;
            }

            for(let i = 0; i < Math.min(count,2); i++){
                nums[l] = nums[r];
                l++;
            }
            r++
        }

        return l;
    }
}








