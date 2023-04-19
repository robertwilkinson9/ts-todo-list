const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose
    .connect('mongodb://127.0.0.1:27017/todo', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
  console.log("Connection Successful!");

  const Todoschema = new Schema(
    {
        due: { type: Date },
        summary: { type: String },
        text: { type: String },
    },
  )

  var Todo = mongoose.model('Todo', Todoschema, 'todo');

  Todo.find({ })
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

  var testtodo = new Todo( { due : "2023-09-09T17:00.00Z", summary: "party!", text: "sing happy birthday!!" } )
});
//module.exports = mongoose.model('Todo', Todo)
//module.exports = Todo
