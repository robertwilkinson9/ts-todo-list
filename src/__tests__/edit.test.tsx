import React from "react";

import { render, fireEvent, waitForElement } from "@testing-library/react";

import '@testing-library/jest-dom';

import {EditProps} from '../interfaces';
import Edit from '../edit';

function renderEditForm(props: Partial<EditProps> = {}) {
  const defaultProps: EditProps = {
    onDueChange() {
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

/*
      due: "",
      summary: "",
      text: ""
*/
  });
});
