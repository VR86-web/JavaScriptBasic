function suppliesForSchool(numPenPacks, numMarkersPacks, cleaningMaterials, reduction){
    let priceSinglePenPack = 5.80;
    let priceSingleMarkerPack = 7.20;
    let priceCleaningMaterialLitter = 1.20;

    let sumPenPacks = numPenPacks * priceSinglePenPack;
    let sumMarkerPacks = numMarkersPacks * priceSingleMarkerPack;
    let sumCleaningMaterials = cleaningMaterials * priceCleaningMaterialLitter;

    let totalAmount = sumCleaningMaterials + sumMarkerPacks + sumPenPacks;

    let percentageReduction =  reduction / 100;

    let sumReduction = percentageReduction * totalAmount;
    let sumAfterReduction = totalAmount - sumReduction;

    console.log(sumAfterReduction);
}

suppliesForSchool(2, 3, 4, 25);