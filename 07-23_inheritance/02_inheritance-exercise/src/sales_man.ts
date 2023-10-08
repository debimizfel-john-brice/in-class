class SalesMan extends Employee {
    public wage_increase: number;

    public constructor({ name, last_name, id, salary, wage_increase }: { name: string, last_name: string, id: string, salary: number, wage_increase: number }) {
        super({ name, last_name, id, salary });
        this.wage_increase = wage_increase;
    }
}