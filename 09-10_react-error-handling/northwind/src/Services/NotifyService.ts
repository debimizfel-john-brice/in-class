import { Store } from 'react-notifications-component';

class NotifyService {

    public success(message: string) {
        Store.addNotification({
            title: "Success!",
            message: message,
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
    }



    public error(error: any): void {
        const message = this.extractMessage(error);
        Store.addNotification({
            title: "Error!",
            message: message,
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
    }

    private extractMessage(error: any): string {
        if (typeof error === 'string') return error;

        if (typeof error.response?.data === 'string') return error.response.data;

        if (Array.isArray(error.response?.data)) return error.response.data[0];

        if (typeof error.message === 'string') return error.message;

        return "Something went wrong";

    }



}

const notifyService = new NotifyService();
export default notifyService;