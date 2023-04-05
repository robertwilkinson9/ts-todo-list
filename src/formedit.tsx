import React, { useState } from "react";
import {FormEditProps} from './interfaces';
import './edit.css';

const Edit = (props: FormEditProps) => {
  const [todos, edit_id, setid, index, add_todo, updater, seteditmode] = [props.todos, props.edit_id, props.setid, props.index, props.add_todo, props.updater, props.seteditmode];
  console.log("EDIT edit_id is ", props.edit_id);
  console.log("Edit TODOs is ", JSON.stringify(props.todos));

  const todoToEdit = todos.filter((todo) => todo._id === edit_id );
  console.log("todoToEdit is ", JSON.stringify(todoToEdit));

    let initialValues = {
     due: "",
     summary: "",
     text: "",
    };
  if (index === "-1") {
  // new element
  console.log("length of todos is ", todos.length);
  const last_index = todos.length - 1;
  const last_todo = todos[last_index]
  console.log("last id of todos is ", last_todo._id);
  console.log("ADDING new element to todos");
  } else {
    const todo = todoToEdit[0];
    initialValues = {
      due: todo.due,
      summary: todo.summary,
      text: todo.text,
    };
  }

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    updater( { edit_id: edit_id, todo: {due: values.due, summary: values.summary, text: values.text}, todos: todos } )
  };

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
      let newtodo = { _id: _id, due: values.due, summary: values.summary, text: values.text };
      console.log("Edit handleSubmit NEWTODO is ", JSON.stringify(newtodo));
      let newTodos = props.todos.filter(todo => {return todo._id !== edit_id});
      newTodos.push(newtodo);
      // const newlist = {...props.todos, newtodo };
      console.log("Edit handleSubmit NEWTODOS is ", JSON.stringify(newTodos));
      updater( { todos: newTodos, todo: newtodo, edit_id: edit_id } );
    }
  }

{ /*
  const handleCancel = event => {
    event.preventDefault();
    console.log("Edit handleCancel PROPS is ", JSON.stringify(props));
    setid(-1);
    seteditmode(false)
  }
*/ }

  return (
	  <>
    <div className="edit">
        <form>
          <label htmlFor="due">Due datetime</label>
          <input
            value={values.due}
            onChange={handleInputChange}
            name="due"
          />
          <label htmlFor="summary">Summary</label>
          <input
            value={values.summary}
            onChange={handleInputChange}
            name="summary"
          />
          <label htmlFor="text">Text</label>
          <input
            value={values.text}
            onChange={handleInputChange}
            name="text"
          />
          <button type="submit" value="submit"> Submit </button>
        </form>
    </div>
	  </>
  );
}

export default Edit;
