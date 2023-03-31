import express from "express";
import { connectToDatabase } from "./services/database.service"
import { todosRouter } from "./routes/todos.router";

const app = express();
const port = 8080; // default port to listen

connectToDatabase()
    .then(() => {
        app.use("/todos", todosRouter);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });

/*
// ** TODO ** Replace this code with a call to your games router class to handle all calls to /games endpoint
app.get("/", (req, res) => {
    res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);

    // ** TODO ** Call to Game Service to initiate connection
});
*/