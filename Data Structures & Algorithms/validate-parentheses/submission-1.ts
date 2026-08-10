class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length <= 1){
            return false;
        }
        let stack: string[] = [];

        for (let i = 0; i < s.length; i++) {
            let ch: string;
            if (s[i] == ']') {
                ch = stack.pop();
                if (ch != '['){
                    return false;
                }
            } else if (s[i] == ')') {
                ch = stack.pop();
                if (ch != '('){
                    return false;
                }
            }else if (s[i] == '}') {
                ch = stack.pop();
                if (ch != '{'){
                    return false;
                }
            } else {
                stack.push(s[i]);
            }
        }
        if (stack.length > 0) {
            return false;
        }
        return true;
    }
}
