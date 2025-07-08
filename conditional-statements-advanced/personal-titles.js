function presonalTitles(arg1, arg2) {
    let age = Number(arg1);
    let title = String(arg2);
    if (title === 'm') {
        if (age >= 16) {
            console.log('Mr.');
        }
        else {
            console.log('Master');
        }
    }

    else if (title === 'f') {
        if (age >= 16) {
            console.log('Ms.');
        }
        else {
            console.log('Miss');
        }
    }
}

presonalTitles(12, 'f');