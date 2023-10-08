abstract class Person {
    public name: string;
    public last_name: string;
    public id: string;


    public constructor({ name, last_name, id }: { name: string, last_name: string, id: string }) {
        this.id = id
        this.last_name = last_name
        this.name = name
    }
}