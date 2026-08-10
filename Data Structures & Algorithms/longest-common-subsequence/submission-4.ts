class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1: string, text2: string): number {
        let arr = Array.from({length: text1.length+1}, 
            () => Array.from({length: text2.length+1}, () => 0));

        for(let r = text1.length-1; r >= 0; r--){
            for(let c = text2.length-1; c >= 0; c--){
                if(text1[r] === text2[c]){
                    arr[r][c] = arr[r+1][c+1]+1;
                } else {
                    arr[r][c] = Math.max(arr[r+1][c],arr[r][c+1])
                }
            }
        }


        return arr[0][0];
    }
}
