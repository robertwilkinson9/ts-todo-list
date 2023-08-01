import React from "react";

import { render, fireEvent, waitForElement } from "@testing-library/react";

import '@testing-library/jest-dom';

import {EditProps} from '../interfaces';
import Edit from '../edit';

function renderEditForm(props: Partial<EditProps> = {}) {
  const defaultProps: EditProps = {
    handleChange() {
      console.log("Dummy handleChange INVOKED");
      return;
    },

/*
    onSummaryChange() {
      return;
    },

    onTextChange() {
      return;
    },
*/

    onSubmit() {
      return;
    },
  };

  
  console.log("Dummy defaultProps are ");
  console.log(defaultProps);
  console.log("Dummy props are ");
  console.log(props);

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
});
