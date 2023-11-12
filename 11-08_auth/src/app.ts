import express from "express";
import AppConfig from "./4-utils/app_config";
import productRoutes from "./6-routes/product_route";
import employeeRoutes from "./6-routes/employee_route";
import authRoutes from "./6-routes/auth_route";
import consoleLogger from "./3-middleware/console_logger";
import banProducts from "./3-middleware/ban_products";
import fileLogger from "./3-middleware/file_logger";
import catchAll from "./3-middleware/catch_all";
import routNotFound from "./3-middleware/rout_not_found";
import verifyLoggedin from "./3-middleware/verify_loggedin";

// Create server object
const server = express();

// Create request body object
server.use(express.json());

// Create request logger
server.use(consoleLogger);
server.use(banProducts);
server.use(fileLogger);
server.use(verifyLoggedin);

// Routs:
server.use("/api/products", productRoutes);
server.use("/api/employees", employeeRoutes);
server.use("/api", authRoutes);

// Not found handler
server.use("*", routNotFound);

// Error handler
server.use(catchAll);

// Run server
server.listen(AppConfig.port, () => console.log(`Server is running on port ${AppConfig.port}`));