function sumSeconds(competitor1, competitor2, competitor3) {
    let totalTime = competitor1 + competitor2 + competitor3;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }

    else {
        console.log(`${minutes}:${seconds}`);
    }
    
}

sumSeconds(35, 45, 44)