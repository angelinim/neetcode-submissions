class Solution {
    /**
     * @param {number[][]} mat
     * @return {number}
     */
    smallestCommonElement(mat: number[][]): number {
        // first find all common elements between sets
        // return smallest element from that set

        // if theres only one set of numbers return 
        // the smallest number in that set
        if(mat.length === 1 && mat[0].length > 0){
            return mat[0][0];
        }

        // garuntee that we have more than one set of nums
        let sets: Set<number>[] = [];
        let valid = [];

        for(let j = 1; j < mat.length; j++){
            let temp = new Set<number>();
            for(let n of mat[j]){
                temp.add(n);
            }
            sets.push(temp);
        }

        //iterate through the elements in the first array
        // to find all valid numbers.
        // sort...

        for(let i=0; i < mat[0].length; i++){
            let hasElement = true;
            for(let set of sets){
                if(!set.has(mat[0][i])){
                    hasElement = false;
                    break;
                }
            }
            if(hasElement){
                valid.push(mat[0][i]);
            }
        }

        return valid.length > 0 ? valid[0] : -1
    }
}












