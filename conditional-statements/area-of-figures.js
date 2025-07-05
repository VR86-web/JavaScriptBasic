function areaOfFigures(type, numA, numB) {

    let area = 0;
    let side = Number(numA)

    if(type === 'square') {
        area = side * side;

    }

    else if (type === 'rectangle') {
        let sideB = Number(numB);
        area = side * sideB;

    }

    else if (type === 'circle') {
        let radius = side;
        area = Math.PI * Math.pow(radius, 2);

    }

    else {
        let h= Number(numB);
        area = side * h / 2;

    }

    console.log(area.toFixed(3));

}

areaOfFigures("square", 5)