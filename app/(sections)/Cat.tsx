import PageHeader from "../components/SectionTitle";
import Gallery from "../components/Gallery";
import "./Cat.css";
import AnimatedSection from "../components/AnimatedSection";
import { fadeUp } from "@/lib/animations/fade";

export default function Cat(): React.ReactNode {
    return (
        <div className="container-box">
            <PageHeader title="Cat" />
            <AnimatedSection variants={fadeUp}>
                <p className="section-description">What I work so hard for. My beautiful angel &lt;3</p>
                <Gallery dir="images/cat" />
            </AnimatedSection>
        </div>
    );
}