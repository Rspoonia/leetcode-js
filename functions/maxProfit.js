var maxProfit = function(prices) {
    let  profit = 0, minPrice = prices[0]
    for(let i = 0; i< prices.length; i++){
        let sellPrice = prices[i]
        let temp = sellPrice - minPrice
        if(temp>profit) profit = temp
        if(sellPrice < minPrice) minPrice = sellPrice
    }
    return profit
};

console.log(maxProfit([7,1,5,3,6,4])) // 5