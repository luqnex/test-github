import React from "react";

import { screen } from "@testing-library/react";
import { Card } from ".";
import { renderWithRouter } from "../../utils/renderWithRouter";

describe("Card component", () => {
  it("should render correctly card", () => {
    renderWithRouter(
      <Card
        user={{
          avatar_url: "",
          bio: "teste",
          login: "teste-login",
          name: "fake 1",
          public_repos: 24,
          repos_url: "https://github/teste",
        }}
      />
    );

    expect(screen.getByText("teste")).toBeInTheDocument();
    expect(screen.getByText("fake 1")).toBeInTheDocument();
    expect(screen.getByText(/24/)).toBeInTheDocument();
  });
});
