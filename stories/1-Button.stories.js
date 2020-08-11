import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../src/Atoms/Buttons/Button";
import Scaffold from "../src/Atoms/Buttons/Scaffold";

import { withA11y } from "@storybook/addon-a11y";

export default {
  title: "Button",
  component: Button,
  decorators: [withA11y],
};

export const BaseNativeButton = () => (
  <Button id="valid-default" label="Native Button" />
);
export const ButtonUsingSpans = () => (
  <Scaffold
    id="span-button"
    label="Button Msg"
    onClickAction={() => alert("Scaffold Click")}
  />
);
