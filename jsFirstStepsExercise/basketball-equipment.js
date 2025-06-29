function basketballEquipment(annualEquipmentFee) {
    let percentageBasketballSneakersPrice = (40 / 100) * annualEquipmentFee;
    let basketballSneakersPrice = annualEquipmentFee - percentageBasketballSneakersPrice;

    let percentageBasketballClothes = (20 / 100) * basketballSneakersPrice;
    let basketballClothesPrice = basketballSneakersPrice - percentageBasketballClothes;

    let basketballPrice = basketballClothesPrice / 4;

    let basketballAccessoriesPrice = basketballPrice / 5;

    let annualTrainingFee = annualEquipmentFee + basketballSneakersPrice + basketballClothesPrice + basketballPrice + basketballAccessoriesPrice;

    console.log(annualTrainingFee);
}

basketballEquipment(550);