class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        // if we encounter val in nums
        // skip that number and inc moveAmnt
        // each number after we move back moveAmnt in arr
        let moveAmnt = 0;

        for(let i = 0; i < nums.length; i++){
            if(nums[i] == val){
                moveAmnt++;
            } else if(nums[i] != val && moveAmnt != 0){
                nums[i-moveAmnt] = nums[i];
            }
        }

        return nums.length - moveAmnt;
    }
}
