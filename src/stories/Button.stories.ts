import type { Meta, StoryObj } from "@storybook/react";

import Button from "@components/generics/Button.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Generics/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Button",
    cta: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    cta: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    cta: "tertiary",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    label: "Button",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    label: "Button",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    label: "Button",
    size: "lg",
  },
};

export const Flex: Story = {
  args: {
    label: "Button",
    flex: true,
  },
  parameters: { layout: "padded" },
};
