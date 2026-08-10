class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        // actually merge the arrays
        let nums = nums1.slice(0,m);
        // k -> nums
        // j -> nums2
        // i -> nums1
        for(let i = 0,j = 0,k=0; i < m+n; i++){
            if(nums2[k] == null || nums[j] < nums2[k]){
                nums1[i] = nums[j];
                j++;
            } else{
                nums1[i] = nums2[k];
                k++;
            }
        }
    }
}
