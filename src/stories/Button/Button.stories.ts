import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Index";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "More",
  },
};
export const Secondary: Story = {
  args: {
    color: "secondary",
    label: "More",
  },
};
export const Disabled: Story = {
  args: {
    color: "disabled",
    label: "More",
  },
};
