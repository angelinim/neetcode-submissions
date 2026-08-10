class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stk: string[] = [];
        for(let i = 0; i < s.length; i++){
            switch (s[i]){
                case ')':
                    if (stk.pop() != '('){
                        return false;
                    }
                    break;
                case '}':
                    if (stk.pop() != '{'){
                        return false;
                    }
                    break;
                case ']':
                    if (stk.pop() != '['){
                        return false;
                    }
                    break;
                default:
                    stk.push(s[i]);
            }
        }
        if(stk.length == 0){
            return true;
        }
        return false;
    }
}
