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
          repos_url: "",
        }}
      />
    );

    expect(screen.getByText("teste")).toBeInTheDocument();
  });
});
