function smallShop(arg1, arg2, arg3) {
    let product = String(arg1);
    let city = String(arg2);
    let quantity = Number(arg3);
    let price = 0;

    switch (city) {
        case'Sofia':
            if (product === 'coffee') {
                price = quantity * 0.50;
            }
            else if (product === 'water') {
                price = quantity * 0.80;
            }
            else if (product === 'beer') {
                price = quantity * 1.20;
            }
            else if (product === 'sweets') {
                price = quantity * 1.45;
            }
            else {
                price = quantity * 1.60;
            }
            break;

        case 'Plovdiv':
            if (product === 'coffee') {
                price = quantity * 0.40;
            }
            else if (product === 'water') {
                price = quantity * 0.70;
            }
            else if (product === 'beer') {
                price = quantity * 1.15;
            }
            else if (product === 'sweets') {
                price = quantity * 1.30;
            }
            else {
                price = quantity * 1.50;
            }
            break;

        case 'Varna':
            if (product === 'coffee') {
                price = quantity * 0.45;
            }
            else if (product === 'water') {
                price = quantity * 0.70;
            }
            else if (product === 'beer') {
                price = quantity * 1.10;
            }
            else if (product === 'sweets') {
                price = quantity * 1.35;
            }
            else {
                price = quantity * 1.55;
            }
            break;
    }

    console.log(price);
    }

    smallShop("coffee", "Varna", 2);