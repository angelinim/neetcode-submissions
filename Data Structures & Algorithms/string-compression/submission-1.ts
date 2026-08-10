class Solution {
    /**
     * @param {character[]} chars
     * @return {number}
     */
    compress(chars: string[]): number {
        // one pointer to follow the actual output
        let i = 0;
        let d = 0;

        while(d < chars.length){
            chars[i] = chars[d];
            if(chars[d] !== chars[d+1]){
                i++;
                d++;
            } else {
                let count = 1;
                while(d+1 < chars.length && chars[d] === chars[d+1]){
                    count++;
                    d++;
                }
                let countstr = count.toString();
                for(let k = 0; k < countstr.length; k++){
                    i++;
                    chars[i] = countstr[k];
                }
                i++
                d++;
                console.log(chars,i,d)
            }
        }

        return i;
    }
}
