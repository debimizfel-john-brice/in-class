import fsPromises from "fs/promises"

// Log errors:
async function errorsLogger( msg:string, err:any ):Promise<void>{
    const now = new Date();
    let message = now.toLocaleString() + "\n";
    message += msg + "\n";
    if(typeof err === "string") message += err + "\n" // throw "Bla bla bla"
    if( err?.stack ) message += `Stack: ${err.stack} \n`;
    message += "----------------------\n";
    await fsPromises.appendFile("./src/1-assets/logs/errors.log", message );
}

// Log activities:
async function activityLogger( msg:string ):Promise<void>{
    const now = new Date();
    let message = now.toLocaleString() + "\n";
    message += msg + "\n";
    message += "----------------------\n";
    await fsPromises.appendFile("./src/1-assets/logs/activity.log", message );
}


export default {
    activityLogger,
    errorsLogger
}