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
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OutlineDefault: Story = {
  args: {
    label: 'Indoors',
    variant: 'outline',
    size: 'md',
    meta: '0:06 - 0:21',
    showChevron: true,
    icon: <AudioWaveIcon />,
  },
};

export const OutlineNoMeta: Story = {
  args: {
    label: 'Outdoors',
    variant: 'outline',
    size: 'md',
    icon: <AudioWaveIcon />,
  },
};

export const SolidDefault: Story = {
  args: {
    label: 'Indoors',
    variant: 'solid',
    size: 'md',
    meta: '0:06 - 0:21',
    showChevron: true,
    icon: <AudioWaveIcon />,
  },
};

export const Small: Story = {
  args: {
    label: 'Indoors',
    variant: 'outline',
    size: 'sm',
    meta: '0:06 - 0:21',
    showChevron: true,
    icon: <AudioWaveIcon />,
  },
};

export const Large: Story = {
  args: {
    label: 'Indoors',
    variant: 'outline',
    size: 'lg',
    meta: '0:06 - 0:21',
    showChevron: true,
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
