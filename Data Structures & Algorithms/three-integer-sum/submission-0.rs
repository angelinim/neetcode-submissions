use std::collections::HashMap;
use std::collections::HashSet;
impl Solution {
    pub fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut set: HashSet<Vec<usize>> = HashSet::new();
        let mut dedup: HashSet<Vec<i32>> = HashSet::new();
        let mut ans: Vec<Vec<i32>> = Vec::new();
        let len = nums.len();

        for i in 0..len {
            for j in i+1..len {
                set.insert(vec![i,j]);
            }
        }

        for s in &set {
            for i in 0..len {
                if s[0] == i || s[1] == i {
                    continue;
                }
                let num1 = nums[s[0]];
                let num2 = nums[s[1]];
                if num1+num2+nums[i] == 0 {
                    let mut new = vec!(num1,num2,nums[i]);
                    new.sort();
                    dedup.insert(new);
                }
            }
        }
        dedup.into_iter().collect()
    }
}
