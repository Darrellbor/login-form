import React from "react";

import SoftcomIcon from "../Icons/SoftcomIcon";

const Layout = props => {
  return (
    <div className="platformLayout">
      <header className="platformLayout__header">
        <SoftcomIcon />
      </header>

      <div className="platformLayout__body">{props.children}</div>
    </div>
  );
};

export default Layout;