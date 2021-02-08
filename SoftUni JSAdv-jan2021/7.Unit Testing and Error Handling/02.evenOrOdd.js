const describe = require('mocha').describe;
const assert = require('chai').assert;

function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('is even or odd', () => {
    it('is it undefined', () => {
        assert.isUndefined(isOddOrEven(1), 'Message string');
    })
    it('is odd', () => {
        assert.equal(isOddOrEven('a'), 'odd', 'Message odd');
    })
    it('is even', () => {
        assert.equal(isOddOrEven('aa'), 'even', 'Message even');
    })
})