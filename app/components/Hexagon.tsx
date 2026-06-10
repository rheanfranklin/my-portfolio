export const Hexagon = () => (
    <div className="hexagon">
        <svg viewBox="0 0 100 100">
            <polygon
                points="50 2, 93 25, 93 75, 50 98, 7 75, 7 25"
                className="hex-shape"
            />
        </svg>
        <div className="text-face front">Front</div>
        <div className="text-face back">Back</div>
    </div>
);