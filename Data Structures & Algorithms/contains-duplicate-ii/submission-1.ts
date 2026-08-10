class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        if(k<1){
            return false;
        }
        let i = 0;
        let j = 1;

        while(i < j){
            if(nums[i] === nums[j]){
                return true;
            }

            if(j+1 - i > k || j+1 > nums.length){
                i++;
            } else{
                j++;
            }

            if(i == j && j+1 < nums.length){
                j++;
            }
        }

        return false;
    }
}
