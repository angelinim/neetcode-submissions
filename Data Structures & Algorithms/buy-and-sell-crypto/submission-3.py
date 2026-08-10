class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        length = len(prices)

        for i in range(length):
            for j in range(i, length):
                diff = prices[j] - prices[i]
                if diff > max_profit:
                    max_profit = diff

        return max_profit
        