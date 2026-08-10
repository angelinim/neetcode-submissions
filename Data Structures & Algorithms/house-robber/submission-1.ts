class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        // create an array that's the same size as nums
        // at each point in the array calculate the max number
        // that you COULD be at at that point in the calc
        if(nums.length === 1){
            return nums[0];
        } 
        if(nums.length === 2){
            return Math.max(nums[0],nums[1]);
        }

        let arr = new Array(nums.length);
        arr[0] = nums[0];
        arr[1] = nums[1];
        arr[2] = nums[0] + nums[2];

        for(let i = 3; i < nums.length; i++){
            arr[i] = Math.max(arr[i-2]+nums[i],arr[i-3]+nums[i]);
        }
        
        return Math.max(arr[arr.length-1], arr[arr.length-2]);
    }
}
