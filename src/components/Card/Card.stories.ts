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
    title: "Basic Card",
    subTitle: "Sub Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
};

export const MediaCards: Story = {
  args: {
    color: Colors.Primary,
    mediaURL: "https://ionicframework.com/docs/img/demos/card-media.png",
    title: "Media Card",
    subTitle: "Sub Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
};
