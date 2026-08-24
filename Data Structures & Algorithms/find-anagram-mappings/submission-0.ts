class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    anagramMappings(nums1: number[], nums2: number[]): number[] {
        let map = new Map();
        let mapping = [];

        for(let i = 0; i < nums2.length; i++){
            map.set(nums2[i],i);
        }

        for(let n of nums1){
            mapping.push(map.get(n));
        }

        return mapping;
    }
}
