class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        // hashmap soln
        // prefixsum:count
        // why does this work?
        // if n = cur prefix sum; requiredPrefix = abs|n-k|
        // keep track of how many of each prefix sums exist in hashmap
        // r-l=k -> -l=k-r -> -(k-r)=l -> -k+r=l -> r-k=l

        let map = new Map();
        let sum = 0;
        let ans = 0;
        map.set(0,1);

        for(let n of nums){
            sum += n;
            let diff = sum-k;
            if(map.has(diff)){
                console.log(diff);
                console.log(map);
                ans += map.get(diff);
            }

            if(map.has(sum)){
                map.set(sum, map.get(sum)+1);
            } else {
                map.set(sum, 1);
            }
        }

        return ans;
    }
}
