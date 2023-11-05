import express from "express";
import AppConfig from "./4-utils/app_config";
import productRouts from "./6-routes/product_route";
import employeeRouts from "./6-routes/employee_route";
import consoleLogger from "./3-middleware/console_logger";
import banProducts from "./3-middleware/ban_products";
import fileLogger from "./3-middleware/file_logger";
import catchAll from "./3-middleware/catch_all";
import routNotFound from "./3-middleware/rout_not_found";

// Create server object
const server = express();

// Create request body object
server.use(express.json());

// Create request logger
server.use(consoleLogger);
server.use(banProducts);
server.use(fileLogger);

// Routs:
server.use("/", productRouts);
server.use("/", employeeRouts);

// Not found handler
server.use("*", routNotFound);

// Error handler
server.use(catchAll);

// Run server
server.listen(AppConfig.port, () => console.log(`Server is running on port ${AppConfig.port}`));