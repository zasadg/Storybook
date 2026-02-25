import React, { useState, useRef, useEffect } from 'react';
import './custom-sound-modal.css';

export interface CustomSoundModalMobileProps {
    isOpen?: boolean;
    onClose?: () => void;
    onSave?: (start: string, end: string) => void;
    title?: string;
    artist?: string;
    albumArt?: string;
}

const SpeakerIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.33334 2.66666L4 5.33333H2V10.6667H4L7.33334 13.3333V2.66666Z" fill="white" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M10 5.33334C11.1046 6.43791 11.1046 8.22877 10 9.33334" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M12 3.33334C14.2091 5.54248 14.2091 9.1242 12 11.3333" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
);

export const CustomSoundModalMobile = ({
    isOpen = true,
    onClose,
    onSave,
    title = "A Perfectly Timed Adventure",
    artist = "Taylor Swift, Ed Sheeran, Billie Eilish, Drake",
    albumArt = "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=100&h=100&fit=crop"
}: CustomSoundModalMobileProps) => {
    const [selectorPos, setSelectorPos] = useState(20);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const selectorWidth = 35; // Wider for mobile as per screenshot

    const handleMouseDown = () => setIsDragging(true);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging || !containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            let newPos = (x / rect.width) * 100 - (selectorWidth / 2);
            newPos = Math.max(0, Math.min(newPos, 100 - selectorWidth));
            setSelectorPos(newPos);
        };
        const handleMouseUp = () => setIsDragging(false);
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    if (!isOpen) return null;

    const bars = Array.from({ length: 40 }, (_, i) => {
        const height = 20 + Math.sin(i * 0.5) * 40 + Math.random() * 20;
        return <div key={i} className="waveform-bar" style={{ height: `${height}%` }} />;
    });

    return (
        <div className="modal-overlay">
            <div className="custom-sound-modal-mobile">
                <div className="modal-header">
                    <h2>Custom sound</h2>
                    <button className="close-button" onClick={onClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <div className="modal-content">
                    <div className="track-info">
                        <img src={albumArt} alt="Album Art" className="album-art" />
                        <div className="track-text">
                            <span className="track-title">{title}</span>
                            <span className="track-artist">{artist}</span>
                        </div>
                    </div>

                    <p className="drag-instruction">Drag to select a 15-second clip</p>

                    <div className="waveform-container" ref={containerRef}>
                        <div className="waveform-viz">
                            {bars}
                        </div>
                        <div
                            className="waveform-selector"
                            style={{
                                left: `${selectorPos}%`,
                                width: `${selectorWidth}%`
                            }}
                            onMouseDown={handleMouseDown}
                        >
                            <div className="grab-handle">
                                <div className="grab-dot" />
                                <div className="grab-dot" />
                                <div className="grab-dot" />
                                <div className="grab-dot" />
                                <div className="grab-dot" />
                                <div className="grab-dot" />
                            </div>
                        </div>
                    </div>

                    <div className="controls-row">
                        <div className="speaker-button" style={{ width: '36px', height: '36px' }}>
                            <SpeakerIcon />
                        </div>

                        <div className="time-inputs">
                            <div className="time-input-group">
                                <span className="time-label">Start</span>
                                <input type="text" className="time-input" value="00:12" readOnly />
                            </div>
                            <div className="time-input-group">
                                <span className="time-label">End</span>
                                <input type="text" className="time-input" value="0:17" readOnly />
                            </div>
                        </div>
                    </div>

                    <div className="mobile-upload-row">
                        <span className="upload-link">Upload your own file</span>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="btn btn-cancel" onClick={onClose}>Cancel</button>
                    <button className="btn btn-save" onClick={() => onSave?.("0:12", "0:17")}>Save</button>
                </div>
            </div>
        </div>
    );
};
