import React from 'react';
import { Tag, AudioWaveIcon } from './Tag';
import './sound-picker-bar.css';

export interface SoundItem {
    id: string;
    label: string;
    meta?: string;
}

export interface SoundPickerBarProps {
    sounds?: SoundItem[];
    activeSoundId?: string;
    onSelect?: (id: string) => void;
    onCustomClick?: () => void;
    /** Show metadata for sounds in the bar. Defaults to false. */
    showMeta?: boolean;
    /** If true, shows a loading state with spinners. */
    isLoading?: boolean;
}

const LoadingIcon = () => (
    <svg className="loading-spinner" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10" stroke="#8E8E93" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const SpeakerIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.33334 2.66666L4 5.33333H2V10.6667H4L7.33334 13.3333V2.66666Z" fill="white" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M10 5.33334C11.1046 6.43791 11.1046 8.22877 10 9.33334" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M12 3.33334C14.2091 5.54248 14.2091 9.1242 12 11.3333" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
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
    isLoading = false,
}: SoundPickerBarProps) => {
    return (
        <div className="sound-picker-bar">
            <div className="sound-picker-header">
                <div className="speaker-button">
                    <SpeakerIcon />
                </div>
                <span className="picker-label">PICK SOUND</span>
            </div>

            {isLoading ? (
                <div className="sound-items-loading">
                    <div className="loading-tag">
                        <LoadingIcon />
                    </div>
                </div>
            ) : (
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
            )}

            <div className="sound-picker-divider" />

            <div className="sound-picker-footer">
                {isLoading ? (
                    <div className="loading-tag">
                        <LoadingIcon />
                    </div>
                ) : (
                    <Tag
                        label="Custom"
                        variant="outline"
                        rounded
                        size="md"
                        icon={<AudioWaveIcon />}
                        onClick={onCustomClick}
                    />
                )}
            </div>
        </div>
    );
};
