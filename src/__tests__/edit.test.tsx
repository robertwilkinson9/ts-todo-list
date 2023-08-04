import React from "react";

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event'
import { render, screen, fireEvent, waitForElement } from "@testing-library/react";

import {EditProps} from '../interfaces';
import Edit from '../edit';

function renderEditForm(props: Partial<EditProps> = {}) {
  const defaultProps: EditProps = {};
  
  return render(<Edit {...defaultProps} {...props} />);
}

describe("<Edit />", () => {
  test("should display a blank edit form", async () => {
    const { findByTestId } = renderEditForm();
    const editForm = await findByTestId("edit-form");

    expect(editForm).toHaveFormValues({
    });
  });

  const empty_todo = {
    due: "",
    summary: "",
    text: ""
  };

  test("should display an empty edit form", async () => {
    const { findByTestId } = renderEditForm({todo: empty_todo});
    const editForm = await findByTestId("edit-form");

    expect(editForm).toHaveFormValues({
    });
  });

  const non_empty_todo = {
    due: "2099-12-31T23:59",
    summary: "Party!",
    text: "End Of The Century Party!"
  };

  test("should display a party edit form", async () => {
    const { findByTestId } = renderEditForm({todo: non_empty_todo});

    const input_due = await findByTestId("due");
    expect(input_due).toHaveDisplayValue(non_empty_todo.due);

    const input_summary = await findByTestId("summary");
    expect(input_summary).toHaveDisplayValue(non_empty_todo.summary);

    const input_text = await findByTestId("text");
    expect(input_text).toHaveDisplayValue(non_empty_todo.text);
  });

  test("should be able to submit a party edit form", async () => {
    const null_updater = (input) => {};

    const { findByTestId } = renderEditForm({todo: non_empty_todo, todos: [], updater: null_updater});

    const input_due = await findByTestId("due");
    expect(input_due).toHaveDisplayValue(non_empty_todo.due);

    const input_summary = await findByTestId("summary");
    expect(input_summary).toHaveDisplayValue(non_empty_todo.summary);

    const input_text = await findByTestId("text");
    expect(input_text).toHaveDisplayValue(non_empty_todo.text);

    const editSubmit = await findByTestId("edit_submit");
    await userEvent.click(editSubmit);
  });
});
