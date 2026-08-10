class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        if(nums.length < 2){
            return nums.length;
        }
        let p1 = 0;
        let p2 = 1;

        while(p2 < nums.length){
            if(nums[p1] > nums[p2]){
                return p1+1;
            }
            if(nums[p1] !== nums[p2]){
                p1++;
                p2++;
            } else if(nums[p1] === nums[p2]){
                if(p2+1 < nums.length && nums[p2+1] === nums[p2]){
                    // find the first instance of a number that is greater than p2
                    // if you cant return p2+1
                    let i = p2+1;
                    while(i<nums.length){
                        if(nums[i] > nums[p2]){
                            break;
                        }
                        i++;
                    }
                    // this case, there are no larger numbers in the arr
                    // p2 marks the index of the end of unique numbers
                    if(i >= nums.length){
                        return p2+1;
                    }
                    // i is the index of the next largest number
                    let j = p2+1;
                    while(i<nums.length){
                        let temp = nums[i];
                        nums[i] = nums[j];
                        nums[j] = temp;
                        i++;
                        j++;
                    }
                } else if(p2+1 >= nums.length){
                    return nums.length;
                } else if(nums[p2] > nums[p2+1]) {
                    return p2+1;
                }
                p1 = p2+1;
                p2 = p1+1;
            }
        }
        return nums.length;
    }
}








