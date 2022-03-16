import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Users } from ".";
import { UserContextProvider } from "../../context/Users";

describe("Render page User", () => {
  it("should render correctly component", () => {
    render(
      <UserContextProvider>
        <Users />
      </UserContextProvider>
    );

    expect(screen.getByText("Search")).toBeInTheDocument();
  });
});
