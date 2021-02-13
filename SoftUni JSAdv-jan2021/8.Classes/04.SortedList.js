class List {
    constructor(){
        this.array = [];
        this.size;
    }
    

    add(num){
        this.array.push(num)
        return this.array.sort()
    }
    remove(index){
        if(index < 0 || index> this.array.length){
            throw new TypeError('Invalid index');
        }
        return this.array.splice(index, 1)
    }
    get(index){
        if(index < 0 || index> this.array.length){
            throw new TypeError('Invalid index');
        }
        return this.array[index];
    }
    get size (){
        return this.array.length;
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
list.add(2);
list.add(1);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list);
