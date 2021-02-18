import React from "react";

import imgBG from "../../assets/image/l7/jpg/cta-bg.jpg";

const CTA = () => {
  return (
    <>
      {/* <!-- CTA Area --> */}
      <div
        className="cta-section parallax-section-750 bg-parallax-image"
        css={`
          background-image: url(${imgBG});
        `}
      >
        <div className="container-fluid pr-0 pl-0"></div>
      </div>
    </>
  );
};

export default CTA;
