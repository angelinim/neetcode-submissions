class Solution {
    /**
     * @param {string} s
     * @param {number[][]} shift
     * @return {string}
     */
    stringShift(s: string, shift: number[][]): string {
        const len = s.length;
        let pos = 0;

        // track where the first character will end up
        // by going through the entire shift array.
        for(let i = 0; i < shift.length; i++){
            let [dir, amnt] = shift[i];

            if(dir == 1){
                pos = (pos+amnt)%len;
            } else {
                if(pos-amnt < 0){
                    pos = len+pos-amnt;
                } else {
                    pos = pos-amnt;
                }
            }
        }

        // iterate through the string from the tracked pos
        // reconstruct the string from that position
        let reconstructedString = new Array(len);
        for(let c of s){
            reconstructedString[pos] = c;
            pos = (pos + 1) % len;
        }
        return reconstructedString.join('');
    }
}











