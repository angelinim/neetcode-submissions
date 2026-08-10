use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map: HashMap<i32,i32> = HashMap::new();
        let len = nums.len();

        for i in 0..len {
            let diff = target - nums[i];

            if let Some(val) = map.get(&diff) {
                return vec![*val, i as i32];
            }
            map.insert(nums[i], i as i32);
        }

        vec![]
    }
}
