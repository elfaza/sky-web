import React, { useState, useEffect, useContext, useRef } from "react";
import Head from "next/head";

import styled, { ThemeProvider } from "styled-components";
import AOS from "aos";

import Header from "../Header";
import Footer from "../Footer";

import ModalVideo from "../ModalVideo";

import GlobalContext from "../../context/GlobalContext";

import GlobalStyle from "../../utils/globalStyle";

import androidFavicon16 from "../../assets/favicon/favicon-16x16.png";
import androidFavicon32 from "../../assets/favicon/favicon-32x32.png";
import androidFavicon96 from "../../assets/favicon/android-icon-96x96.png";
import androidFavicon192 from "../../assets/favicon/android-icon-192x192.png";
import appleFavicon57 from "../../assets/favicon/apple-icon-57x57.png";
import appleFavicon60 from "../../assets/favicon/apple-icon-60x60.png";
import appleFavicon72 from "../../assets/favicon/apple-icon-72x72.png";
import appleFavicon76 from "../../assets/favicon/apple-icon-76x76.png";
import appleFavicon114 from "../../assets/favicon/apple-icon-114x114.png";
import appleFavicon120 from "../../assets/favicon/apple-icon-120x120.png";
import appleFavicon144 from "../../assets/favicon/apple-icon-144x144.png";
import appleFavicon152 from "../../assets/favicon/apple-icon-152x152.png";
import appleFavicon180 from "../../assets/favicon/apple-icon-180x180.png";
import msIcon from "../../assets/favicon/ms-icon-144x144.png";
import manifest from "../../assets/favicon/manifest.json"

import { get, merge } from "lodash";

// the full theme object
import { theme as baseTheme } from "../../utils";

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 0.5s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`;

// options for different color modes
const modes = { light: "light", dark: "dark" };

// merge the color mode with the base theme
// to create a new theme object
const getTheme = (mode) =>
    merge({}, baseTheme, {
        colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
    });

const Layout = ({ children, pageContext }) => {
    const gContext = useContext(GlobalContext);

    const [visibleLoader, setVisibleLoader] = useState(true);

    useEffect(() => {
        AOS.init({ once: true });
        setVisibleLoader(false);
    }, []);

    // Navbar style based on scroll
    const eleRef = useRef();

    useEffect(() => {
        window.addEventListener(
            "popstate",
            function (event) {
                // The popstate event is fired each time when the current history entry changes.
                gContext.closeOffCanvas();
            },
            false
        );
        window.addEventListener(
            "pushState",
            function (event) {
                // The pushstate event is fired each time when the current history entry changes.
                gContext.closeOffCanvas();
            },
            false
        );
    }, [gContext]);

    if (pageContext.layout === "bare") {
        return (
            <ThemeProvider
                theme={
                    gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
                }
            >
                <div data-theme-mode-panel-active data-theme="light">
                    <GlobalStyle />
                    <Head>
                        <title>YukNgaji</title>
                        <link rel="apple-touch-icon" sizes="57x57" href={appleFavicon57} />
                        <link rel="apple-touch-icon" sizes="60x60" href={appleFavicon60} />
                        <link rel="apple-touch-icon" sizes="72x72" href={appleFavicon72} />
                        <link rel="apple-touch-icon" sizes="76x76" href={appleFavicon76} />
                        <link rel="apple-touch-icon" sizes="114x114" href={appleFavicon114} />
                        <link rel="apple-touch-icon" sizes="120x120" href={appleFavicon120} />
                        <link rel="apple-touch-icon" sizes="144x144" href={appleFavicon144} />
                        <link rel="apple-touch-icon" sizes="152x152" href={appleFavicon152} />
                        <link rel="apple-touch-icon" sizes="180x180" href={appleFavicon180} />
                        <link rel="icon" type="image/png" sizes="192x192" href={androidFavicon192} />
                        <link rel="icon" type="image/png" sizes="32x32" href={androidFavicon32} />
                        <link rel="icon" type="image/png" sizes="96x96" href={androidFavicon96} />
                        <link rel="icon" type="image/png" sizes="16x16" href={androidFavicon16} />
                        <link rel="manifest" href={manifest} />
                        <meta name="msapplication-TileColor" content="#ffffff" />
                        <meta name="msapplication-TileImage" content={msIcon} />
                        <meta name="theme-color" content="#ffffff"></meta>
                    </Head>
                    <Loader id="loading" className={visibleLoader ? "" : "inActive"}>
                        <div className="load-circle">
                            <span className="one"></span>
                        </div>
                    </Loader>
                    <div className="site-wrapper overflow-hidden" ref={eleRef}>
                        {children}
                        <Footer isDark={gContext.footerDark} />
                    </div>

                    <ModalVideo />
                </div>
            </ThemeProvider>
        );
    }

    return (
        <>
            <ThemeProvider
                theme={
                    gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
                }
            >
                <div data-theme-mode-panel-active data-theme="light">
                    <GlobalStyle />
                    <Head>
                        <title>YukNgaji</title>
                        <link rel="apple-touch-icon" sizes="57x57" href={appleFavicon57} />
                        <link rel="apple-touch-icon" sizes="60x60" href={appleFavicon60} />
                        <link rel="apple-touch-icon" sizes="72x72" href={appleFavicon72} />
                        <link rel="apple-touch-icon" sizes="76x76" href={appleFavicon76} />
                        <link rel="apple-touch-icon" sizes="114x114" href={appleFavicon114} />
                        <link rel="apple-touch-icon" sizes="120x120" href={appleFavicon120} />
                        <link rel="apple-touch-icon" sizes="144x144" href={appleFavicon144} />
                        <link rel="apple-touch-icon" sizes="152x152" href={appleFavicon152} />
                        <link rel="apple-touch-icon" sizes="180x180" href={appleFavicon180} />
                        <link rel="icon" type="image/png" sizes="192x192" href={androidFavicon192} />
                        <link rel="icon" type="image/png" sizes="32x32" href={androidFavicon32} />
                        <link rel="icon" type="image/png" sizes="96x96" href={androidFavicon96} />
                        <link rel="icon" type="image/png" sizes="16x16" href={androidFavicon16} />
                        <link rel="manifest" href={manifest} />
                        <meta name="msapplication-TileColor" content="#ffffff" />
                        <meta name="msapplication-TileImage" content={msIcon} />
                        <meta name="theme-color" content="#ffffff"></meta>
                    </Head>
                    <Loader id="loading" className={visibleLoader ? "" : "inActive"} />
                    <div className="site-wrapper overflow-hidden" ref={eleRef}>
                        <Header isDark={gContext.headerDark} />
                        {children}

                        <Footer isDark={gContext.footerDark} />
                    </div>

                    <ModalVideo />
                </div>
            </ThemeProvider>
        </>
    );
};

export default Layout;
