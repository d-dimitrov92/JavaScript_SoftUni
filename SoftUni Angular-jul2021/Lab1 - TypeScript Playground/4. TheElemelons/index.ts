abstract class Melon {
    public weight: number;
    public melonSort: string;
    public element: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }

    public toString(): string {
        return `
        Element: ${this.element}
        Sort: ${this.melonSort}
        Element Index: ${this.elementIndex()}`
    }

    public elementIndex(): number {
        return this.weight * this.melonSort.length;
    }
}

export class Watermelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Water';
    }
}

export class Firemelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Fire';
    }
}

export class Earthmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Earth';
    }
}

export class Airmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Air';
    }
}

export class Melolemonmelon extends Melon {
    public elements: Array<string>;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elements = ['Water', 'Fire', 'Earth', 'Air'];
    }

    public morph() {
        this.element = this.elements.shift();
        this.elements.push(this.element);
    }
}