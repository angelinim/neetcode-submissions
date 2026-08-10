class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        // redo: things to remember:
        // use a map. track most used char val.
        let charmap = new Map();
        let hchar = '';
        let ans = 0;
        let l = 0;

        for(let r = 0; r < s.length; r++){
            if(charmap.has(s[r])){
                charmap.set(s[r], charmap.get(s[r])+1);
            } else {
                charmap.set(s[r], 1);
            }
            const newfreq = charmap.get(s[r]);
            let oldfreq = charmap.get(hchar);
            if(newfreq > oldfreq || hchar === ''){
                hchar = s[r];
                oldfreq = newfreq;
            }
            // size of window r-l+1
            let windowSize = r-l+1;
            if(windowSize-oldfreq > k){
                charmap.set(s[l], charmap.get(s[l])-1);
                l++;
                windowSize = r-l+1;
            }
            ans = Math.max(ans, windowSize)
        }

        return ans;

    }
}
