import React from "react";

import classes from "./widget.module.css";

const Widget = props => {
  return (
    <div className={classes.Widget} onClick={props.cliked}>
      <div class="widget-content">
        <div className={classes.WidgetNumber}>{props.widget.number}</div>
        <div className={classes.WidgetSubtitle}>{props.widget.subTitle}</div>
      </div>
      <div className={classes.widgetTimestamp}>
        about {props.widget.hours} hours ago
      </div>
    </div>
  );
};

export default Widget;
