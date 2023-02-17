const getTheTitles = function(obj) {
    let titles = [];
    obj.forEach(element => {
        titles.push(element.title);
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
