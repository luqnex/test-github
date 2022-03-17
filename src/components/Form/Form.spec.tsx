import React from "react";

import { screen, render } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { Form } from ".";

describe("Form component", () => {
  it("should render form", () => {
    const submit = jest.fn((e) => e.preventDefault());

    render(<Form onSubmit={submit} />);

    userEvent.click(screen.getByTestId("search"));

    expect(submit).toHaveBeenCalled();
    expect(submit).toBeCalledTimes(1);
  });
});
