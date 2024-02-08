import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";
import Colors from "../../shared/enums/Colors.enum";

const meta: Meta<typeof Card> = {
  title: "Design System/Cards",
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: "radio",
      options: Colors,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicCards: Story = {
  args: {
    color: Colors.Danger,
    mediaURL: "",
  },
};

export const MediaCards: Story = {
  args: {
    color: Colors.Primary,
    mediaURL: "https://ionicframework.com/docs/img/demos/card-media.png",
  },
};
