import React from 'react';
import { Tag, AudioWaveIcon } from './Tag';
import './sound-picker-bar.css';

export interface SoundItem {
    id: string;
    label: string;
    meta?: string;
}

export interface SoundPickerBarMobileProps {
    sounds?: SoundItem[];
    activeSoundId?: string;
    onSelect?: (id: string) => void;
    onCustomClick?: () => void;
    /** If true, shows a loading state with spinners. */
    isLoading?: boolean;
}

const LoadingIcon = () => (
    <svg className="loading-spinner" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10" stroke="#8E8E93" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const LoadingView = () => (
    <div className="sound-picker-bar-mobile is-loading">
        <div className="mobile-header">
            <span className="picker-label">PICK SOUND</span>
        </div>
        <div className="sound-content-wrapper">
            <div className="speaker-button">
                <SpeakerIcon />
            </div>
            <div className="loading-tag">
                <LoadingIcon />
            </div>
            <div className="sound-picker-divider" />
            <div className="loading-tag">
                <LoadingIcon />
            </div>
        </div>
    </div>
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

export const SoundPickerBarMobile = ({
    sounds = [],
    activeSoundId,
    onSelect,
    onCustomClick,
    isLoading = false,
}: SoundPickerBarMobileProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    if (isLoading) {
        return <LoadingView />;
    }

    const activeSound = sounds.find(s => s.id === activeSoundId) || sounds[0];

    const handleSelect = (id: string) => {
        onSelect?.(id);
        setIsDropdownOpen(false);
    };

    return (
        <div className="sound-picker-bar-mobile">
            <div className="mobile-header">
                <span className="picker-label">PICK SOUND</span>
            </div>

            <div className="sound-content-wrapper">
                <div className="speaker-button">
                    <SpeakerIcon />
                </div>

                <div className="sound-mobile-content">
                    <div className="dropdown-container">
                        <Tag
                            label={activeSound?.label || 'Select Sound'}
                            meta={activeSound?.meta}
                            variant="solid"
                            rounded
                            size="md"
                            showMeta={true}
                            icon={<CheckIcon />}
                            showChevron
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        />
                        {isDropdownOpen && (
                            <div className="sound-dropdown-menu">
                                {sounds.map((sound) => (
                                    <div
                                        key={sound.id}
                                        className={`sound-dropdown-item ${sound.id === activeSoundId ? 'is-active' : ''}`}
                                        onClick={() => handleSelect(sound.id)}
                                    >
                                        <span className="dropdown-label">{sound.label}</span>
                                        {sound.meta && <span className="dropdown-meta">{sound.meta}</span>}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
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
        </div>
    );
};
