import React from "react";
import {EditProps} from './interfaces';
import './edit.css';

const Edit = (props: EditProps) => {
  const [initDT, initSumm, initText, edit_id, setid, seteditmode, todos, updater] = [props.due, props.summary, props.text, props.edit_id, props.setid, props.seteditmode, props.todos, props.updater];

  const [due, setDuedate] = React.useState(initDT);
  const [summary, setSummary] = React.useState(initSumm);
  const [text, setText] = React.useState(initText);

  console.log("DUE is ", due, ", SUMMARY is ", summary, ",TEXT is ", text);

  const handleDuedate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuedate(event.target.value);
  };
  
  const handleSummary = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSummary(event.target.value);
    console.log("summary is ", summary);
  };
  
  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    console.log("text is ", text);
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    console.log("PERINT event.target ");
    console.log("event -> ", event);
    console.log("event.currentTarget -> ", event.currentTarget);
//    const due = (event.currentTarget.elements.namedItem('due')  as HTMLInputElement).value;
//    console.log("DUE -> ", due);
    const submit_value = (event.currentTarget.elements[3] as HTMLInputElement).value; // 4th element we want the value of the submit button
    console.log("SUBMIT_VALUE -> ", submit_value);
    if (submit_value === "cancel") {
      console.log("Edit handleSubmit CANCEL PROPS is ", JSON.stringify(props));
      setid("-1");
      seteditmode(false)
    } else {
      console.log("Edit handleSubmit SUBMIT PROPS is ", JSON.stringify(props));
      let _id = edit_id;
      console.log("DUE -> ", due);
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
	  <form onSubmit={handleSubmit}>
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
	  <button type="submit" value="submit">Add Todo Item</button>
          <button type="submit" value="cancel">Cancel</button>
	  </form>
    </div>
	  </>
  );
}

export default Edit;
