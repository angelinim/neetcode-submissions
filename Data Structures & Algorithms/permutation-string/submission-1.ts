class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s2.length < s1.length){
            return false;
        }
        let s1Map = new Map<string, number>;

        for (let c of s1){
            s1Map.set(c, (s1Map.get(c) ?? 0) + 1);
        }

        // iterate over s2
        // if s1Map has char start loop for length of s1 and track characters in new map
        // compare maps

        for(let i = 0; i < s2.length; i++){
            // iterate over substring
            let s2Map = new Map<string, number>;
            for(let j = i; j < i+s1.length && j < s2.length; j++){
                s2Map.set(s2[j], (s2Map.get(s2[j]) ?? 0) + 1);
            }
            console.log(s1Map,s2Map);

            if(this.mapsEqual(s1Map, s2Map)){
                return true;
            }
        }

        return false;
    }

    mapsEqual(a: Map<string, number>, b: Map<string, number>){
        if (a.size !== b.size) return false;
        for(let [key,val] of a){
            if(!b.has(key) || b.get(key) !== val){
                return false;
            }
        }
        return true;
    }
}
