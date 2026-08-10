class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        // redo this quesiton going from right to left...
        let largestElement = -1;
        let i = arr.length-1;

        while(i >= 0){
            let num = arr[i];
            arr[i] = largestElement;
            if(num>largestElement){
                largestElement = num;
            }
            i--;
        }
        return arr;
    }
}
