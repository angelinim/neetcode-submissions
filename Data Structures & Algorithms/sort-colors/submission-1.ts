class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        let buckets = new Int32Array(3);
        for(let i = 0; i < nums.length; i++){
            buckets[nums[i]]++;
        }
        for(let i = 0, j = 0; i < nums.length;){
            if(buckets[j] > 0) {
                nums[i] = j
                buckets[j]--;
                i++
            }else {
                j++;
            }
        }
    }
}
