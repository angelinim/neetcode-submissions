class Solution {
    /**
     * @param {number[][]} arrays
     * @return {number}
     */
    maxDistance(arrays: number[][]): number {
        // greedy algorithm
        // find min and max as we go
        // check previous min to cur max
        // check previous max to cur min
        // update min and max
        let min = arrays[0][0];
        let max = arrays[0][arrays[0].length-1];
        let ans = null;

        for(let i = 1; i < arrays.length; i++){
            const arr = arrays[i];
            let maxdiff = Math.max(Math.abs(arr[arr.length-1]-min),Math.abs(max-arr[0]));
            if(ans == null || maxdiff > ans){
                ans = maxdiff;
            }
            min = Math.min(min,arr[0]);
            max = Math.max(max, arr[arr.length-1]);
        }
        return ans;
    }
}
