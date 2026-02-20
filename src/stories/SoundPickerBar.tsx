import React from 'react';
import { Tag, AudioWaveIcon } from './Tag';
import './sound-picker-bar.css';

export interface SoundItem {
    id: string;
    label: string;
    meta?: string;
}

export interface SoundPickerBarProps {
    sounds: SoundItem[];
    activeSoundId?: string;
    onSelect?: (id: string) => void;
    onCustomClick?: () => void;
    /** Show metadata for sounds in the bar. Defaults to false. */
    showMeta?: boolean;
}

const SpeakerIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.58333 2.33333L4.08333 5.25H1.75V8.75H4.08333L7.58333 11.6667V2.33333Z" fill="white" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M10.5 4.08333C11.1667 4.91666 11.1667 6.41666 10.5 7.25" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M12.25 2.33333C13.4167 3.75 13.4167 6.25 12.25 7.66667" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
);

const CheckIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const SoundPickerBar = ({
    sounds = [],
    activeSoundId,
    onSelect,
    onCustomClick,
    showMeta = false,
}: SoundPickerBarProps) => {
    return (
        <div className="sound-picker-bar">
            <div className="sound-picker-header">
                <div className="speaker-button">
                    <SpeakerIcon />
                </div>
                <span className="picker-label">PICK SOUND</span>
            </div>

            <div className="sound-items">
                {sounds.map((sound) => {
                    const isActive = sound.id === activeSoundId;
                    return (
                        <Tag
                            key={sound.id}
                            label={sound.label}
                            meta={sound.meta}
                            variant={isActive ? 'solid' : 'outline'}
                            rounded
                            size="md"
                            showMeta={showMeta}
                            icon={isActive ? <CheckIcon /> : undefined}
                            onClick={() => onSelect?.(sound.id)}
                        />
                    );
                })}
            </div>

            <div className="sound-picker-divider" />

            <div className="sound-picker-footer">
                <Tag
                    label="Custom"
                    variant="outline"
                    rounded
                    size="md"
                    icon={<AudioWaveIcon />}
                    onClick={onCustomClick}
                />
            </div>
        </div>
    );
};
