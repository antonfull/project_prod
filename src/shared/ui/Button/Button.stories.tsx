import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import Button, { ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    children: "Text",
	theme: ButtonTheme.CLEAR
  },
};

export const Secondary: Story = {
  args: {
    children: "Text",
  },
};

export const Outline: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
  },
};
