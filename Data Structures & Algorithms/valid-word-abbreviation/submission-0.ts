class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word: string, abbr: string): boolean {
        let p1 = 0;
        let p2 = 0;
        // p1 -> tracks the position in the word
        // p2 -> tracks the position in the abbr
        // if we come across a number in the abbr get the number
        //      and move p1 that many spaces over
        // check each character for equivalency

        while(p1 < word.length && p2 < abbr.length){
            // if the pointer of an abbr is a number
            if(abbr[p2] !== ' ' && !isNaN(Number(abbr[p2]))){
                if(Number(abbr[p2]) === 0){
                    return false;
                }
                let numStr = '';
                while(!isNaN(Number(abbr[p2]))){
                    numStr += abbr[p2];
                    p2++;
                }
                let num = Number(numStr);
                p1+=num;
                continue;
            }

            if(abbr[p2] !== word[p1]){
                return false;
            }
            
            p1++;
            p2++;
        }

        if(p1 !== word.length || p2 !== abbr.length) return false;

        return true;
    }
}








