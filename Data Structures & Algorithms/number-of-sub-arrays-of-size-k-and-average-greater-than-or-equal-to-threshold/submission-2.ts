class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr: number[], k: number, threshold: number): number {
        let l = 0;
        let sum = 0;
        let ans = 0;

        for(let r = 0; r < arr.length; r++){
            if(r-l+1 > k){// move window?
                sum-=arr[l];
                l++;
            }
            sum+=arr[r];
            if(r-l+1 === k && sum/k >= threshold){
                ans++;
            }
        }

        return ans
    }
}











