
import express, { Application, Request, Response } from "express";
import { logger } from "./middleware/logger";

const app: Application = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Home route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to my Express.js web server!");
});

// API endpoint
app.get("/api/books", (req: Request, res: Response) => {
  res.json([
    { id: 1, title: "Clean Code", author: "Robert C. Martin" },
    { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt" },
    { id: 3, title: "Atomic Habits", author: "James Clear" }
  ]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});