import React from "react";

import LayoutStyles from "./layout.module.scss";

const Layout = ({ children }) => (
  <div className={LayoutStyles.layout}>{children}</div>
);

export default Layout;
