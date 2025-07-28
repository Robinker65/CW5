import React, { Component } from 'react';

// 类组件：简单计数器
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // 初始计数为0
  }

  // 点击按钮时计数加一
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="counter">
        <h3>计数器：{this.state.count}</h3>
        <button onClick={this.incrementCount}>+1</button>
      </div>
    );
  }
}

export default Counter;
