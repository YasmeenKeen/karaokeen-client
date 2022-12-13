import React, { FC } from "react";
// import "../styles.css";

type TabsProps = {
  tabs: {
    label: string;
    img: string;
    index: number;
    Component: any;
  }[];
  selectedTab: number;
  onClick: (index: number) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
};

/**
 * Avalible Props
 * @param className string
 * @param tab Array of object
 * @param selectedTab number
 * @param onClick Function to set the active tab
 * @param orientation Tab orientation Vertical | Horizontal
 */
const Tabs: FC<TabsProps> = ({
  className = "tabs-component",
  tabs = [],
  selectedTab = 0,
  onClick,
  orientation = "horizontal",
}) => {
  const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);

  return (
    <div className={orientation === "vertical" ? className + " vertical" : className}>
      <div className="tab-panel" role="tabpanel" aria-labelledby={`btn-${selectedTab}`} id={`tabpanel-${selectedTab}`}>
        {Panel && Panel.Component}
      </div>
      <div className="tab-list" role="tablist" aria-orientation={orientation}>
        {tabs.map((tab) => (
          <button
            className={"iconButton withLabel Big " + (selectedTab === tab.index ? "active" : "")}
            onClick={() => onClick(tab.index)}
            key={tab.index}
            type="button"
            role="tab"
            aria-selected={selectedTab === tab.index}
            aria-controls={`tabpanel-${tab.index}`}
            tabIndex={selectedTab === tab.index ? 0 : -1}
            id={`btn-${tab.index}`}
          >
            <img src={tab.img}></img>
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Tabs;
