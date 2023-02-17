const findTheOldest = function(obj) {
    let oldest = getAge(obj[0].yearOfBirth, obj[0].yearOfDeath);
    let oldestName = obj[0].name;
    obj.forEach(e => {
            age = getAge(e.yearOfBirth, e.yearOfDeath)
            if(oldest < age){
                 oldest = age;
                 oldestName = e.name;
            }
    });
    return obj.find(ob => ob.name == oldestName);
};

function getAge (birth, death) {
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
