class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        // do it the faster easier way...
        let p1 = 0;
        let p2 = 0;
        let ans = "";

        while(p1 < word1.length || p2 < word2.length){
            if(p1 < word1.length){
                ans+=word1[p1];
            }
            if(p2 < word2.length){
                ans+=word2[p2];
            }
            p1++;
            p2++
        }
        return ans;
    }
}
