class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        // create a new array with the precomputed sums
        // for each element check that element and every
        // sum up to that element to see if the sum = k

        let a = [];
        let sum = 0
        let ans = 0;

        for(let i = 0; i < nums.length; i++){
            const n = nums[i];
            sum += n;
            a.push(sum);
            for(let j = 0; j < a.length-1; j++){
                if(sum - a[j] == k){
                    ans++;
                }
            }
            if(sum == k){
                ans++;
            }
        }


        return ans;
    }
}











