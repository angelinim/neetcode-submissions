class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        // This question only requires knowing that the 
        // # of 0's and 1's in each arr are equal
        let sFreq = new Int32Array(2);
        // count the students
        // iterate through sandwiches and subtract from studentFreq
        // return number of students left
        for(let s of students){
            sFreq[s]++;
        }

        for(let sand of sandwiches){
            if(sFreq[sand] > 0){
                sFreq[sand]--;
            } else if (sand){
                return sFreq[0];
            } else {
                return sFreq[1]
            }
        }

        return 0;
    }
}





