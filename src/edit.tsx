import React from "react";
import {EditProps} from './interfaces';
import './edit.css';

const Edit = (props: EditProps) => {
  console.log("Edit START PROPS are ", JSON.stringify(props));
  const [seteditmode, updater] = [props.seteditmode, props.updater];

  const initDT = (typeof props.todo !== "undefined" && typeof props.todo.due !== "undefined") ? props.todo.due : "";
  const initSumm = (typeof props.todo !== "undefined" && typeof props.todo.summary !== "undefined") ? props.todo.summary : "";
  const initText = (typeof props.todo !== "undefined" && typeof props.todo.text !== "undefined") ? props.todo.text : "";
  console.log("INITDT is ", initDT, ", INITSUMM is ", initSumm, ",INITTEXT is ", initText);

  const [due, setDuedate] = React.useState(initDT);
  const [summary, setSummary] = React.useState(initSumm);
  const [text, setText] = React.useState(initText);
  console.log("DUE is ", due, ", SUMMARY is ", summary, ",TEXT is ", text);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("handleChange CaLlEd wIt event.target.id of ")
    console.log(event.target.id);
    console.log("handleChange CaLlEd wIt event.target.value of ")
    console.log(event.target.value);
    if (event.target.id === "due") {
      console.log(`DUE iS ${event.target.value}`);
      setDuedate(event.target.value);
      console.log("due is ", due);
    }
    if (event.target.id === "summary") {
      setSummary(event.target.value);
      console.log("summary is ", summary);
    }
    if (event.target.id === "text") {
      setText(event.target.value);
      console.log("text is ", text);
    }
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const submit_value = (event.currentTarget.elements[3] as HTMLInputElement).value; // 4th element we want the value of the submit button
    console.log("SUBMIT_VALUE -> ", submit_value);
    console.log("handleSubmit PROPS is ", JSON.stringify(props));
    if (submit_value === "cancel") {
      console.log("Edit handleSubmit CANCEL PROPS is ", JSON.stringify(props));
      seteditmode(false)
    } else {
      console.log("Edit handleSubmit SUBMIT PROPS is ", JSON.stringify(props));
      console.log("DUE -> ", due);
      let newtodo = { due, summary, text };
      console.log("Edit handleSubmit NEWTODO is ", JSON.stringify(newtodo));
      let newTodos = props.todos.filter(todo => {return todo.due !== due});
      newTodos.push(newtodo);

      console.log("Edit handleSubmit NEWTODOS is ", JSON.stringify(newTodos));
      updater( { todos: newTodos, todo: newtodo} ); 
    }
  }
  return (
  <>
    <div className="edit">
	  <form data-testid="edit-form" onSubmit={handleSubmit}>
          <table><tbody>
           <tr><td><label htmlFor="due">Datetime</label></td>
           <td><input type="text" id="due" data-testid="due" value={due} onChange={handleChange}/></td></tr>
           <tr><td><label htmlFor="summary">Summary</label></td>
           <td><input type="text" id="summary" data-testid="summary" value={summary} onChange={handleChange}/></td></tr>
           <tr><td><label htmlFor="text">Text</label></td>
           <td><input type="text" id="text" data-testid="text" value={text} onChange={handleChange}/></td></tr>
          </tbody></table>
	  <button data-testid="edit_submit" type="submit" value="submit">Add Todo Item</button>
          <button data-testid="edit_cancel" type="submit" value="cancel">Cancel</button>
	  </form>
    </div>
  </>
  );
}

export default Edit;
