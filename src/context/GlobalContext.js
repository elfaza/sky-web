import React, { useState } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
    const [themeDark, setThemeDark] = useState(false);
    const [videoModalVisible, setVideoModalVisible] = useState(false);
    const [communityModalVisible, setCommunityModalVisible] = useState(false);
    const [visibleOffCanvas, setVisibleOffCanvas] = useState(false);
    const [activeCommunity, setActiveCommunity] = useState(null);
    const [header, setHeader] = useState({
        theme: "light",
        variant: "primary",
        align: "left",
        isFluid: false,
        button: "cta", // cta, account, null
    });
    const [footer, setFooter] = useState({
        theme: "dark",
        style: "style1", //style1, style2
    });

    const toggleTheme = () => {
        setThemeDark(!themeDark);
    };

    const toggleVideoModal = () => {
        setVideoModalVisible(!videoModalVisible);
    };

    const toggleCommunityModal = () => {
        console.log("clicked")
        setCommunityModalVisible(!communityModalVisible);
    };

    const toggleOffCanvas = () => {
        setVisibleOffCanvas(!visibleOffCanvas);
    };

    const closeOffCanvas = () => {
        setVisibleOffCanvas(false);
    };

    return (
        <GlobalContext.Provider
            value={{
                themeDark,
                toggleTheme,
                videoModalVisible,
                toggleVideoModal,
                communityModalVisible,
                toggleCommunityModal,
                visibleOffCanvas,
                toggleOffCanvas,
                closeOffCanvas,
                header,
                setHeader,
                footer,
                setFooter,
                activeCommunity,
                setActiveCommunity
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;
export { GlobalProvider };
