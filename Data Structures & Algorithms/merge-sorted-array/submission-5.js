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
            let num1 = nums[j];
            let num2 = nums2[k];
            console.log(num1,num2);
            if(num2 == null || num1 < num2){
                nums1[i] = num1;
                j++;
            } else{
                nums1[i] = num2;
                k++;
            }
        }
    }
}
