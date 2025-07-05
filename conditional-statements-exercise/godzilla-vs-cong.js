function godzillaVsKong(budget, actors, actorsClothes) {
    let movieDecor = budget * 0.1;
    let actorsExpences = actors * actorsClothes
    
    if (actors > 150) {
        actorsExpences = actorsExpences * 0.9;
    }

    let neededMoney = actorsExpences + movieDecor
    let remainingBudjet = Math.abs(budget - neededMoney);

    if (neededMoney > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${remainingBudjet.toFixed(2)} leva more.`);
    }

    else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${remainingBudjet.toFixed(2)} leva left.`);
    }
}

godzillaVsKong(15437.62, 186, 57.99);