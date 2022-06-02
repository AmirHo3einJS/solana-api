import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import "dotenv/config";
import Moralis from "moralis/node";
import { createServer } from "http";
import { handleError } from "./middlewares/error-handler.middleware";
import accountRoutes from "./routes/account.routes";
import nftRoutes from "./routes/nft.routes";

// info: instantiating express and http server
var app = express();
const server = createServer(app);

// info: using middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

// info: application routes
app.use("/api", [accountRoutes, nftRoutes]);

// info: error handler middleware
app.use(handleError);

// info: initializing moralis
const serverUrl = process.env.MORALIS_SERVER_URL;
const appId = process.env.MORALIS_APPLICATION_ID;
const masterKey = process.env.MORALIS_MASTER_KEY;
(async () => await Moralis.start({ appId, serverUrl, masterKey }))();

// info: initializing server
server.listen(process.env.PORT, () => {
  console.log(`Server started on ${process.env.PORT}`);
});
