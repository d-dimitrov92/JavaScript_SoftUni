const { describe } = require('mocha');
const { assert } = require("chai");

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}


describe('lookupChar test', () => {
    it('', () => {
        assert.isUndefined(lookupChar(1, 1));
        assert.isUndefined(lookupChar('sdd', 4.4));
        assert.isUndefined(lookupChar('ddd', 'a'));
    })
    it('', () => {
        assert.equal(lookupChar('aaa', -1), 'Incorrect index');
        assert.equal(lookupChar('aaa', 4), 'Incorrect index');
    })
    it('', () => {
        assert.equal(lookupChar('aaa', 0), 'a');
        assert.equal(lookupChar('aae', 2), 'e');
    })
})