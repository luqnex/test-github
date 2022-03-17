import React from "react";

import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { CustomButton } from ".";

describe("Custom button clicked", () => {
  it("should clicked button search", () => {
    const onClick = jest.fn();

    render(<CustomButton onClick={onClick}>Search</CustomButton>);

    userEvent.click(screen.getByText("Search"));

    expect(onClick).toHaveBeenCalled();
    expect(onClick).toBeCalledTimes(1);
  });
});
