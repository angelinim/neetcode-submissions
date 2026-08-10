use std::collections::HashSet;
impl Solution {
    pub fn three_sum(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        nums.sort();
        // let mut ans: Vec<Vec<i32>> = Vec::new();
        let mut ans: HashSet<Vec<i32>> = HashSet::new();
        let len = nums.len();

        for i in (0..len).rev() {
            for j in (0..i).rev() {
                let something = nums[i] + nums[j];
                for k in (0..j) {
                    if something == -nums[k] {
                        ans.insert(vec!(nums[i], nums[j], nums[k]));
                        // ans.push(vec!(nums[i], nums[j], nums[k]));
                    }
                }
            }
        }

        // ans
        ans.into_iter().collect()
    }
}
