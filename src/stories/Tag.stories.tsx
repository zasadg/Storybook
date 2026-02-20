import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Tag, AudioWaveIcon } from './Tag';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'solid'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    split: {
      control: 'boolean',
    },
    rounded: {
      control: 'boolean',
    },
    showMeta: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: {
    label: 'Indoors',
    variant: 'outline',
    size: 'md',
    meta: '0:06 - 0:21',
    showChevron: true,
    split: false,
    icon: <AudioWaveIcon />,
  },
};

export const Solid: Story = {
  args: {
    label: 'Indoors',
    variant: 'solid',
    size: 'md',
    meta: '0:06 - 0:21',
    showChevron: true,
    split: false,
    icon: <AudioWaveIcon />,
  },
};

export const LabelOnly: Story = {
  args: {
    label: 'Nature',
    variant: 'outline',
    size: 'md',
  },
};
