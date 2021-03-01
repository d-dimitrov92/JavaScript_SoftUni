const { assert } = require("chai");
let { Repository } = require("./solution.js");

describe("Tests …", function () {
    let props;
    let repo;
    let entity;
    beforeEach(() => {
        props = {
            name: "string",
            age: "number",
            birthday: "object"
        }
        entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        repo = new Repository(props);
    })
    it("add work", function () {
        assert.equal(repo.add({
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        }), 0)
    });
    it('count test', () => {
        assert.equal(repo.data.size, 0);
        repo.add(entity);
    });
    it('props validate', () => {
        repo.add(entity)
        assert.equal(typeof repo.data == 'object', true);
        assert.throw(() => repo.add({
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7),
            nqma: "takuv"
        }), `Property nqma is not of correct type!`);
        assert.throw(() => repo.add({
            name: "Pesho",
            age: 22
        }), `Property birthday is missing from the entity!`)
    })
    it('error throwing', () => {
        assert.throw(() => repo.getId(2), `Entity with id: 2 does not exist!`);
        assert.throw(() => repo.update(2), `Entity with id: 2 does not exist!`);
        assert.throw(() => repo.del(2), `Entity with id: 2 does not exist!`);
        assert.throw(() => repo.del(-1), `Entity with id: -1 does not exist!`)
    })
});
