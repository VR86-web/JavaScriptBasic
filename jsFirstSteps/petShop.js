function petShop(numPacksDogsFood, numPacksCatFood) {
    let priceDogsFood = numPacksDogsFood * 2.50;
    let priceCatsFood = numPacksCatFood * 4;
    let result = priceDogsFood + priceCatsFood;

    console.log(`${result} lv.`);
}

petShop(13, 9)