class Manager extends Employee {
    public bonus: number;

    public constructor({ name, last_name, id, salary, bonus }: { name: string, last_name: string, id: string, salary: number, bonus: number }) {
        super({ name, last_name, id, salary });
        this.bonus = bonus;
    }
}