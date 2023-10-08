class Employee extends Person {
    public salary: number;

    public constructor({ name, last_name, id, salary }: { name: string, last_name: string, id: string, salary: number }) {
        super({ name, last_name, id });
        this.salary = salary;
    }
}