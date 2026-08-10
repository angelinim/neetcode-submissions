class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        // impliment sorting solution
        strs.sort();
        let comp = strs[0];
        let k = comp.length;

        for(let i = 1; i < strs.length; i++){
            for(let j = 0; j < k; j++){
                if(strs[i][j] !== comp[j]){
                    k = j;
                    break;
                }
            }
            if(k===0){
                return "";
            }
        }

        return comp.slice(0,k);
    }
}
