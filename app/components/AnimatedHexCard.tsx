

type HexCardProps = {
  readonly front: React.ReactNode;
  readonly back: React.ReactNode;
};

export const RoundedHexMask = () => (
  <svg width="0" height="0">
    <defs>
      <clipPath id="rounded-hex" clipPathUnits="objectBoundingBox">
        <path d="M0.25 0 H0.75 A0.1 0.1 0 0 1 0.85 0.1 L1 0.5 A0.1 0.1 0 0 1 1 0.5 L0.85 0.9 A0.1 0.1 0 0 1 0.75 1 H0.25 A0.1 0.1 0 0 1 0.15 0.9 L0 0.5 A0.1 0.1 0 0 1 0 0.5 L0.15 0.1 A0.1 0.1 0 0 1 0.25 0 Z" />
      </clipPath>
    </defs>
  </svg>
);


export function HexCard({ front, back }: HexCardProps) {
  return (
    <div className="hex">
      <div className="hex-inner">
        <div className="hex-face hex-front">{front}</div>
        <div className="hex-face hex-back">{back}</div>
      </div>
    </div>
  );
}
