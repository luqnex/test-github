import React from "react";

import { CustomHeader } from "./styled";

import { GoMarkGithub } from "react-icons/go";

export const Header = () => (
  <CustomHeader>
    <div className="container">
      <h1>
        github<span>Queries</span>
      </h1>
      <GoMarkGithub className="icon" />
    </div>
  </CustomHeader>
);
