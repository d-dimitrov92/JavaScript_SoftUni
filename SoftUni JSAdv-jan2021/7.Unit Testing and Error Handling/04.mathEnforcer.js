const { describe } = require('mocha');
const { assert } = require('chai');

let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('isUndefined', () => {
            assert.isUndefined(mathEnforcer.addFive('a'));
            assert.isUndefined(mathEnforcer.addFive(undefined));
        })
        it('proper', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
            assert.equal(mathEnforcer.addFive(-1), 4);
            assert.equal(mathEnforcer.addFive(-0.1), 4.9);
            assert.equal(mathEnforcer.addFive(0), 5);
            assert.equal(mathEnforcer.addFive(-5), 0);
        })
    });
    describe('substatractTen', () => {
        it('isUndefined', () => {
            assert.isUndefined(mathEnforcer.subtractTen('a'));
            assert.isUndefined(mathEnforcer.subtractTen(undefined));
        })
        it('proper', () => {
            assert.equal(mathEnforcer.subtractTen(0), -10);
            assert.equal(mathEnforcer.subtractTen(-1), -11);
            assert.equal(mathEnforcer.subtractTen(-0.1), -10.1);
            assert.equal(mathEnforcer.subtractTen(10), 0);
            assert.equal(mathEnforcer.subtractTen(-5.5), -15.5);
        })
        
    })
    describe('sum', () => {
        it('isUndefined', () => {
            assert.isUndefined(mathEnforcer.sum('a', 1));
            assert.isUndefined(mathEnforcer.sum('a', 'а1'));
            assert.isUndefined(mathEnforcer.sum(2, 'k'));
            assert.isUndefined(mathEnforcer.sum(undefined));
        })
        it('proper', () => {
            assert.equal(mathEnforcer.sum(0,0), 0);
            assert.equal(mathEnforcer.sum(-1, -1.2), -2.2);
            assert.equal(mathEnforcer.sum(-0.1, 0.1), 0);
            assert.equal(mathEnforcer.sum(10, -8.5), 1.5);
            assert.equal(mathEnforcer.sum(-5.5, 5), -0.5);
        })
    })
})