function bonusScore(score) {
    let bonusPoints = 0.0;
    if (score <= 100) {
        bonusPoints += 5;
    }

    else if (score > 100, score <= 1000) {
        bonusPoints = (20 / 100) * score;
    }

    else {
        bonusPoints = (10 / 100) * score;
    }

    if (score % 2 === 0) {
        bonusPoints += 1;
    }

    if (score % 10 === 5) {
        bonusPoints += 2;
    }

    let totalScore = score + bonusPoints;

    console.log(bonusPoints);
    console.log(totalScore);
}

bonusScore(2703)