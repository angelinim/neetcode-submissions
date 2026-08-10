use std::collections::HashSet;

impl Solution {
    pub fn has_duplicate(nums: Vec<i32>) -> bool {
        let mut seen: HashSet<i32> = HashSet::new();

        for i in nums {
            if let Some(val) = seen.get(&i) {
                return true;
            } else {
                seen.insert(i);
            }
        }

        false
    }
}
