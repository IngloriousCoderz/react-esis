import React from "react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    size: { control: "select" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Click me!",
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  ...Secondary.args,
  primary: true,
};

export const Large = Template.bind({});
Large.args = {
  ...Secondary.args,
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  ...Secondary.args,
  size: "small",
};
