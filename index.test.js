import { convertToRPN, calculateRPNExpression } from './index';

describe('parametersValidityCheck', () => {
    it('should return string type of parameter', () => {
        let input = {};
        expect(convertToRPN(input)).toThrow(TypeError);
    })

    it('should not contain invalid parentheses', () => {
        let input = '2 + ) 3 + 2 ( / 4';    
        expect(convertToRPN(input)).toThrow(BadSequenceError);
    })

    it('should not contains double operators', () => {
        let input = '2 * + 4';
        expect(convertToRPN(input)).toThrow(BadSequenceError);
    })

    it('should not contain restricted symbols', () => {
        let input = '2 + 4 .';
        expect(convertToRPN(input)).toThrow(BadSequenceError);
    })

    it('all of numbers should be positive', () => {
        let input = '-2 + 4';
        expect(convertToRPN(input)).toThrow(Error);
    })

    it('elements of expression should be separated by space', () => {
        let input = '2 + 4-1';
        expect(convertToRPN(input)).toThrow(BadSequenceError);
    })
})
