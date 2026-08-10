class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        let studentsLeft = students.length;
        let movesBack = 0;
        let studentP = 0;
        let sandwichP = 0;

        // use pointers to track current position of queue
        // increment student pointer when they get sand/move to back
        // if student moves to back of line -> push val to back

        while(sandwichP < sandwiches.length 
            && movesBack < studentsLeft 
            && studentsLeft > 0){
            if(students[studentP] === sandwiches[sandwichP]){
                studentsLeft--;
                studentP++;
                sandwichP++;
                movesBack = 0;
            } else {
                students.push(students[studentP]);
                studentP++;
                movesBack++;
            }
        }

        return studentsLeft;
    }
}
