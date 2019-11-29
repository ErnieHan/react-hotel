import React, { Component } from "react";
import {
  Content,
  Main,
  OptionContent,
  Option,
  OptionBackground
} from "./SelectOption-css";

class SelectOption extends Component {
  state = {
    defaultOption: "女性",
    show: false
  };

  componentDidMount() {
    window.addEventListener("click", this.checking);
    //
    const element = document.getElementById("select-content");
    element.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    const { scrollTop, offsetHeight } = e.target; // x , 200
    const optionsContentHeight = this.refs.optionsContent.offsetHeight; // 408
    const count = optionsContentHeight - offsetHeight + 28; // 236
    const percent = Math.round((scrollTop / count) * 100);
    //
    const options = [
      "女性",
      "男性",
      "鼠",
      "牛",
      "虎",
      "兔",
      "龍",
      "蛇",
      "馬",
      "羊",
      "猴",
      "雞",
      "狗",
      "豬"
    ];
    const optionsLength = options.length;
    const a = Math.floor(100 / optionsLength);
    const active = Math.floor(percent / a);
    // this.setState({
    //   defaultOption: options[active]
    // });
  };

  componentWillUnmount() {
    window.removeEventListener("click", this.checking);
  }

  checking = e => {
    if (e.target.className.includes("main-option")) {
      return;
    } else {
      this.setState({
        show: false
      });
    }
  };

  showOptions = () => {
    this.setState({
      show: true
    });
  };

  handleChange = data => {
    this.setState({
      defaultOption: data,
      show: false
    });
  };

  render() {
    const { defaultOption, show } = this.state;
    const options = [
      "女性",
      "男性",
      "鼠",
      "牛",
      "虎",
      "兔",
      "龍",
      "蛇",
      "馬",
      "羊",
      "猴",
      "雞",
      "狗",
      "豬"
    ];
    return (
      <Content>
        <Main onClick={this.showOptions} className="main-option">
          {defaultOption}
        </Main>
        <OptionBackground show={show}>
          <>
            <OptionContent show={show} id="select-content">
              <div ref="optionsContent">
                {options.map((data, index) => (
                  <Option
                    key={index}
                    onClick={() => this.handleChange(data)}
                    active={this.state.defaultOption === data}
                  >
                    {data}
                  </Option>
                ))}
              </div>
            </OptionContent>
          </>
        </OptionBackground>
      </Content>
    );
  }
}

export default SelectOption;
