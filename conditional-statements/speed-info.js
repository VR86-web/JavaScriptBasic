function speedInfo(speedNum) {

    if (speedNum <= 10) {
        console.log('slow');
    }

    else if (speedNum > 10, speedNum <= 50) {
        console.log('average');
    }

    else if (speedNum > 50, speedNum <= 150) {
        console.log('fast');
    }

    else if (speedNum > 150, speedNum <= 1000) {
        console.log('ultra fast');
    }

    else {
        console.log('extremely fast');
    }

}

speedInfo(8)