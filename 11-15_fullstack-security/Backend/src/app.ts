import express from "express";
import expressFileUpload from "express-fileupload";
import appConfig from "./4-utils/app-config";
import productRoutes from "./6-routes/product-routes";
import authRoutes from "./6-routes/auth-routes";
import userRoutes from "./6-routes/user-routes";
import consoleLogger from "./3-middleware/console-logger";
import shabbatForbidden from "./3-middleware/shbbat-forbidden";
import fileLogger from "./3-middleware/file-logger";
import catchAll from "./3-middleware/catch-all";
import routeNotFound from "./3-middleware/route-not-found";
import cors from "cors";

// Create server object:
const server = express();

// Enablbe cors - Enabling only fo our front:
server.use(cors({origin: "http://localhost:3000"}));

// Create request body object if Form Data was sent:
server.use(expressFileUpload());

// Create request body object if JSON was sent:
server.use(express.json());

// Serving static files: ( http://localhost:4000/images/imageName.png )
server.use("/images", express.static("src/1-assets/images"));

// Register middleware for all routes:
server.use(consoleLogger);
server.use(shabbatForbidden);
server.use(fileLogger);


// Route requests:
server.use("/api", authRoutes);
server.use("/api/products", productRoutes );
server.use("/api/users", userRoutes );

// Route not found:
server.use("*", routeNotFound);

// Register catch-all middleware:
server.use(catchAll);

// Run server:
server.listen(appConfig.port, () => console.log("Listening on http://localhost:" + appConfig.port ) );

