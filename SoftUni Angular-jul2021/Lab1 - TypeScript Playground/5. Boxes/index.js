var Box = /** @class */ (function () {
    function Box() {
        this._boxes = [];
        this._count = 0;
    }
    Box.prototype.add = function (el) {
        this._boxes.push(el);
    };
    Box.prototype.remove = function () {
        this._boxes.shift();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            this._count = this._boxes.length;
            return this._count;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
