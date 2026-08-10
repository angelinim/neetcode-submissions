class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr: number[], k: number, threshold: number): number {
        // simple way first
        // iterate over each individual number in arr and have an
        // inner loop iterate over k numbers beyond that one
        // sum each number, take it's average, compare it to threshold...
        let ans = 0;

        for(let i = 0; i < arr.length; i++){
            let sum = arr[i];
            let size = Math.min(i+k, arr.length);
            for(let j = i+1; j < size; j++){
                sum += arr[j];
            }
            if(size - i === k && sum/k >= threshold){
                ans++
            }
        }

        return ans;
    }
}






