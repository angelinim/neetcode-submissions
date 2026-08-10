class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // hashmap soln
        let map: Map<number, number> = new Map();

        for(let i = 0; i < nums.length; i++){
            let newTrgt = target - nums[i];
            if(map.has(newTrgt)){
                return [map.get(newTrgt),i]
            }
            map.set(nums[i],i);
        }

        return [-1,-1]
    }
}
