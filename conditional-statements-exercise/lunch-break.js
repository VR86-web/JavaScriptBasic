function lunchBreak(seriesName, episodeDuration, breakDuration) {
    let lunchTime = (1 / 8) * breakDuration ;
    let breakTime = (1 / 4) * breakDuration;
    let totalTime = lunchTime + breakTime + episodeDuration;
    let needetTime = totalTime - breakDuration;

    if (needetTime < 0) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(needetTime)} minutes free time.`);
    }

    else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(Math.abs(needetTime))} more minutes.`);
    }

}

lunchBreak("Teen Wolf", 48, 60);