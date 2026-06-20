import "./Illustration.css"
import AnimatedSection from "../components/AnimatedSection";
import { fadeUp } from "@/lib/animations/fade";
import GalleryGrid from "../components/GalleryGrid";

const Images: string[] = [
    "images/illustrations/illust-1.JPEG",
    "images/illustrations/illust-2.JPEG",
    "images/illustrations/illust-3.JPEG",
    "images/illustrations/illust-4.PNG",
    "images/illustrations/illust-5.JPEG",
    "images/illustrations/IMG_0259.PNG",
    "images/illustrations/SPOILER_IMG_2477.webp",
    "images/illustrations/Untitled_Artwork1.JPEG",
    "images/illustrations/Untitled_Artwork2.PNG",
    "images/illustrations/Untitled_Artwork.PNG",
];

function illustrationHeader(): React.ReactNode {
    return(
        <AnimatedSection variants={fadeUp}>
            <h1>Illustration</h1>
            <p className="section-description">Woah, you found this page ! Here's a couple drawings as a reward :p</p>
        </AnimatedSection>
    );
}

function illustrationContent(): React.ReactNode {
    return (
        <div className="content">
            <AnimatedSection variants={fadeUp}>
                <p>I'm kinda bad at finishing my drawings ... so here are the few that I've successfully completed.</p>
                <GalleryGrid
                    images={Images}
                />
            </AnimatedSection>
        </div>
    );
}

export default function Illustration() {
    return (
        <div className="container-box illustration">
            {illustrationHeader()}
            
            <hr style={{ width: "80%"}}/> {/* Divider */}

            {illustrationContent()}
            <div className="footer-padding"/> {/* Padding */}
        </div>
    );
}