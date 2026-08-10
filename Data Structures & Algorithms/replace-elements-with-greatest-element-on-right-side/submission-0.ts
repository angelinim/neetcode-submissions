class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        // find the index of the largest element
        // every element < that index = largest element
        // repeat for sub array starting at largest index

        for(let i = 0; i < arr.length;){
            // find largest element index to right
            let largestIndex = i+1;
            for(let j = i+2; j < arr.length; j++){
                if(arr[j]>arr[largestIndex]){
                    largestIndex = j;
                }
            }
            // let each element up to that index == largest
            for(let k = i; k < largestIndex; k++){
                arr[k] = arr[largestIndex];
            }

            i = largestIndex;
        }

        arr[arr.length-1] = -1;

        return arr;
    }
}
