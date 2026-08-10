class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // sort nums
        // iterate through nums backwards
        // target - nums[i] = newTrgt
        // because the list is sorted, if newTrgt < nums[j] break

        for(let i = nums.length-1; i >= 1; i--){
            let curr = nums[i];
            let newTrgt = target - curr;
            for(let j = i-1; j >= 0; j--){
                if(nums[j] === newTrgt){
                    return [j,i];
                }
            }
        }

        return[-1,-1];
    }
}
