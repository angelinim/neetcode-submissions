class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids: number[]): number[] {
        let stk = [];

        for(let a of asteroids){
            while(a < 0 && stk.length > 0 && stk[stk.length-1] > 0){
                let b = stk.pop();
                if(Math.abs(a)<b){
                    stk.push(b);
                    a = 0;
                } else if(Math.abs(a) === b){
                    a = 0;
                }
            }
            if(a !== 0){
                stk.push(a)
            }
        }
        return stk;
    }
}
