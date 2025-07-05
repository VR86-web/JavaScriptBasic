function toyStore(excursionPrice, numPuzzle, numDoll, numBears, numMinions, numTrucks) {
    let puzzlePrice = 2.60;
    let dollPrice = 3;
    let bearsPrice = 4.10;
    let miniondPrice = 8.2;
    let trucksPrice = 2;

    let totalOrderedToys = numPuzzle + numDoll + numMinions + numTrucks + numBears;

    let totalPrice = (numPuzzle * puzzlePrice)
     + (numDoll * dollPrice)
      + (numBears * bearsPrice)
       + (numMinions * miniondPrice)
        + (numTrucks * trucksPrice);

    if (totalOrderedToys >= 50) {
        totalPrice -= totalPrice * 0.25;
    }

    let rent = totalPrice * 0.1;
    let profit = totalPrice - rent;
    let moneyLeftOver = Math.abs(profit - excursionPrice);

    if (profit >= excursionPrice) {
        console.log(`Yes! ${moneyLeftOver.toFixed(2)} lv left.`);
    }

    else {
        console.log(`Not enough money! ${moneyLeftOver.toFixed(2)} lv needed.`)
    }
}

toyStore(320, 8, 2, 5, 5, 1)