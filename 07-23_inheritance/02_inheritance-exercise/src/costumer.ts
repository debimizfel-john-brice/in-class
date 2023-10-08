class Costumer extends Person {
    public credit_card: number;

    public constructor({ name, last_name, id, credit_card }: { name: string, last_name: string, id: string, credit_card: number }) {
        super({ name, last_name, id });
        this.credit_card = credit_card;
    }
}