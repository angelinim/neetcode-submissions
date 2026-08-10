class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack = [];

        for (let t of tokens){
            if (t === "+"){
                let a = Number(stack.pop());
                let b = Number(stack.pop());
                stack.push(b+a);
            } else if (t === "-"){
                let a = Number(stack.pop());
                let b = Number(stack.pop());
                stack.push(b-a);
            } else if (t === "*"){
                let a = Number(stack.pop());
                let b = Number(stack.pop());
                stack.push(b*a);
            } else if (t === "/"){
                let a = Number(stack.pop());
                let b = Number(stack.pop());
                stack.push(Math.trunc(b/a));
            } else {
                stack.push(t);
            }
        }

        return stack.pop();
    }
}
