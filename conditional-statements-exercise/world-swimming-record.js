function worldSwimmingRecord(recordSeconds, distanceMeters, timeSeconds) {
    let swimmingTimeSeconds = distanceMeters * timeSeconds;
    let delayMeters = Math.floor(distanceMeters / 15);
    let  delaySeconds = delayMeters * 12.5;
    let totalSwimmingTime = swimmingTimeSeconds + delaySeconds;

    let neededSeconds = Math.abs(totalSwimmingTime - recordSeconds);

    if (totalSwimmingTime < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalSwimmingTime.toFixed(2)} seconds.`)
    }

    else {
        console.log(`No, he failed! He was ${neededSeconds.toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(55555.67, 3017, 5.03);