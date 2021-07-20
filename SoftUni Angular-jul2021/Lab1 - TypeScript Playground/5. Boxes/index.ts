class Box<T> {
    private _boxes = [];
    private _count = 0;

    public add(el: T) {
        this._boxes.push(el);
    }
    public remove() {
        this._boxes.shift();
    }

    get count(): number {
        this._count = this._boxes.length;
        return this._count;
    }
}