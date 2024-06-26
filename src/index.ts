/**
 * Required External Modules
 */
// importing the project dependencies I installed earlier and loading any environmental variables from the local .env file using the dotenv.config() method.

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */
//Checking if Node.js loaded the environment variable PORT into process.env.
//If so, parse its value as a number type and create an instance of an Express application; otherwise, exit the application.

if (!process.env.PORT) { 
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();


/**
 *  App Configuration
 */
// Mount the middleware functions form the packages that we are importing into this entry point module.
// - helmet is collection of 14 small middleware functions that set HTTP headers.
//   - Mounting helmet() does not include all of these middleware functions but provides us with sensible defaults such as
//     DNS Prefetch Control, Framequard, Hide Powered-By, HSTS, IE No Open, Dont Sniff Mimetype and XSS Filter.
// - By mounting cors(), we enable all CORS requests.
// - With express.json(), we parse the incoming requests with JSON payloads, which populates the request object with new body object containing the parsed data.

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */
// Creating an Express server

app.listen(PORT, () => { 
    console.log(`Listening on port ${PORT}`);
});
