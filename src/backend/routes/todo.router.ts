// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Todo from "../models/todo";

// Global Config

export const todosRouter = express.Router();

todosRouter.use(express.json());

// GET

todosRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        
        const query = { _id: new ObjectId(id) };
        const todo = (await collections.todos.findOne(query)) as Todo;

        if (todo) {
            res.status(200).send(todo);
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});

// POST

todosRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newTodo = req.body as Todo;
        const result = await collections.todos.insertOne(newTodo);

        result
            ? res.status(201).send(`Successfully created a new todo with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new todo.");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

// PUT

todosRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedTodo: Todo = req.body as Todo;
        const query = { _id: new ObjectId(id) };
      
        const result = await collections.todos.updateOne(query, { $set: updatedTodo });

        result
            ? res.status(200).send(`Successfully updated todo with id ${id}`)
            : res.status(304).send(`Todo with id: ${id} not updated`);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

// DELETE

todosRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.todos.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed todo with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove todo with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Todo with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});
