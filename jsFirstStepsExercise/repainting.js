function repainting(nylonNeeded, paintNeeded, thinnerNeeded, workingHours) {
    let nylonPrice = 1.50;
    let paintPrice = 14.50;
    let thinnerPrice = 5;
    let additionalNylonNeeded = 3;
    let priceForBags = 0.40;

    let sumNylonNeeded = nylonNeeded * nylonPrice;
    let sumPaintNeeded = paintNeeded * paintPrice;
    let sumThinnerNeeded = thinnerNeeded * thinnerPrice;
    let additionalAmountPaint = (10 / 100) * sumPaintNeeded;
    let sumAllMaterials = sumNylonNeeded + sumPaintNeeded + sumThinnerNeeded + additionalAmountPaint + additionalNylonNeeded + priceForBags;
    let sumSingleWorkingHourPrice = (30 / 100) * sumAllMaterials;
    let sumAllWorkingHoursPrice = workingHours * sumSingleWorkingHourPrice;

    let totalAmount = sumAllMaterials + sumAllWorkingHoursPrice;

    console.log(totalAmount);
    
}

repainting(5, 10, 10, 1);