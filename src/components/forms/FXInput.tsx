"use client";
import React from "react";
import { IInput } from "../../../types";
import { Input } from "@nextui-org/input";

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
      variant={variant}
      size={size}
      required={required}
      label={label}
      type={type}
      name={name}
    />
  );
};

export default FXInput;
