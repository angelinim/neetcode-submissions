class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        let stk = [];
        let map = new Map();
        for (let i=0; i < position.length; i++){
            map.set(position[i],speed[i]);
        }

        position.sort((a,b) => b-a);
        for(let p of position){
            let remainingDist = target-p;
            let speed = map.get(p);
            let hoursToDest = remainingDist/speed;
            stk.push(hoursToDest)
            if(stk.length >= 2){
                if (stk[stk.length-1] <= stk[stk.length-2]){
                    stk.pop();
                }
            }
        }
        
        return stk.length;
    }
}
