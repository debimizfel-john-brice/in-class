class SMS<T>{

    public phone_number: string;
    public message: T;

    public constructor(phone_number: string, message: T) {
        this.message = message;
        this.phone_number = phone_number;
    }

    public send() {
        console.log(`Send message: ${this.message} - To: ${this.phone_number}`);
    }
}