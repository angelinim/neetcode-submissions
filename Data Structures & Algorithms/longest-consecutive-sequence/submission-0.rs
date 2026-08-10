use std::collections::HashSet;

impl Solution {
    pub fn longest_consecutive(nums: Vec<i32>) -> i32 {
        // create a hashset from nums
        // iterate over nums and see if num+1 exists in the set
        // while num - 1 exists, keep counting the sequence
        // keep track of the longest sequence?
        let mut longest_sequence: i32 = 0;
        let set: HashSet<i32> = nums.iter().copied().collect();

        for num in &nums {
            let mut curr_num = *num;
            let mut curr_sequence: i32 = 0;
            while set.contains(&curr_num) {
                curr_num += 1;
                curr_sequence += 1;
            }

            if curr_sequence > longest_sequence {
                longest_sequence = curr_sequence;
            }
        }

        longest_sequence
    }
}
