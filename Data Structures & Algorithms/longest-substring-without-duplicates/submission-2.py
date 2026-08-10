class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        my_set = set()
        longest_count = 0
        current_count = 0
        i = 0
        substring_start = 0
        # track the start index of the current substring
        # iterate through the string and track the current char in the set
        # if the char exists in the set the index to the substring_start + 1

        while i < len(s):
            if s[i] in my_set:
                substring_start += 1
                i = substring_start
                if current_count > longest_count:
                    longest_count = current_count
                current_count = 1
                my_set = set()
                my_set.add(s[i])
            else:
                my_set.add(s[i])
                current_count += 1
            i += 1


        if current_count > longest_count:
            longest_count = current_count

        return longest_count
