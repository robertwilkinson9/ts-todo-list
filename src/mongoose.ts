import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface ITodo {
  due: Datetime;
  summary: string;
  text: string;
}

// 2. Create a Schema corresponding to the document interface.
const todoSchema = new Schema<ITodo>({
  due: { type: Datetime, required: true },
  summary: { type: String, required: true },
  text: { type: String, required: true },
});

// 3. Create a Model.
const Todo = model<ITodo>('Todo', todoSchema);

run().catch(err => console.log(err));

async function run() {
  // 4. Connect to MongoDB
  await connect('mongodb://127.0.0.1:27017/todo');

  const todo = new Todo({
    due: 
    summary: 'Bill',
    text: 'bill@initech.com',
  });
  await todo.save();

  console.log(todo.text); // 'bill@initech.com'
}
