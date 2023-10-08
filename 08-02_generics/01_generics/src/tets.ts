class Test<T>{
    public value: T;

    public constructor(value: T) {
        this.value = value;
    }

    public display() {
        console.log(`value: ${this.value}`);
    }
}
