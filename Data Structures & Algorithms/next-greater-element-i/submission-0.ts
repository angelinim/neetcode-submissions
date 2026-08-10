class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1: number[], nums2: number[]): number[] {
        let ans = [];
        for(let n of nums1){
            let found = false;
            let ng = -1;
            for(let j = 0; j < nums2.length; j++){
                if(!found && nums2[j] === n){
                    found = true;
                }
                if(found && nums2[j] > n){
                    ng = nums2[j];
                    break;
                }
            }
            ans.push(ng);
        }
        return ans;
    }
}
