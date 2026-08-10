class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1: number[], nums2: number[]): number[] {
        let ans:number[] = new Array(nums1.length);
        let map = new Map();
        let stk = [];
        for(let i = 0; i < nums1.length; i++){
            ans[i] = -1;
            map.set(nums1[i],i);
        }

        for(let j=0; j < nums2.length;j++){
            while(stk.length > 0 && stk[stk.length-1] < nums2[j]){
                let n = stk.pop();
                if(map.has(n)){
                    ans[map.get(n)] = nums2[j];
                }
            }
            stk.push(nums2[j]);
        }

        return ans;
    }
}
