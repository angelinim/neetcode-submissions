class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    minRemoveToMakeValid(s: string): string {
        // use a stack to track parenthesis and a string for characters?
        // if we come across a ) and the stack is empty discard
        // if we have a stack with ( at the end...
        // maybe going through the arr backwards with inverse logic?
        let ans = "";
        let stk: string[] = [];

        for(let c of s){
            if(c === '('){
                stk.push(c);
                ans += c;
            } else if(c === ')'){
                if(stk.length>0){
                    stk.pop();
                    ans += c;
                }
            } else {
                ans += c;
            }
        }
        let fans = [];
        stk = [];

        for(let i = ans.length-1; i >= 0; i--){
            if(ans[i] === ')'){
                stk.push(ans[i]);
                fans.push(ans[i]);
            } else if(ans[i] === '('){
                if(stk.length > 0){
                    stk.pop();
                    fans.push(ans[i]);
                }
            } else {
                fans.push(ans[i])
            }
        }

        return fans.reverse().join('');
    }
}








