import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitForElement } from "@testing-library/react";

import {todoItemProps} from './interfaces'
import TodoItem from '../todoItem';

function rendertodoItem(props: Partial<todoItemProps> = {}) {
  const defaultProps: todoItemProps = {
    todo: {due: "", summary: "", text: ""},
    DeleteTodo() {
      return;
    },
    UpdateEditMode() {
      return;
    },
  };
  return render(<table><TodoItem {...defaultProps} {...props} /></table>);
}

test("should display a blank item", async () => {
  const { findByTestId } = rendertodoItem();
  const loginForm = await findByTestId("todoitem");
  expect(loginForm).toHaveFormValues({
    due: "",
    summary: "",
    text: ""
  });
});
