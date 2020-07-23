const expression = '2 * ( 3 + 6 / 2 ) / 4';

export function convertToRPN(expression) {
    validateExpression(expression);

    let symbols = expression.split(' ');

    for (let value of symbols) {
        if (skobka) {
            continue
        }

        if (drugaya skobka) {
            continue
        }

        if (chislo) {
            continue
        }

        //ddeystviye dlya operatorov
        
     }

}

function validateExpression(expression) {
    if (typeof expression !== 'string') {
        throw new TypeError("A value is not of the expected type: " + expression);
    }

    let symbols = expression.split(' ');
    for (let value of symbols) {
        if (!isNaN(+value) && +value > 0) { //Проверка на числа, положительные числа
            continue;
        }

        const allowedSymbols = {
            '+' : true,
            '-' : true,
            '*' : true,
            '/' : true,
            '(' : true,
            ')' : true
        };

        if (allowedSymbols.hasOwnProperty(value)) { //Проверка на "+" "-" "/" "*" "(" ")" на наличие ключа в объекте
            continue;
        }

        //функция для проверки валидности порядка скобок (пробегаю, закидываю в стек и при встрече следующей проверяю на парность)

        throw new Error('Invalid expression: invalid parentheses or double operators or restricted symbols');
    }
}

export function calculateRPNExpression(expression) {

}
