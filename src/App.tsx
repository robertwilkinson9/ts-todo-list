import React, { useState, useEffect } from "react";
import Banner from './Banner';
import ListOrEditPage from './list_or_edit_page';
import './App.css';
import {TodoData, AppsProps} from './interfaces';

function App() {
  const [todos, setTodos] = useState<TodoData[]>([]);
  const [edit_due, setEditDue] = useState<string>("");
  const [edit_mode, setEditMode] = useState<boolean>(false);

  const get_todos = () => {
    const item = localStorage.getItem('todos');
    if (item) {
      const todos = JSON.parse(item);
      console.log(`TODO Is ${todos}`);
      console.log(todos);
      console.log(`first is `);
      console.log(todos[0]);
      setTodos(todos);
    }
  };

  const put_todos = (newtodos: TodoData[]) => {
    // we use the todos object in memory, and serialise to localstorage each time we update,
    // because we need them to be synchronised. We only read localstorage when we start up

    console.log("IN PUT_TODOS AND NEWTODOS ARE ");
    console.log(newtodos);
    setTodos(newtodos);
    localStorage.setItem('todos',JSON.stringify(newtodos));
  };

  console.log("before useEffect App and TODOS are ", JSON.stringify(todos));
  useEffect(() => {
      get_todos();
  }, []);
  console.log("after useEffect App and TODOS are ", JSON.stringify(todos));

  const add_todo = (newtodo: TodoData) => {
    console.log("ADD_TODO and newtodo is ", JSON.stringify(newtodo));
    put_todos([ ...todos, newtodo]);
  };

  const value_exists_in_object = (object: TodoData, dt: string) => {
    return object.due === dt;
  };

  const value_exists_in_object_list = (list_of_objects: TodoData[], dt :string) => {
    let matched = false;
    for (let i = 0; i<list_of_objects.length; i++) {
      console.log(`Checking ${i}`);
      if (value_exists_in_object(list_of_objects[i], dt)) {
        matched = true;
        break;
      }
    }
    return matched;
  }

  const onUpdate = (props: AppsProps) => {
    console.log("--> App onUpdate and PROPS are ", JSON.stringify(props));
    const todo = props.todo;
    
    if (value_exists_in_object_list(todos, todo.due)) {
      console.log("App onUpdate and NOT NEW TODO");
      console.log("App onUpdate and TODO is ", JSON.stringify(todo));
      const due = todo.due;
      const newtodos:TodoData[] = todos.filter(todo => {return todo.due !== due});
      console.log("App onUpdate -> newdos are ", JSON.stringify(newtodos));
      newtodos.push(todo);
      put_todos(newtodos);
    } else {
      console.log("App onUpdate and NEW TODO");
      const due = todo.due;
      const summary = todo.summary;
      const text = todo.text;
      add_todo({due: due, summary: summary, text: text});
    } 
    setEditMode(false);      
    console.log("App onUpdate at end of function TODOS are ", JSON.stringify(todos));
  };

  return (
    <div data-testid="appdiv">
      <Banner /> 
      <ListOrEditPage edit_due={edit_due} seteditdue={setEditDue} edit_mode={edit_mode} seteditmode={setEditMode} todos={todos} setter={put_todos} add_todo={add_todo} updater={onUpdate} getTodos={get_todos} />
    </div>
  );
}

export default App;
