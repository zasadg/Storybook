import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SoundPickerBar } from './SoundPickerBar';
import { SoundPickerBarMobile } from './SoundPickerBarMobile';

const meta = {
    title: 'Components/SoundPickerBar',
    parameters: {
        layout: 'centered',
    },
    args: {
        onSelect: (id: string) => console.log('Selected:', id),
        onCustomClick: () => console.log('Custom click'),
    },
    argTypes: {
        isLoading: { control: 'boolean' },
    },
} satisfies Meta<any>;

export default meta;

export const Desktop: StoryObj<typeof SoundPickerBar> = {
    args: {
        activeSoundId: '1',
        isLoading: false,
        showMeta: false,
        sounds: [
            { id: '1', label: 'Sound 1', meta: '0:06 - 0:21' },
            { id: '2', label: 'Sound 2', meta: '0:06 - 0:21' },
            { id: '3', label: 'Sound 3', meta: '0:06 - 0:21' },
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

export const Mobile: StoryObj<typeof SoundPickerBarMobile> = {
    args: {
        activeSoundId: '1',
        isLoading: false,
        sounds: [
            { id: '1', label: 'Sound 1', meta: '0:06 - 0:21' },
            { id: '2', label: 'Sound 2', meta: '0:21 - 0:36' },
            { id: '3', label: 'Sound 3', meta: '0:36 - 0:51' },
        ],
    },
    render: (args) => {
        const [activeId, setActiveId] = useState(args.activeSoundId);
        return (
            <SoundPickerBarMobile
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
