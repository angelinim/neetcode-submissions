class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        // redo this question
        let ans = [[]];

        for(let i = 0; i < nums.length; i++){
            let num = nums[i];
            let len = ans.length
            for(let j = 0; j < len; j++){
                let temp = [...ans[j]];
                temp.push(num);
                ans.push(temp)
            }
        }
        return ans;
    }
}
