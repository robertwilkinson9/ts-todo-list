const Todo = require('../models/todo-model')

createTodo = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a todo',
        })
    }

    const todo = new Todo(body)

    if (!todo) {
        return res.status(400).json({ success: false, error: err })
    }

    todo
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: todo._id,
                message: 'Todo created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Todo not created!',
            })
        })
}

String.prototype.toObjectId = function() {
  var ObjectId = (require('mongoose').Types.ObjectId);
  return new ObjectId(this.toString());
};

{ /*


If anyone's looking for a TypeScript version of MarsRobot's answer, try this:

function nameof<T>(obj: T, expression: (x: { [Property in keyof T]: () => string }) => () => string): string
{
    const res: { [Property in keyof T]: () => string } = {} as { [Property in keyof T]: () => string };

    Object.keys(obj).map(k => res[k as keyof T] = () => k);

    return expression(res)();
}

Usage:

const obj = {
    property1: 'Jim',
    property2: 'Bloggs',
    property3: 'Bloggs',
    method: () => 'a string',
    child: { property4: 'child1' }
};

const test1 = nameof(obj, x => x.property1);
const test2 = nameof(obj, x => x.property2);
const test3 = nameof(obj, x => x.method);
const test4 = nameof(obj.child, x => x.property4);

console.log(test1);    // -> 'property1'
console.log(test2);    // -> 'property2'
console.log(test3);    // -> 'method'
console.log(test4);    // -> 'property4'

*/ }


updateTodo = async (req, res) => {
    const body = req.body

    console.log("body is ");
    console.log(body);

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    const req_params_id = req.params.id;
    console.log("req_params_id is ");
    console.log(req_params_id);
    const object_params_id = req_params_id.toObjectId();
    console.log("object_params_id is ");
    console.log(object_params_id);

    let mydata = {};
    filter = { _id: object_params_id };
    await Todo.findOneAndUpdate(filter, body, {new: true})
      .then((result) => {
        mydata=result;
      })
      .catch((err) => {
       console.log(err);
      });
    console.log("mydata is ");
    console.log(mydata);
    console.log("mydata.due is ");
    console.log(mydata.due);
    console.log("mydata.summary is ");
    console.log(mydata.summary);
    console.log("mydata.text is ");
    console.log(mydata.text);

    return res.status(200).json({ success: true, data: mydata })
}

deleteTodo = async (req, res) => {
   console.log("toDelete.id is ");
   console.log(req.params.id);
   const toDelete = await Todo.findOneAndDelete({ _id: req.params.id })
   if (!toDelete) {
     return res
     .status(404)
     .json({ success: false, error: `Todo not found` })
   }

   return res.status(200).json({ success: true, data: toDelete })
}

getTodoById = async (req, res) => {
    console.log("getTodoById.id is ");
    console.log(req.params.id);
    const todo = await Todo.findOne({ _id: req.params.id } )
    console.log("getTodoById.length is ");
    console.log(getTodoById.length);

    if (!todo) {
      return res
      .status(404)
      .json({ success: false, error: `Todo not found` })
    }
    return res.status(200).json({ success: true, data: todo })
}

getTodos = async (req, res) => {

    const todos = await Todo.find( { } );
    console.log("todos.length is ");
    console.log(todos.length);
    console.log("todos[0].summary is ");
    console.log(todos[0].summary);
    if (!todos.length) {
        return res
            .status(404)
            .json({ success: false, error: `No Todos found` })
    }
    return res.status(200).json({ success: true, data: todos })
}

module.exports = {
    createTodo,
    updateTodo,
    deleteTodo,
    getTodos,
    getTodoById,
}
