function foodDelivery(numChickenMenu, numFishMemu, numVeggieMenu) {
    let priceSingleChickenMenu = 10.35;
    let priceSingleFishMenu = 12.40;
    let priceSingleVeggieMenu = 8.15;

    let totalPriceChickenMenu = numChickenMenu * priceSingleChickenMenu;
    let totalPriceFishMenu = numFishMemu * priceSingleFishMenu;
    let totalPriceVeggieMenu = numVeggieMenu * priceSingleVeggieMenu;

    let totalPriceAllMenues = totalPriceChickenMenu + totalPriceFishMenu +totalPriceVeggieMenu;
    let sweet = (20 / 100) * totalPriceAllMenues;
    let deliveryPrice = 2.50;

    let priceToPay = totalPriceAllMenues + sweet + deliveryPrice;

    console.log(priceToPay);
}

foodDelivery(9, 2, 6);