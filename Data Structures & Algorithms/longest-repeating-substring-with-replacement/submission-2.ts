class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        // track each character count in window
        // track most frequent char
        // use sliding window length - most freq char and compare to k
        // that will be the number of replacements.
        let charmap = new Map();
        let mostFreq: string = '';
        let l = 0;
        let ans = 0;

        for(let r = 0; r < s.length; r++){
            // update values in our map 
            if(charmap.has(s[r])){
                charmap.set(s[r], charmap.get(s[r])+1);
            } else {
                charmap.set(s[r], 1);
            }
            // set value of the most freq used char
            const cur = charmap.get(s[r]);
            let mf = charmap.get(mostFreq);
            if(mostFreq === ''){
                mostFreq = s[r];
            } else if(cur > mf){
                mostFreq = s[r];
                mf = cur;
            }
            // if the most frequently used char - window length > k
            // inc l
            let windowLength = r-l+1;
            if(windowLength - mf > k){
                charmap.set(s[l], charmap.get(s[l])-1);
                l++;
                windowLength = r-l+1;
            }
            ans = Math.max(windowLength, ans);
        }

        return ans;
    }
}













