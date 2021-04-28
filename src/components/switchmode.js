import React, { Component } from "react";
import Switch from "react-switch";

class SwitchExample extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <label className = "switch">
                        <span>Dark mode:</span>
                        <Switch onChange={this.handleChange} checked={this.state.checked} />
                    </label>
                </div>
            </div>
        </div>
    );
  }
}

export default SwitchExample;