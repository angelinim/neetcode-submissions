class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        // start with []
        // add the current number to each existing set in the arr
        let ans = [[]];

        for(let i = 0; i < nums.length; i++){
            let len = ans.length;
            for(let j = 0; j < len; j++){
                let cpy = [...ans[j]];
                cpy.push(nums[i]);
                ans.push(cpy);
            }
        }

        return ans;
    }
}
