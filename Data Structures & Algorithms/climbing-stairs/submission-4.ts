class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let arr = new Int32Array(n);
        arr[0] = 1;
        arr[1] = 2;

        for(let i = 2; i < n; i++){
            arr[i] = arr[i-1] + arr[i-2];
        }

        return arr[arr.length-1]
    }
}
