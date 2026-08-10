class NumMatrix {
    matrixSum: number[][];
    matrix: number[][];
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix: number[][]) {
        this.matrix = matrix;
        this.matrixSum = [];
        for(let r = 0; r < matrix.length; r++){
            this.matrixSum.push([]);
            let prevSum = 0;
            for(let c = 0; c < matrix[r].length; c++){
                prevSum += matrix[r][c];
                this.matrixSum[r].push(prevSum);
            }
        }
        console.log(this.matrixSum)
        console.log(this.matrix)
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        // col1 -> col2
        // for row1 -> row2
        let sum = 0;
        let lindex = col1-1;
        let rindex = col2;

        for(let r = row1; r <= row2; r++){
            let rval = this.matrixSum[r][rindex];
            let lval = 0;
            if(lindex >= 0){
                lval = this.matrixSum[r][lindex];
            }
            sum += rval-lval;
        }

        return sum;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
