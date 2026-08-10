class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let len = nums.length;
        let ans = new Array(len*2);

        for(let i = 0; i < len; i++){
            ans[i] = nums[i];
            ans[i+len] = nums[i];
        }
        return ans;
    }
}
