import React from "react";

import classes from "./header.module.css";

const Header = props => {
  return (
    <div className={classes.Header}>
      <div className={classes.FloatLeft}>
        <p className={classes.Title}>WonderIT</p>
      </div>
      <div className={classes.FloatRight}>
        <button className={classes.AddWidget}>+ add widget</button>
      </div>
    </div>
  );
};

export default Header;
