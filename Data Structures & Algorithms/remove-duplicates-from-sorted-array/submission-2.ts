class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        // returning cutoff point after moving elements
        // let l and r pointers = 0 to start
        // move r right until it is at a number different from l
        // swap values at l and r while moving up the array
        // return final value of l
        // I can't see how this could possibly be an easy question unless you use a set
        let l = 0;
        let r = 0;
        
        while(r < nums.length){
            nums[l] = nums[r];
            while(nums[l] == nums[r]){
                r++;
            }
            l++;
        }
        return l;
    }
}
