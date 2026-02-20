import React from 'react';
import './tag.css';

export interface TagProps {
  /** Tag label text */
  label: string;
  /** Visual style variant */
  variant?: 'outline' | 'solid';
  /** Size of the tag */
  size?: 'sm' | 'md' | 'lg';
  /** Optional meta text displayed after the label (e.g. time range) */
  meta?: string;
  /** Show a chevron-down icon at the end */
  showChevron?: boolean;
  /** Separate the chevron with a vertical divider (split button style) */
  split?: boolean;
  /** Optional icon rendered before the label */
  icon?: React.ReactNode;
  /** If provided, the tag becomes clickable */
  onClick?: () => void;
}

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.2197 8.54492C15.287 8.48224 15.3922 8.48567 15.4551 8.55273C15.5179 8.6199 15.5143 8.72518 15.4473 8.78809L10.1143 13.7881C10.0501 13.8482 9.94986 13.8482 9.88574 13.7881L4.55273 8.78809C4.48569 8.72518 4.48208 8.6199 4.54492 8.55273C4.60779 8.48567 4.71311 8.48225 4.78027 8.54492L9.6582 13.1172L10 13.4385L10.3418 13.1172L15.2197 8.54492Z"
      fill="#09090B"
      stroke="#09090B"
    />
  </svg>
);

const AudioWaveIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.82609 4.92593V9.07407C1.82609 9.28032 1.72989 9.47819 1.55866 9.62403C1.38744 9.76988 1.1552 9.85185 0.913043 9.85185C0.67089 9.85185 0.43865 9.76988 0.267427 9.62403C0.0961934 9.47819 0 9.28032 0 9.07407V4.92593C0 4.71965 0.0961934 4.52181 0.267427 4.37596C0.43865 4.23009 0.67089 4.14815 0.913043 4.14815C1.1552 4.14815 1.38744 4.23009 1.55866 4.37596C1.72989 4.52181 1.82609 4.71965 1.82609 4.92593ZM3.95652 0C3.71437 0 3.48213 0.0819425 3.3109 0.227808C3.13967 0.373665 3.04348 0.571499 3.04348 0.777778V13.2222C3.04348 13.4285 3.13967 13.6263 3.3109 13.7722C3.48213 13.918 3.71437 14 3.95652 14C4.19868 14 4.43091 13.918 4.60214 13.7722C4.77337 13.6263 4.86957 13.4285 4.86957 13.2222V0.777778C4.86957 0.571499 4.77337 0.373665 4.60214 0.227808C4.43091 0.0819425 4.19868 0 3.95652 0ZM7 2.07407C6.75785 2.07407 6.52561 2.15602 6.35438 2.30188C6.18315 2.44774 6.08696 2.64557 6.08696 2.85185V11.1481C6.08696 11.3544 6.18315 11.5523 6.35438 11.6981C6.52561 11.844 6.75785 11.9259 7 11.9259C7.24211 11.9259 7.47439 11.844 7.64561 11.6981C7.81682 11.5523 7.91304 11.3544 7.91304 11.1481V2.85185C7.91304 2.64557 7.81682 2.44774 7.64561 2.30188C7.47439 2.15602 7.24211 2.07407 7 2.07407ZM10.0435 4.14815C9.80136 4.14815 9.56909 4.23009 9.39787 4.37596C9.22666 4.52181 9.13043 4.71965 9.13043 4.92593V9.07407C9.13043 9.28032 9.22666 9.47819 9.39787 9.62403C9.56909 9.76988 9.80136 9.85185 10.0435 9.85185C10.2856 9.85185 10.5179 9.76988 10.6891 9.62403C10.8603 9.47819 10.9565 9.28032 10.9565 9.07407V4.92593C10.9565 4.71965 10.8603 4.52181 10.6891 4.37596C10.5179 4.23009 10.2856 4.14815 10.0435 4.14815ZM13.087 3.11111C12.8448 3.11111 12.6126 3.19305 12.4413 3.33892C12.2701 3.48478 12.1739 3.68261 12.1739 3.88889V10.1111C12.1739 10.3174 12.2701 10.5152 12.4413 10.6611C12.6126 10.8069 12.8448 10.8889 13.087 10.8889C13.3291 10.8889 13.5613 10.8069 13.7326 10.6611C13.9038 10.5152 14 10.3174 14 10.1111V3.88889C14 3.68261 13.9038 3.48478 13.7326 3.33892C13.5613 3.19305 13.3291 3.11111 13.087 3.11111Z"
      fill="#18181B"
    />
  </svg>
);

/** Compact Tag component for labeling content with optional metadata */
export const Tag = ({
  label,
  variant = 'outline',
  size = 'md',
  meta,
  showChevron = false,
  split = false,
  icon,
  onClick,
}: TagProps) => {
  const classNames = [
    'tag',
    `tag--${variant}`,
    `tag--${size}`,
    split ? 'tag--split' : '',
    onClick ? 'tag--clickable' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classNames}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      <div className="tag-inner">
        {icon && <span className="tag-icon">{icon}</span>}
        <span className="tag-label">{label}</span>
        {meta && <span className="tag-meta">{meta}</span>}
      </div>
      {showChevron && (
        <div className={split ? 'tag-split' : 'tag-chevron-wrap'}>
          <span className="tag-chevron">
            <ChevronDownIcon />
          </span>
        </div>
      )}
    </div>
  );
};

export { AudioWaveIcon };
