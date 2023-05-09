import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

// Create an instance of the Express app
const app = express();

// Enable CORS for all requests
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Create a router to handle routes
const router = express.Router();

// Define a route that responds with a JSON object when a GET request is made to the root path
router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});


// Use the router to handle requests to the `/.netlify/functions/api` path
app.use(`/.netlify/functions/api`, router);

// Export the app and the serverless function
export const handler = serverless(app);
export default app;