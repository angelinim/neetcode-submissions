class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let ans = [];
        let curr = [];
        this.backTrack(nums, 0, target, curr, ans)
        return ans;
    }

    backTrack(nums, i, target, curr, ans){
        // what are the breakout cases?
        if(target === 0 ){
            ans.push([...curr]);
            return;
        } else if(target < 0 || i >= nums.length){
            return;
        }
        // what are we pushing and popping from curr?
        curr.push(nums[i]);
        this.backTrack(nums,i,target-nums[i],curr,ans);
        curr.pop();
        this.backTrack(nums,i+1,target,curr,ans);

    }
}







