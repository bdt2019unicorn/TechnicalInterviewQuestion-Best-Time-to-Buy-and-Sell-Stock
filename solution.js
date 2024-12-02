function maxProfit(prices) {
    var minBuy = prices[0];
    var profit = 0;
    for(var i = 1; i < prices.length; i++) {
        profit = Math.max(profit, prices[i] - minBuy);
        minBuy = Math.min(minBuy, prices[i]);
    }
    return profit==0?minBuy: profit;
}


const prices = '7 6 4 3 1 9'; 
const pricesArr = prices.split(' ').map(Number); 

const profit = maxProfit(pricesArr); 

console.log({prices}); 
console.log({profit}); 
