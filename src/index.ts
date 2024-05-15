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

/**
 * Server Activation
 */