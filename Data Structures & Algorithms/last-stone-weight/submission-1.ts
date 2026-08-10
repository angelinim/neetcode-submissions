class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        stones.sort((a,b) => b-a);
        console.log(stones)
        while(stones.length > 1){
            let newStone = stones[0] - stones[1];
            if(newStone > 0){
                stones.push(newStone);
                stones = stones.splice(2);
                stones.sort((a,b) => b-a)
            } else {
                stones = stones.splice(2);
            }
            console.log(stones);
        }
        if(stones.length > 0){
            return stones[0];
        }
        return 0;
    }
}
