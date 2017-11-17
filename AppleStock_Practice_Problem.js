//brute force

  function getMaxProfit(stockPricesYesterday) {

    var maxProfit = 0;

    // go through every time
    for (var outerTime = 0; outerTime < stockPricesYesterday.length; outerTime++) {

        // for every time, got through every OTHER time
        for (var innerTime = 0; innerTime < stockPricesYesterday.length; innerTime++) {

            // for each pair, find the earlier and later times
            var earlierTime = Math.min(outerTime, innerTime);
            var laterTime   = Math.max(outerTime, innerTime);

            // and use those to find the earlier and later prices
            var earlierPrice = stockPricesYesterday[earlierTime];
            var laterPrice   = stockPricesYesterday[laterTime];

            // see what our profit would be if we bought at the
            // min price and sold at the current price
            var potentialProfit = laterPrice - earlierPrice;

            // update maxProfit if we can do better
            maxProfit = Math.max(maxProfit, potentialProfit);
        }
    }

    return maxProfit;
}

//notes: if wanting to get Math.max or Math.min of an array, call:
Math.max.apply(Math, nameOfArray);

//better but still exponential solution:
  function getMaxProfit(stockPricesYesterday) {

    var maxProfit = 0;

    // go through every price and time
    for (var earlierTime = 0; earlierTime < stockPricesYesterday.length; earlierTime++) {
        var earlierPrice = stockPricesYesterday[earlierTime];

        // and go through all the LATER prices
        for (var laterTime = earlierTime + 1; laterTime < stockPricesYesterday.length; laterTime++) {
            var laterPrice = stockPricesYesterday[laterTime];

            // see what our profit would be if we bought at the
            // min price and sold at the current price
            var potentialProfit = laterPrice - earlierPrice;

            // update maxProfit if we can do better
            maxProfit = Math.max(maxProfit, potentialProfit);
        }
    }

    return maxProfit;
}

//solution with constant time
function getMaxProfit(stockPricesYesterday) {

    var minPrice = stockPricesYesterday[0];
    var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

    for (var i = 0; i < stockPricesYesterday.length; i++) {
    	
        var currentPrice = stockPricesYesterday[i];

        // ensure minPrice is the lowest price we've seen so far
        minPrice = Math.min(minPrice, currentPrice);

        // see what our profit would be if we bought at the
        // min price and sold at the current price
        var potentialProfit = currentPrice - minPrice;

        // update maxProfit if we can do better
        maxProfit = Math.max(maxProfit, potentialProfit);
    }

    return maxProfit;
}


//solution that has O(N) time and O(1) space, and works with negative results
  function getMaxProfit(stockPricesYesterday) {

    // make sure we have at least 2 prices
    if (stockPricesYesterday.length < 2) {
        throw new Error('Getting a profit requires at least 2 prices');
    }

    // we'll greedily update minPrice and maxProfit, so we initialize
    // them to the first price and the first possible profit
    var minPrice = stockPricesYesterday[0];
    var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

    // start at the second (index 1) time
    // we can't sell at the first time, since we must buy first,
    // and we can't buy and sell at the same time!
    // if we started at index 0, we'd try to buy *and* sell at time 0.
    // this would give a profit of 0, which is a problem if our
    // maxProfit is supposed to be *negative*--we'd return 0.
    for (var i = 1; i < stockPricesYesterday.length; i++) {
        var currentPrice = stockPricesYesterday[i];

        // see what our profit would be if we bought at the
        // min price and sold at the current price
        var potentialProfit = currentPrice - minPrice;

        // update maxProfit if we can do better
        maxProfit = Math.max(maxProfit, potentialProfit);

        // update minPrice so it's always
        // the lowest price we've seen so far
        minPrice = Math.min(minPrice, currentPrice);
    }

    return maxProfit;
}


