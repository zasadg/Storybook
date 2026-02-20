import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SoundPickerBar } from './SoundPickerBar';

const meta = {
    title: 'Components/SoundPickerBar',
    component: SoundPickerBar,
    parameters: {
        layout: 'centered',
    },
    args: {
        onSelect: (id: string) => console.log('Selected:', id),
        onCustomClick: () => console.log('Custom click'),
    },
    argTypes: {
        showMeta: { control: 'boolean' },
    },
} satisfies Meta<typeof SoundPickerBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        activeSoundId: '1',
        sounds: [
            { id: '1', label: 'Sound 1', meta: '0:06 - 0:21' },
            { id: '2', label: 'Sound 2', meta: '0:06 - 0:21' },
            { id: '3', label: 'Sound 3', meta: '0:06 - 0:21' },
            { id: '4', label: 'Sound 3', meta: '0:06 - 0:21' },
        ],
    },
    render: (args) => {
        const [activeId, setActiveId] = useState(args.activeSoundId);
        return (
            <SoundPickerBar
                {...args}
                activeSoundId={activeId}
                onSelect={(id) => {
                    setActiveId(id);
                    args.onSelect?.(id);
                }}
            />
        );
    },
};
