import type { Meta, StoryObj } from '@storybook/react';
import { CustomSoundModal } from './CustomSoundModal';
import { CustomSoundModalMobile } from './CustomSoundModalMobile';

const meta = {
    title: 'Components/CustomSoundModal',
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<any>;

export default meta;

export const Desktop: StoryObj<typeof CustomSoundModal> = {
    args: {
        isOpen: true,
    },
    render: (args) => <CustomSoundModal {...args} />
};

export const Mobile: StoryObj<typeof CustomSoundModalMobile> = {
    args: {
        isOpen: true,
        title: "A Perfectly Timed Adventure",
        artist: "Taylor Swift, Ed Sheeran, Billie Eilish, Drake",
    },
    render: (args) => <CustomSoundModalMobile {...args} />
};
