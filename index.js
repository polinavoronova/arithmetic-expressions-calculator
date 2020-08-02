const expression = '2 * ( 3 + 6 / 2 ) / 4';

export function convertToRPN(expression) {
    let symbols = expression.split(' ');
    let RPNExpression = [];
    let stack = [];
    const operationPriority = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
    }

    for (let value of symbols) {
        if (value === '(') {
            stack.push(value);
            continue
        }

        if (value === ')') {
            for (let i = stack.length - 1; i >= 0; i--) {
                if (stack[i] === '(') {
                    stack = stack.splice(0, i);
                    break
                }

                RPNExpression.push(stack[i]);
            }
            continue
        }

        if (!isNaN(+value)) {  //number
            RPNExpression.push(value);
            continue
        }


        let lastStackSymbol = stack[stack.length - 1];
        if (operationPriority[lastStackSymbol] > operationPriority[value] || //operators 
            operationPriority[lastStackSymbol] === operationPriority[value]) {
            RPNExpression.push(lastStackSymbol);
            stack.pop();
            stack.push(value);
            continue
        }

        stack.push(value);
    }

    for (let i = stack.length - 1; i >= 0; i--) {
        RPNExpression.push(stack[i]);
    }

    return RPNExpression;
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
            '+': true,
            '-': true,
            '*': true,
            '/': true,
            '(': true,
            ')': true
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
