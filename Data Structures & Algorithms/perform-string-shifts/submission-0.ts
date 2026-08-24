class Solution {
    /**
     * @param {string} s
     * @param {number[][]} shift
     * @return {string}
     */
    stringShift(s: string, shift: number[][]): string {
        let sarr = Array.from(s);
        const len = sarr.length;

        for(let i = 0; i < shift.length; i++){
            let [dir, amnt] = shift[i];
            let temp = new Array(len);
            for(let j = 0; j < len; j++){
                if(dir == 1){
                    temp[(j+amnt)%len] = sarr[j];
                } else {
                    if(j-amnt < 0){
                        temp[len+j-amnt] = sarr[j];
                    } else {
                        temp[(j-amnt)] = sarr[j];
                    }
                }
            }
            sarr = temp;
        }

        return sarr.join('');
    }
}
