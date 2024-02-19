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
    onClick: () => {
      alert("Primary button clicked!");
    },
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
    color: Colors.Danger,
    size: "large",
    label: "Large Button",
  },
};

export const Small: Story = {
  args: {
    color: Colors.Warning,
    size: "small",
    label: "Small Button",
  },
};

export const Default: Story = {
  args: {
    color: Colors.Success,
    size: "default",
    label: "Default Button",
  },
};

export const Disabled: Story = {
  args: {
    color: Colors.Primary,
    size: "default",
    label: "Disabled Button",
    disabled: true,
  },
};
