import React from "react";
import {DisplayTodoProps} from './interfaces';
import './edit.css';

const Edit = (props: DisplayTodoProps) => {
  // const [todos, edit_id, setid, index, updater, seteditmode] = [props.todos, props.edit_id, props.setid, props.index, props.updater, props.seteditmode];
  const [todos, edit_id, setid, updater, seteditmode] = [props.todos, props.edit_id, props.setid, props.updater, props.seteditmode];
  console.log("EDIT edit_id is ", props.edit_id);
  console.log("Edit TODOs is ", JSON.stringify(props.todos));

  const todoToEdit = todos.filter((todo) => todo._id === edit_id );
  console.log("todoToEdit is ", JSON.stringify(todoToEdit));

  let todo = {};
  if (edit_id < 0) {
  //if (index < 0) {
  // new element
  console.log("length of todos is ", todos.length);
  //const last_index = todos.length - 1;
  //const last_todo = todos[last_index]
  //console.log("last id of todos is ", last_todo.id);
  console.log("ADDING new element to todos");
  } else {
  todo = todoToEdit[0];
  }

  let initDT=""
  let initSumm=""
  let initText=""
  if (todo) {
   console.log("and TODO is ", JSON.stringify(todo));
   initDT=todo.due
   initSumm=todo.summary
   initText=todo.text
  }
  console.log("initDT is ", initDT);
  console.log("initSumm is ", initSumm);
  console.log("initText is ", initText);
  
  const [due, setDuedate] = React.useState(initDT);
  const [summary, setSummary] = React.useState(initSumm);
  const [text, setText] = React.useState(initText);

  const handleDuedate = (event) => {
    setDuedate(event.target.value);
  };

  const handleSummary = (event) => {
    setSummary(event.target.value);
  };

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    console.log("Edit handleSubmit PROPS is ", JSON.stringify(props));
    console.log("Edit handleSubmit PROPS.TODOS is ", JSON.stringify(props.todos));
    event.preventDefault();
    let _id = edit_id;
    let newtodo = { _id: _id, due, summary, text };
    console.log("Edit handleSubmit NEWTODO is ", JSON.stringify(newtodo));
    let newTodos = props.todos.filter(todo => {return todo._id !== edit_id});
    newTodos.push(newtodo);
    // const newlist = {...props.todos, newtodo };
    console.log("Edit handleSubmit NEWTODOS is ", JSON.stringify(newTodos));
    updater( { todos: newTodos, todo: newtodo, edit_id: edit_id } ); 
  }

  const handleCancel = event => {
    event.preventDefault();
    console.log("Edit handleCancel PROPS is ", JSON.stringify(props));
    setid(-1);
    seteditmode(false)
  }

  return (
	  <>
    <div className="edit">
	  <form onSubmit={handleSubmit} onCancel={handleCancel}>
          <fieldset>
          <table><tbody>
          <tr><td>
	  <label htmlFor="due">Datetime</label></td><td><input type ="text" id="due" value={due} onChange={handleDuedate}/>
          </td></tr>
          <tr><td>
	  <label htmlFor="summary">Summary</label></td><td><input type ="text" id="summary" value={summary} onChange={handleSummary} />
          </td></tr>
          <tr><td>
	  <label htmlFor="text">Text</label></td><td><input type ="text" id="text" value={text} onChange={handleText} />
          </td></tr>
          </tbody></table>
          </fieldset>
	  <button type="submit">Add Todo Item</button>
          <button type="submit" onClick={handleCancel}>Cancel</button>
	  </form>
    </div>
	  </>
  );
}

export default Edit;
