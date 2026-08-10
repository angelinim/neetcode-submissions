class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        for(let i = 0; i < nums.length; i++){
            let ls = 0;
            let rs = 0;
            for(let j = 0; j < i; j++){
                ls+=nums[j];
            }
            for(let k = i+1; k < nums.length; k++){
                rs+=nums[k];
            }
            if(rs === ls){
                return i;
            }
        }
        return -1;
    }
}
