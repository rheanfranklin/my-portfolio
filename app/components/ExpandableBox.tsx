import "./ExpandableBox.css"

type ExpandableBoxProps = {
    readonly summary?: string;
    readonly content?: React.ReactNode;
}
export function ExpandableOpenBox({
    summary,
    content,
}: ExpandableBoxProps): React.ReactNode {
    return (
        <details className="expandable-box" open>
            <summary>{summary}</summary>
            <div className={`content-wrapper`}>
                <div className="content">
                    {content}
                </div>
            </div>
        </details>
    )
}

export function ExpandableCloseBox({
    summary,
    content,
}: ExpandableBoxProps): React.ReactNode {
    return (
        <details className="expandable-box">
            <summary>{summary}</summary>
            <div className={`content-wrapper`}>
                <div className="content">
                    {content}
                </div>
            </div>
        </details>
    )
}