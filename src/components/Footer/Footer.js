import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";

const Footer = () => {
  const gContext = useContext(GlobalContext);

  switch (gContext.footer.style) {
    case "style2":
      return <Footer2 />;
    case "style3":
      return <Footer3 />;
    default:
      return <Footer1 />;
  }
};

export default Footer;
