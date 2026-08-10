class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1: string, text2: string): number {
        // dynamic programming w/ 2d arr...
        let arr = Array.from({ length: text1.length+1 }, () => Array(text2.length+1).fill(0));
        for(let r = text1.length-1; r >= 0; r--){
            for(let c = text2.length-1;c >= 0; c--){
                if(text1[r] === text2[c]){
                    arr[r][c] = 1 + arr[r+1][c+1];
                } else {
                    arr[r][c] = Math.max(arr[r][c+1],arr[r+1][c]);
                }
            }
        }
        return arr[0][0];
    }
}




