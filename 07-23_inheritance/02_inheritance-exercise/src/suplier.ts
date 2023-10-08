class Suplier extends Person {
    public bank_account: number;

    public constructor({ name, last_name, id, bank_account }: { name: string, last_name: string, id: string, bank_account: number }) {
        super({ name, last_name, id });
        this.bank_account = bank_account;
    }
}