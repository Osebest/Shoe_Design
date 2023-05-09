import express from "express";
import serverless from "serverless-http";
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from "./routes/dalle.routes.js";

dotenv.config();

// Create an instance of the Express app
const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/.netlify/functions/api/dalle', dalleRoutes);

// Create a router to handle routes
const router = express.Router();
const router2 = express.Router();

// Define a route that responds with a JSON object when a GET request is made to the root path
router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

router2.get("/", (req, res) => {
  res.json({
    user: "user"
  })
})

// Use the router to handle requests to the `/.netlify/functions/api` path
app.use(`/.netlify/functions/api`, router);
app.use(`/.netlify/functions/api/user`, router2);

// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);