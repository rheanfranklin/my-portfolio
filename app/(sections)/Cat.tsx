import Gallery from "../components/Gallery";
import AnimatedSection from "../components/AnimatedSection";
import { fadeUp } from "@/lib/animations/fade";


function catHeader(): React.ReactNode {
    return (
        <AnimatedSection variants={fadeUp}>
            <h1>Cat</h1>
            <p className="section-description">What I work so hard for. My beautiful angel &lt;3</p>
        </AnimatedSection>
    );
}

export default function Cat(): React.ReactNode {
    return (
        <div className="container-box">
            {catHeader()}
            
            <Gallery dir="images/cat" />

            <div className="footer-padding"/>
        </div>
    );
}
