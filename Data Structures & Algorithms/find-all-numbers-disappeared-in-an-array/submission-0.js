class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        let ans = [];
        let set = new Set();
        for(let i = 0; i < nums.length; i++){
            set.add(nums[i])
        }
        
        for(let i = 1; i <= nums.length; i++){
            if(!set.has(i)){
                ans.push(i);
            }
        }

        return ans;
    }
}
