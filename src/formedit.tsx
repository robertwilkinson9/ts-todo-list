import React, { useState } from "react";
import './edit.css';

{/*
import React from "react";
*/}

const Edit = (props) => {
  const [todos, edit_id, setid, index, add_todo, updater, seteditmode] = [props.todos, props.edit_id, props.setid, props.index, props.add_todo, props.updater, props.seteditmode];
  console.log("EDIT edit_id is ", props.edit_id);
  console.log("Edit TODOs is ", JSON.stringify(props.todos));

  const todoToEdit = todos.filter((todo) => todo._id === edit_id );
  console.log("todoToEdit is ", JSON.stringify(todoToEdit));

  let todo = {};
  if (index < 0) {
  // new element
  console.log("length of todos is ", todos.length);
  const last_index = todos.length - 1;
  const last_todo = todos[last_index]
  console.log("last id of todos is ", last_todo.id);
  console.log("ADDING new element to todos");
  } else {
  todo = todoToEdit[0];
  }

  let initialValues = {
     due: "",
     summary: "",
     text: "",
  };

  if (todo) {
    initialValues = {
      due: todo.due,
      summary: todo.summary,
      text: todo.text,
    };
  }

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    updater( { edit_id: edit_id, due: values.due, summary: values.summary, text: values.text, todos: todos } )
  };

{ /*
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
*/ }

{ /*
  function getPropertyName(obj, expression) {
    var res = {};
    Object.keys(obj).map(k => { res[k] = () => k; });
    return expression(res)();
  }
*/ }

{ /*

//If anyone's looking for a TypeScript version of MarsRobot's answer, try this:

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

{/*
  export default function Form() {
  const Form = () => {
    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };

    return (
        <form>
          <input
            value={values.due}
            onChange={handleInputChange}
            name="due"
            label="Due date"
          />
          <input
            value={values.summary}
            onChange={handleInputChange}
            name="summary"
            label="Summary"
          />
          <input
            value={values.text}
            onChange={handleInputChange}
            name="text"
            label="Text"
          />
          <button type="submit"> Submit </button>
        </form>
  );
}

 const handleSubmit = event => {
    console.log("Edit handleSubmit PROPS is ", JSON.stringify(props));
    console.log("Edit handleSubmit PROPS.TODOS is ", JSON.stringify(props.todos));
    event.preventDefault();
    const newtodo = { due, summary, text };
    add_todo(newtodo);
    let newTodos = props.todos;
    newTodos.push(newtodo);
    console.log("Edit handleSubmit NEWLIST is ", JSON.stringify(newTodos));
//    updater(newTodos); 
    setid(-1);
    seteditmode(false)
  }

*/}

  const handleCancel = event => {
    event.preventDefault();
    console.log("Edit handleCancel PROPS is ", JSON.stringify(props));
    setid(-1);
    seteditmode(false)
  }

  return (
	  <>
    <div className="edit">
        <form>
          <input
            value={values.due}
            onChange={handleInputChange}
            name="due"
            label="Due date"
          />
          <input
            value={values.summary}
            onChange={handleInputChange}
            name="summary"
            label="Summary"
          />
          <input
            value={values.text}
            onChange={handleInputChange}
            name="text"
            label="Text"
          />
          <button type="submit"> Submit </button>
        </form>
    </div>
	  </>
  );
}

{ /*
    <div className="edit">
        </form>
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
*/ }

export default Edit;
