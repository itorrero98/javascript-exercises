const sumAll = function(num1, num2) {
    if((typeof num1 !== 'number' || num1 < 0) || (typeof num2 !== 'number' || num2 < 0)) return 'ERROR';
    let sum = 0;
    for(let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
