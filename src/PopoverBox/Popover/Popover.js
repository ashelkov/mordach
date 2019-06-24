import React from "react";
import cn from "classnames";
import "./Popover.css";

const Popover = ({ children, isPopupShow, widthPopover,trigger }) => (
<div className={cn('popover', { popoverShow: isPopupShow })}  style={{width: `${widthPopover}px`}}>
    <div ref={this.trigger}>
      {trigger}
    </div>
    `{children}
  </div>
);

export default Popover;


// transform: `translateX(-${widthPopover / 2}px)`}}