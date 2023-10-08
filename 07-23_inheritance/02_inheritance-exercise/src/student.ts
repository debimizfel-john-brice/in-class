class Student extends Person {
    public school_class: number;

    public constructor({ name, last_name, id, school_class }: { name: string, last_name: string, id: string, school_class: number }) {
        super({ name, last_name, id });
        this.school_class = school_class;
    }
}