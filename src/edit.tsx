import React from "react";
import {EditProps} from './interfaces';
import './edit.css';

const Edit = (props: EditProps) => {
  const [todos, edit_id, setid, updater, seteditmode] = [props.todos, props.edit_id, props.setid, props.updater, props.seteditmode];
  console.log("EDIT edit_id is ", props.edit_id);
  console.log("Edit TODOs is ", JSON.stringify(props.todos));

  const todoToEdit = todos.filter((todo) => todo._id === edit_id );
  console.log("todoToEdit is ", JSON.stringify(todoToEdit));

  let initDT=""
  let initSumm=""
  let initText=""
  if (edit_id === "-1") {
  // new element
    console.log("length of todos is ", todos.length);
    console.log("ADDING new element to todos");
  } else {
    const todo = todoToEdit[0];
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

  const handleDuedate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuedate(event.target.value);
  };

  const handleSummary = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSummary(event.target.value);
  };

  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("VALUE is " + event.target.value);
    if (event.target.value === "cancel") {
      event.preventDefault();
      console.log("Edit handleCancel PROPS is ", JSON.stringify(props));
      setid("-1");
      seteditmode(false)
    } else {
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
  }

  return (
	  <>
    <div className="edit">
	  <form>
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
	  <button type="submit" value="submit">Add Todo Item</button>
          <button type="submit" value="cancel">Cancel</button>
	  </form>
    </div>
	  </>
  );
}

export default Edit;
