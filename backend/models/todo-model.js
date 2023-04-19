const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Todoschema = new Schema(
    {
        due: { type: Date },
        summary: { type: String },
        text: { type: String },
    },
)

var Todo = mongoose.model('Todo', Todoschema, 'todo');

/*
  Todo.find({ })
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });
*/

//module.exports = mongoose.model('Todo', Todo)
module.exports = Todo
