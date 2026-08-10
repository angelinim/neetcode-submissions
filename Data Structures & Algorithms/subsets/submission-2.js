class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const subset = [];
        const ans = [];

        // do recursive dfs soln
        this.dfs(nums,subset,0, ans)
        return ans;
    }

    dfs(nums, curr, index, ans){
        // why is this incorrect?
        if(index >= nums.length){
            ans.push([...curr]);
            return;
        }
        curr.push(nums[index]);
        this.dfs(nums, curr, index+1, ans);
        curr.pop();
        this.dfs(nums, curr, index+1, ans);
    }
}
