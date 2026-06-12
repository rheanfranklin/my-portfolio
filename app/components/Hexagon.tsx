type HexagonProps = {
    readonly front?: React.ReactNode;
    readonly back?: React.ReactNode;
    readonly className?: string;
}

export const Hexagon = ({
    front = null,
    back = null,
    className = "",
}: HexagonProps) => (
    <div className={`hexagon ${className}`}>
        <svg viewBox="0 0 100 100">
            <polygon
                points="50 2, 93 25, 93 75, 50 98, 7 75, 7 25"
                className="hex-shape"
            />
        </svg>
        <div className="text-face">{front}</div>
        <div className="text-face back">{back}</div>
    </div>
);