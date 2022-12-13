import React, { useState } from "react";
import "./LeftSide.css";
import Tabs from "./Tabs";

type TabsType = {
    label: string;
    img: string;
    index: number;
    Component: any;
};

type Props = {
    songBrowser: TabsType;
    songFavorites: TabsType;
    sessionRemote: TabsType;
};

const LeftSide = ({ songBrowser, songFavorites, sessionRemote }: Props) => {
    const tabs = [songBrowser, songFavorites, sessionRemote];

    const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);


    return (
        <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
    );
}

export default LeftSide;