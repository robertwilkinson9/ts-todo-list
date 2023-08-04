import React from 'react';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event'
import { render, queryAllByTestId } from "@testing-library/react";

import {todoListProps} from './interfaces'
import TodoList from '../todoList';
import TodoItem from '../todoItem';

function rendertodoList(props: Partial<todoListProps> = {}) {
  const defaultProps: todoListProps = {
    todos: []
  };

  return render(<TodoList {...defaultProps} {...props} />);
}

describe('test item contents', () => {
  test("a null list should have no children", async () => {
    const { findByTestId } = rendertodoList();

    const todoListtbody = await findByTestId("todo_list_tbody");
    expect(todoListtbody).toBeEmptyDOMElement();
  });

  test("should be able to pass a list of one todo item", async () => {
    const null_setter = (input) => {};
    const tditem = {due: "due3", summary: "summary3", text: "text3"};
    const todos = [tditem];
    const itemprops = {setter: null_setter, todos: todos, todo: tditem};

    const { findByTestId } = rendertodoList(itemprops);

    const todoListtbody = await findByTestId("todo_list_tbody");
    expect(todoListtbody).not.toBeEmptyDOMElement();

    const todoitem = await findByTestId("todoitem");
    expect(todoListtbody).toContainElement(todoitem);
  });

  test("should be able to pass a list of todo items", async () => {
    const dummy_list = [
      {due: "due1", summary: "summary1", text: "text1"},
      {due: "due2", summary: "summary2", text: "text2"}
    ];

    const null_setter = (input) => {};
    const tditem = {due: "due3", summary: "summary3", text: "text3"};
    const itemprops = {setter: null_setter, todos: dummy_list, todo: tditem};

    const { findByTestId } = rendertodoList(itemprops);

    const todoListtbody = await findByTestId("todo_list_tbody");
    expect(todoListtbody).not.toBeEmptyDOMElement();

    const todoitems = await queryAllByTestId(todoListtbody, "todoitem");
    expect(todoitems.length).toBe(2);
  });
});
