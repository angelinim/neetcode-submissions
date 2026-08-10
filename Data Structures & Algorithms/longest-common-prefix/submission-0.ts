class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if(strs.length < 1){
            return '';
        }

        // Find the shortest string in the array and record the length
        let shortestStrLength = strs[0].length;
        let shortestStrIndex = 0;
        for(let i = 0; i < strs.length; i++){
            if(strs[i].length < shortestStrLength){
                shortestStrLength = strs[i].length;
                shortestStrIndex = i;
            }
        }
        
        // record the position and letter of each str
        let map: Map<number, string> = new Map();

        for(let i = 0; i < shortestStrLength; i++){
            map.set(i,strs[shortestStrIndex][i]);
        }

        for(let s of strs){
            for(let i = 0; i < shortestStrLength; i++){
                if(map.get(i) != s[i]){
                    shortestStrLength = i;
                }
            }
        }

        return strs[shortestStrIndex].slice(0,shortestStrLength);
    }
}











