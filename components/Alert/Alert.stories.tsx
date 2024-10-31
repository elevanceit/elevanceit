import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from ".";
import { BUTTON_VARIANTS } from "../../enums";

const meta: Meta<typeof Alert> = {
  title: "Alert",
  component: Alert,
  args: {
    variant: "primary",
    children: "Alert",
  },
  argTypes: {
    variant: {
      options: Object.values(BUTTON_VARIANTS),
      control: { type: "select" },
    },
  },
};

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => <Alert {...args} />,
};

export default meta;
