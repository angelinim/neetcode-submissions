class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        // hashset solution
        // always inc R
        // When would you inc L?
        let set: Set<number> = new Set();
        let l = 0;
        let r = 1;
        set.add(nums[0]);

        while(r < nums.length){
            if(r-l > k){
                set.delete(nums[l]);
                l++;
            }
            if(set.has(nums[r])){
                return true;
            }
            set.add(nums[r]);
            r++;
        }

        return false;
    }
}
