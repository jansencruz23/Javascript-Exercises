const sumAll = function(num1, num2) {
    let large;
    let small;
    let sum = 0;

    if(!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) return 'ERROR';
    if(num1 > num2){
        large = num1;
        small = num2;
    }
    else {
        large = num2;
        small = num1;
    }

    for(let i = small; i <= large; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
