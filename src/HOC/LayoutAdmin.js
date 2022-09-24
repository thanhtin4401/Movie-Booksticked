import React from "react";
import FooterTheme from "../Components/FooterTheme/FooterTheme";
import HeaderThemeAdmin from "../Components/HeaderThemeAdmin/HeaderThemeAdmin";

function LayoutAdmin({ Component }) {
  return (
    <div className="text-white bg-bg-main">
      <HeaderThemeAdmin />
      <Component />
      <FooterTheme />
    </div>
  );
}

export default LayoutAdmin;
