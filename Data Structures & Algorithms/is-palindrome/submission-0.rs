impl Solution {
    pub fn is_palindrome(s: String) -> bool {
        let s: String = s.chars().filter(|c| {
            c.is_alphanumeric()
        }).map(|c| {
            c.to_lowercase().collect::<String>()
        }).collect();
        let rev_s: String = s.chars().rev().collect();
        
        rev_s == s
    }
}
