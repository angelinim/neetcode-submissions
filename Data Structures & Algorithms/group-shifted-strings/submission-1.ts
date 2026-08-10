class Solution {
    /**
     * @param {string[]} strings
     * @return {string[][]}
     */
    groupStrings(strings: string[]): string[][] {
        // find the differences in each char and the length
        // ex abc -> each are 1 char appart
        // ace -> a is 2 char away from c and c is 2 char away from e
        let map: Map<string,string[]> = new Map();

        for(let s of strings){
            let len = s.length;
            let letterDifs = '';
            let firstCharCode = s[0].charCodeAt(0);
            console.log(`Char: ${s[0]}, Code: ${firstCharCode}`);
            for(let i = 1; i < len; i++){
                let code = s[i].charCodeAt(0);
                console.log(`Char: ${s[i]}, Code: ${code}`);
                letterDifs += (code+26-firstCharCode)%26 + ',';
            }
            console.log(letterDifs);
            if(map.has(letterDifs)){
                let temp = map.get(letterDifs);
                temp.push(s);
                map.set(letterDifs,temp);
            } else {
                map.set(letterDifs,[s]);
            }
        }
        let ans = [];
        for(const [key, val] of map){
            ans.push(val);
        }

        return ans;
    }
}
