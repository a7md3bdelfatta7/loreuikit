import { Meta, StoryObj } from "@storybook/react";
import { Colors } from "../../shared";
import DateTime from "./DateTime";

const meta: Meta<typeof DateTime> = {
  title: "Design System/DateTime",
  component: DateTime,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicDateTime: Story = {
  args: {},
};
