function timePlus(hoursTime, minutesTime) {
    let totalMinutes = minutesTime + 15;
    let sumTime = (hoursTime * 60) + totalMinutes;
    let hours = Math.floor(sumTime / 60);
    let minutes = totalMinutes % 60;

    if (hours > 23) {
        hours = 0;
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    }

    else {
        console.log(`${hours}:${minutes}`);
    }

}

timePlus(23, 59);