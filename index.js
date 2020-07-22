const expression = '2 * ( 3 + 6 / 2 ) / 4';

export function convertToRPN(expression) {


}

function validateExpression(expression) {
    if (typeof expression !== 'string') {
        throw new TypeError("A value is not of the expected type: " + expression);
    }

    let arrayOfExpressionSymbol = expression.split(' ');

    for (let value of arrayOfExpressionSymbol) {
        if (isNaN(+value)) { //Проверка на операнды (при попытке приведения к числу - не NaN) --- можно складывать 
            if (value === '+' || value === '-' || value === '*' || value === '/') { //Проверка на "+" "-" "/" "*"
                //console.log('true');
            }
        } else {
            if (+value > 0) { //Проверка на положительные числа

            }
        }
    }
}

export function calculateRPNExpression(expression) {

}


let s = '2 + 3 * ( 5 - 2 )';
let n = s.split(' ');
console.log(n);
for (let i of n) {
    if (isNaN(+i)) { //Проверка на операнды (при попытке приведения к числу - не NaN)
        if (i === '+' || i === '-' || i === '*' || i === '/') { //Проверка на "+" "-" "/" "*"
            console.log('true');
        }
        //continue;
    } else {
        if (+i > 0) { //Проверка на положительные числа

        }
        //console.log(+i)
    }
}