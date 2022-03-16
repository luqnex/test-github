import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from ".";

import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Form component", () => {
  it("should render form", () => {
    const submit = jest.fn((e) => e.preventDefault());

    render(<Form onSubmit={submit} />);

    userEvent.click(screen.getByTestId("search"));

    expect(submit).toHaveBeenCalled();
    expect(submit).toBeCalledTimes(1);
  });

  it("should axios", () => {
    const data = mockedAxios.get.mockResolvedValue(() =>
      Promise.resolve({ data: { id: 1, login: "luqnex" } })
    );

    console.log(data);

    // expect(axios.get).toHaveBeenCalled();
  });
});
