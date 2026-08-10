class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s: string, t: string): number {
        let sp = 0;
        let tp = 0;

        while(sp < s.length){
            if(s[sp] == t[tp]){
                tp++;
            }
            sp++;
        }

        if(tp < t.length){
            return t.length-tp;
        }

        return 0;
    }
}
