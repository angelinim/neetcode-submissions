class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(ops: string[]): number {
        let stk: number[] = [];
        let ans: number = 0;

        for(let op of ops){
            // use each operation to calc ans
            // as we go. Will be faster that way
            if(op === 'D'){
                // double the last number in stk
                // and push it
                let val = stk[stk.length-1]*2;
                stk.push(val);
                ans += val;
            } else if (op === '+'){
                // add the last 2 numbers in stk
                // and push it
                let val = stk[stk.length-1]+stk[stk.length-2];
                stk.push(val);
                ans += val;
            } else if (op === 'C'){
                // pop the last number in stk
                let val = stk.pop();
                ans -= val;
            } else {
                // add number to amnt;
                let val = +op;
                stk.push(val);
                ans+=val;
            }
        }

        return ans;
    }
}
