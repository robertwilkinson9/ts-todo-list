import React from 'react';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event'
import { render, screen, fireEvent, waitForElement } from "@testing-library/react";

import {todoItemProps} from './interfaces'
import TodoItem from '../todoItem';

function rendertodoItem(props: Partial<todoItemProps> = {}) {
  const defaultProps: todoItemProps = {
    todo: {due: "", summary: "", text: ""},
  };

  return render(<table><tbody><TodoItem {...defaultProps} {...props} /></tbody></table>);
}

describe('test item contents', () => {
  test("should default to an blank item", async () => {
    const { findByTestId } = rendertodoItem();

    const todoItemdue = await findByTestId("todoitem_due");
    expect(todoItemdue).not.toHaveTextContent();

    const todoItemsummary = await findByTestId("todoitem_summary");
    expect(todoItemsummary).not.toHaveTextContent();

    const todoItemtext = await findByTestId("todoitem_text");
    expect(todoItemtext).not.toHaveTextContent();
  });

  test("should be able to set table cells via todo", async () => {
    const tditem = {due: "due1", summary: "summary1", text: "text1"};
//    const todos = [tditem];
//    const itemprops = {todos: todos, todo: tditem};
    const itemprops = {todo: tditem};

    const { findByTestId } = rendertodoItem(itemprops);

    const todoItemdue = await findByTestId("todoitem_due");
    expect(todoItemdue).toHaveTextContent("due1");

    const todoItemsummary = await findByTestId("todoitem_summary");
    expect(todoItemsummary).toHaveTextContent("summary1");

    const todoItemtext = await findByTestId("todoitem_text");
    expect(todoItemtext).toHaveTextContent("text1");
  });

  test("should be able to delete todo item", async () => {
    const null_setter = (input) => {};
    const tditem = {due: "due2", summary: "summary2", text: "text2"};
    const todos = [tditem];
    const itemprops = {setter: null_setter, todos: todos, todo: tditem};

    const { findByTestId } = rendertodoItem(itemprops);

    const todoItemdelete = await findByTestId("todoitem_delete");
    await userEvent.click(todoItemdelete);

    const todoItemdue = await findByTestId("todoitem_due");
    expect(todoItemdue).not.toHaveTextContent();

    const todoItemsummary = await findByTestId("todoitem_summary");
    expect(todoItemsummary).not.toHaveTextContent();

    const todoItemtext = await findByTestId("todoitem_text");
    expect(todoItemtext).not.toHaveTextContent();
  });
});
