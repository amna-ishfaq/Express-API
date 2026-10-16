
import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Bano Qabil!");
});

app.get("/api/books", (req: Request, res: Response) => {
  res.json([
    { id: 1, title: "Clean Code", author: "Robert C. Martin" },
    { id: 2, title: "The Good Programmer", author: "Andrew Hunt" },
    { id: 3, title: "Atomic Habits", author: "James Clear" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
