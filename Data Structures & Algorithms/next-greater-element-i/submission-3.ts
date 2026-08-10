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

        for(let i = 0; i< nums1.length; i++){
            map.set(nums1[i],i);
            ans.push(-1);
        }

        // iterate through nums2
        // if we come across a number that's in nums1 push it to the stack
        // if we come across a number that's larger than the number at
        //  the top of the stack, pop from the stack while the number is larger
        //  and insert it it into our answer array in the position in the map
        for(let n of nums2){
            while(stk.length > 0 && stk[stk.length-1] < n){
                let anum = stk.pop();
                ans[map.get(anum)] = n;
            }
            if(map.has(n)){
                stk.push(n)
            }
        }

        return ans;
    }
}












