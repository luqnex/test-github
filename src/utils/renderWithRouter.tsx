import { ReactElement } from "react";

import { BrowserRouter, MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";

export const renderWithRouter = (ui: ReactElement) => {
  return render(ui, {
    wrapper: BrowserRouter,
  });
};
