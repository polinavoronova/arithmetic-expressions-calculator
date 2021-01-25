const expression = '2 * ( 3 + 6 / 2 ) / 4';

export function convertToRPN(expression) {
    validateExpression(expression);

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

    return RPNExpression.join(' ');
}

function validateExpression(expression) {
    if (typeof expression !== 'string') {
        throw new TypeError("A value is not of the expected type: " + expression);
    }

    let symbols = expression.split(' ');
    let stack = [];
    let lastValue = '';
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

        throw new Error('Invalid expression: restricted symbols');
    }

    //проверка на двойные операторы
    for (let value of symbols) {
        const operators = {
            '+': true,
            '-': true,
            '*': true,
            '/': true
        };
        
        if (operators.hasOwnProperty(value) && operators.hasOwnProperty(lastValue)) {
            throw new Error('Invalid expression: double operators');
        }
    }

    //функция для проверки валидности порядка скобок и их парности (пробегаю, закидываю в стек и при встрече следующей проверяю на парность)
    for (let i = 0; i < symbols.length - 1; i++) {
        let value = symbols[i];

        if (value === '(') {
            stack.push(value);
        } else if (value === ')') {
            if (stack[stack.length - 1] === '(') {
                stack.pop(stack.length - 1);
            } else if (isNaN(+lastValue)) {
                throw new Error('Invalid expression: invalid parentheses');
            }
        }

        if (i === (symbols.length - 1) && stack.length !== 0) {
            throw new Error('Invalid expression: invalid parentheses');
        }

        lastValue = value;
    }
}

export function calculateRPNExpression(expression) {
    let symbols = expression.split(' ');
    let stack = [];
    let result;

    for (let value = 0; value < symbols.length; value++) {
        let lastNumber = stack[stack.length - 1];
        let penultNumber = stack[stack.length - 2];
        if (!isNaN(+symbols[value])) {
            stack.push(symbols[value]);
            continue
        }

        result = String(eval(penultNumber + symbols[value] + lastNumber));
        stack.pop();
        stack.pop();
        stack.push(result);
    }

    return result;
}
