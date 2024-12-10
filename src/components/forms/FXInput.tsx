"use client";
import React from "react";
import { Input } from "@nextui-org/input";

import { IInput } from "../../../types";

interface IProps extends IInput {}
const FXInput = ({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
  className,
}: IProps) => {
  return (
    <Input
      className={className}
      label={label}
      name={name}
      required={required}
      size={size}
      type={type}
      variant={variant}
    />
  );
};

export default FXInput;
