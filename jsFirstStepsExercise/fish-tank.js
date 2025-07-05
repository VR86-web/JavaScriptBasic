function fishTank(length, width, height, occupiedPlace) {
    let volume = length * width * height;
    let volumeInLiters = volume * 0.001;
    let percentageOccupiedPlace = occupiedPlace / 100;
    let neededLiters = volumeInLiters * (1 - percentageOccupiedPlace);

    console.log(neededLiters);
}

fishTank(85, 75, 47,17)