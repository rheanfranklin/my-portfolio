
import "./Skills.css";
import { Hexagon } from "../components/Hexagon";

export default function Skills() {
    return (
        <div className="container-box">
            <div className="p-6"/>
            <div className="hex-container">
                <div className="hex-column">
                    <Hexagon />
                    <Hexagon />
                    <Hexagon />
                    <Hexagon />
                    <Hexagon />
                    {/* <Hexagon /> */}
                </div>
                <div className="hex-column-odd">
                    <Hexagon />
                    <Hexagon />
                    <Hexagon />
                    <Hexagon />
                    <Hexagon />
                    <Hexagon />
                </div>
                <div className="hex-column">
                    <Hexagon />
                    <Hexagon />
                    <Hexagon />
                    <Hexagon />
                    <Hexagon />
                    {/* <Hexagon /> */}
                </div>
            </div>

        </div>

    );
}
