class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        lowest_number = -1
        max_profit = 0
        length = len(prices)

        for i in range(length):
            if lowest_number == -1 or lowest_number > prices[i]:
                lowest_number = prices[i]
            elif prices[i] - lowest_number > max_profit:
                max_profit = prices[i] - lowest_number
        
        return max_profit
        