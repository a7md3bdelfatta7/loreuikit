import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import Colors from "../../shared/enums/Colors.enum";

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: "inline-radio",
      options: Colors,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: Colors.Primary,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    color: Colors.Secondary,
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Large Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Small Button",
  },
};

export const Default: Story = {
  args: {
    size: "default",
    label: "Default Button",
  },
};
