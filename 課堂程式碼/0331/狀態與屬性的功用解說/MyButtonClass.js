import React from 'react'

//類別型元件語法
class MyButtonClass extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false,
    }
  }

  render() {
    return (
      <>
        {this.state.show ? <h1>{this.props.name}, 你好</h1> : ''}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          切換呈現文字
        </button>
      </>
    )
  }
}

export default MyButtonClass
