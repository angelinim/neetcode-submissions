/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n: number): number {
        // half of n I guess?
        let l = 1;
        let r = n;

        while(l<=r){
            let g = Math.floor((l+r)/2);
            if(guess(g) === -1){
                // lower half
                r = g-1;
            } else if(guess(g) === 1){
                l = g+1
            } else {
                return g;
            }
        }

        return -1;
    }
}
