import React, { HTMLAttributes, ReactNode } from "react";

import { Button } from "./styled";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const CustomButton = ({ children, ...props }: ButtonProps) => (
  <Button {...props}>{children}</Button>
);
