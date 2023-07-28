import React from "react";

import { render, fireEvent, waitForElement } from "@testing-library/react";

import '@testing-library/jest-dom';

import {EditProps} from '../interfaces';
import Edit from '../edit';

function renderEditForm(props: Partial<EditProps> = {}) {
  const defaultProps: EditProps = {
    onDueChange() {
      console.log("Dummy onDueChange INVOKED");
      return;
    },

    onSummaryChange() {
      return;
    },

    onTextChange() {
      return;
    },

    onSubmit() {
      return;
    },
  };

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
    const editForm = await findByTestId("edit-form");

    expect(editForm).toHaveFormValues({
    });
  });

/*
      due: "",
      summary: "",
      text: ""

  test("should allow entering a due date", async () => {
    const onDueChange = jest.fn();
    const { findByTestId } = renderEditForm({ onDueChange });
    const due = await findByTestId("due");
    fireEvent.change(due, { target: { value: "2099-12-31T23:59" } });
    expect(onDueChange).toHaveBeenCalledWith("2099-12-31T23:59");
  });

*/

  test("should allow entering a due date", async () => {
    const onDueChange = jest.fn();
    const { findByTestId } = renderEditForm({ onDueChange });
    const due_date = await findByTestId("due");
/*
    console.log("DUE DATE IS ");
    console.log(due_date);
*/
    fireEvent.change(due_date, { target: { value: "2099-12-31T23:59" } });
    expect(onDueChange).toHaveBeenCalledTimes(1)
//    expect(onDueChange).toHaveBeenCalledWith("2099-12-31T23:59");
  });


/*
test("should allow entering a password", async () => {

  const onPasswordChange = jest.fn();

  const { findByTestId } = renderLoginForm({ onPasswordChange });

  const username = await findByTestId("password");


  fireEvent.change(username, { target: { value: "password" } });


  expect(onPasswordChange).toHaveBeenCalledWith("password");

});
*/

});
