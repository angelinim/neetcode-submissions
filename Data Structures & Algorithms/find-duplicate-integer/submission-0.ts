class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let set = new Set();

        for(let n of nums){
            if(set.has(n)){
                return n;
            }
            set.add(n);
        }
        return -1;
    }
}
