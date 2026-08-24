class Solution {
    /**
     * @param {string} keyboard
     * @param {string} word
     * @return {number}
     */
    calculateTime(keyboard: string, word: string): number {
        let map = new Map();
        let curPosition = 0;
        let ans = 0;

        for(let i = 0; i < keyboard.length; i++){
            map.set(keyboard[i],i);
        }

        for(let c of word){
            let newPos = map.get(c);
            ans += Math.abs(curPosition - newPos);
            curPosition = newPos;
        }

        return ans;
    }
}
