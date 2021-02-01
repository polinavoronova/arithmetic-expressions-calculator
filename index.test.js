import { convertToRPN, calculateRPNExpression } from './index';

describe('parametersValidityCheck', () => {
    it('should return string type of parameter', () => {
        let input = {};
        expect(() => {convertToRPN(input)}).toThrow(TypeError);
    })

    it('should return string type of parameter', () => {
        let input = {};
        expect(() => {calculateRPNExpression(input)}).toThrow(TypeError);
    })

    it('should not contain invalid parentheses', () => {
        let input = '2 + ) 3 + 2 ( / 4';    
        expect(() => {convertToRPN(input)}).toThrow(BadSequenceError);
    })

    it('should not contains double operators', () => {
        let input = '2 * + 4';
        expect(() => {convertToRPN(input)}).toThrow(BadSequenceError);
    })

    it('should not contain restricted symbols', () => {
        let input = '2 + 4 .';
        expect(() => {convertToRPN(input)}).toThrow(BadSequenceError);
    })

    it('all of numbers should be positive', () => {
        let input = '-2 + 4';
        expect(() => {convertToRPN(input)}).toThrow(Error);
    })

    it('elements of expression should be separated by space', () => {
        let input = '2 + 4-1';
        expect(() => {convertToRPN(input)}).toThrow(BadSequenceError);
    })
})

describe('getCorrectResult', () => {
    it('should return correct convertation of expression written in infix notation to Reverse Polish Notation.', () => {
        let input = '2 * ( 3 + 6 / 2 ) / 4';
        expect(() => {convertToRPN(input)}).toEqual('2 3 6 2 / + * 4 /'); 
    })

    it('should return correct convertation of expression written in infix notation to Reverse Polish Notation.', () => {
        let input = '( 8 + 2 * 5 ) / ( 1 + 3 * 2 - 4 )';
        expect(() => {convertToRPN(input)}).toEqual(' 8 2 5 * + 1 3 2 * + 4 - /'); 
    })
})

describe('getRightResult', () => {
    it('should calculate expression string written in RPN', () => {
        let input = '2 3 6 2 / + * 4 /';
        expect(() => {calculateRPNExpression(input)}).toEqual(3);
    })

    it('should calculate expression string written in RPN', () => {
        let input = '1 2 + 4 * 3 +';
        expect(() => {calculateRPNExpression(input)}).toEqual(15);
    })

    it('should calculate expression string written in RPN', () => {
        let input = '7 2 3 * -';
        expect(() => {calculateRPNExpression(input)}).toEqual(1);
    })
})
