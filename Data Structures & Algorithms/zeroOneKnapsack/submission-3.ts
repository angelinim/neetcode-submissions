class Solution {
    /**
     * @param {number[]} profit
     * @param {number[]} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(
        profit: number[],
        weight: number[],
        capacity: number,
    ): number {
        // 2 branches for each profit number
        // either include or don't include
        type State = 
            [idx: number, totalProf: number, totalWeight: number];
        let stk: State[] = [];
        let cache = Array.from(
            { length: profit.length + 1 }, 
            () => new Array(capacity + 1).fill(-1)
        );
        let maxProf = 0;

        stk.push([-1,0,0]);

        while(stk.length > 0){
            let [i, curprofit, curweight] = stk.pop();
            // console.log(i, curprofit, curweight);
            if(cache[i+1][curweight] >= curprofit){
                continue;
            }
            cache[i+1][curweight] = curprofit;
            
            if(i+1 < profit.length){
                // case where we skip the cur item.
                stk.push([i+1,curprofit,curweight]);
                // if adding the next item to knapsac
                // is less than capacity of knapsac
                if(curweight+weight[i+1] <= capacity){
                    stk.push(
                        [i+1,curprofit+profit[i+1],curweight+weight[i+1]]
                    );
                }
            }
            maxProf = Math.max(curprofit, maxProf);
        }

        return maxProf;
    }
}























