class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        for(let i = 0, j = 0; i < nums1.length && j < n;i++){
            if(nums1[i] > nums2[j]){
                let temp = nums1[i];
                nums1[i] = nums2[j];
                for(let k = i+1; k < nums1.length; k++){
                    let temp2 = nums1[k];
                    nums1[k] = temp;
                    temp = temp2;
                }
                j++
            } else if (nums1[i] === 0 && i >= m){
                nums1[i] = nums2[j];
                j++;
            }
        }
    }
}
