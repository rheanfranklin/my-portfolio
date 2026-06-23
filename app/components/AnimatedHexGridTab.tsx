import "./AnimatedHexGridTab.css"

type TabProps = {
  readonly text?: string;
};

export function LeftTab({ text }: TabProps): React.ReactNode {
  return (
    <div className="tab-left">
        <div className="triangle" />
        <span className="tab-label">{text}</span>
    </div>
  );
}

export function RightTab({ text }: TabProps): React.ReactNode {
  return (
    <div className="tab-right">
        <div className="tab-right-triangle" />
        <span className="tab-label">{text}</span>
    </div>
  );
}