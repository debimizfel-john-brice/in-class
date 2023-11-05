abstract class StatusModel{
    public status: number;
    public message: string;

    constructor(status: number, message: string){
        this.status = status;
        this.message = message;
    }
}

export class RouteNotFound extends StatusModel{
    public constructor(route: string){
        super(404, `Route ${route} not found`);
    };
}

export class ResourceNotFound extends StatusModel{
    public constructor(id: number){
        super(404, `Resource with id ${id} not found`);
    };
}

export class ValidationError extends StatusModel{
    public constructor(message:string){
        super(400, message);
    };
}