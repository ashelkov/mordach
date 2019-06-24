import React, { Component } from "react";
import onClickOutside from 'react-onclickoutside'
import Popover from "./Popover/Popover";
import "./PopoverBox.css";

class PopoverBoxOutside extends Component {
  state = {
    isPopupShow: false
}

  handleClickOutside = () => {
    this.setState({
      isPopupShow: false,
    })
    console.log(11)
  }

  changeStatePopup = () => {
      this.setState(state => ({
        isPopupShow: !state.isPopupShow
      }));
  }

  render() {
    const { isPopupShow } = this.state;
    const popoverTrigger = <button className="popoverBox_button">Popover on top</button>;
    
    return (
      <div className="popoverBox" onClick={this.changeStatePopup}>
        <Popover trigger={popoverTrigger} isPopupShow={isPopupShow} widthPopover='300' >
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus
        </Popover>
      </div>
    );
  }
}

const PopoverBox = onClickOutside(PopoverBoxOutside)

export default PopoverBox