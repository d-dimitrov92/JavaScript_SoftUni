class KeyValuePair<T, U> {
    private key: T;
    private value: U;

    public setKeyValue(key: T, value: U): void {
        this.key = key;
        this.value = value;
    }

    public display(): void {
        return console.log(`key = ${this.key}, value = ${this.value}`);
    }
}