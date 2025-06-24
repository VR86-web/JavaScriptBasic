function projectsCreation(name, numOfProjects){
    let architectName = name;
    let projects = numOfProjects;
    let neededHours = numOfProjects * 3;
    let result = `The architect ${architectName} will need ${neededHours} hours to complete ${projects} project/s.`;

    console.log(result);
}

projectsCreation('Vladislav', 9)