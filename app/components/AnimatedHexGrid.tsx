import "./AnimatedHexGrid.css"
import { LeftTab, RightTab } from "../components/AnimatedHexGridTab";
import { GridRow, LogoConfig } from "@/content/skills";
import { Hexagon } from "./Hexagon";
import AnimatedSection from "./AnimatedSection";
import { fadeUp } from "@/lib/animations/fade";


type createRowHexesProps = {
    readonly rowContent: LogoConfig[];
}
// Generates hexagons for each row based on rowContent
function generateRowHexes({rowContent}: createRowHexesProps): React.ReactNode {
    return rowContent.map((item) => (
        <div key={item.name}>
            <Hexagon
                category={item.category}
                front={item.logo}
                back={<p>{item.name}</p>}
            />
        </div>
    ));
} 

type createRowProps = {
    readonly gridRow: GridRow;
    readonly isOdd: boolean;
    readonly key: string | number;
}
// Adds left/right tabs to hexagon row and calls generateRowHexes
// and wraps it in a hex-row div
function generateHexRow({gridRow, isOdd, key}: createRowProps): React.ReactNode {
    // determine whether column is odd or even so we know which hex row type to use
    let colType = isOdd ? "hex-grid-column-odd" : "hex-grid-column";

    // string together hexagons + left/right tabs
    return (
        <div className={`${colType} tab-anchor`} key={key}>
            {gridRow.tabs.left && <LeftTab text={gridRow.tabs.left.str} />}
            {generateRowHexes({rowContent: gridRow.rowContent })}
            {gridRow.tabs.right && <RightTab text={gridRow.tabs.right.str} />}
        </div>
    )
}

type HexGridProps = {
    readonly gridRows: Record<number, GridRow>;
}
// Constructs the entire hex grid & wraps it in an AnimatedSection so it fades into view
export function AnimatedHexGrid({gridRows}: HexGridProps): React.ReactNode {
    return (
        <AnimatedSection variants={fadeUp}>
            <div className="hex-grid">
                <div className="hex-container">
                    <div className="hex-group">
                        {Object.keys(gridRows).map((key) =>
                            generateHexRow({
                                gridRow: gridRows[Number(key)],
                                isOdd: Number(key) % 2 === 0,
                                key: key,
                            })
                        )}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}