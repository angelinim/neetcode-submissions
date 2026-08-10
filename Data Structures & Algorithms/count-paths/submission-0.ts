class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        let prevRow = new Int32Array(n);
        prevRow[n-1] = 1;

        for(let r = m-1; r >= 0; r--){
            let curRow = new Int32Array(n);
            for(let c = n-1; c >= 0; c--){
                if(c+1 < n){
                    curRow[c] += curRow[c+1];
                }
                curRow[c] += prevRow[c];
            }
            prevRow = curRow;
        }

        return prevRow[0];
    }
}
