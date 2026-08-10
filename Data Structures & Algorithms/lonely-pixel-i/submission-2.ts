class Solution {
    /**
     * @param {character[][]} picture
     * @return {number}
     */
    findLonelyPixel(picture: string[][]): number {
        let ans = 0;
        let bs = [];

        for(let r = 0; r < picture.length; r++){
            for(let c = 0; c < picture[r].length; c++){
                if(picture[r][c] === 'B'){
                    bs.push([r,c]);
                }
            }
        }

        for(let i = 0; i < bs.length; i++){
            let s = bs[i];
            let count = 0;
            for(let j = 0; j < bs.length; j++){
                let s2 = bs[j];
                if(s[0] === s2[0] || s[1] === s2[1]){
                    count++;
                }
            }
            if(count === 1){
                ans++;
            }
        }

        return ans;
    }
}


