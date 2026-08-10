class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1: number[], nums2: number[]): number[] {
        let map = new Map();
        let ans = [];
        let stk = [];

        for(let i = 0; i < nums1.length; i++){
            map.set(nums1[i],i);
            ans[i] = -1;
        }

        for(let i = 0; i < nums2.length; i++){
            if(stk.length === 0){
                stk.push(nums2[i]);
            } else {
                while(stk.length > 0 && stk[stk.length-1] < nums2[i]){
                    let n = stk.pop();
                    if(map.has(n)){
                        ans[map.get(n)] = nums2[i]
                    }
                } 
                stk.push(nums2[i]);
            }
        }

        return ans;
    }
}





