import fs from "node:fs";
import path from "node:path";
import "./Gallery.css"

type GalleryProps = {
    readonly dir: string;
}

export default function Gallery({ dir }: GalleryProps) {
    return <PhotoList dir={dir} />;
}

type PhotoListProps = {
    readonly dir: string;
}
export function PhotoList({ dir }: PhotoListProps) {
    const imageDir = path.join(process.cwd(), `public/${dir}`);
    const files = fs.readdirSync(imageDir);
    

    return (
        <div className="gallery">
            {files.map((file) => (
                <figure key={file}>
                    <img src={`/${dir}/${file}`} alt={file} />
                    <figcaption>
                        <h3> </h3>
                        <p> </p>
                    </figcaption>
                </figure>
            ))}
        </div>
    );
}
