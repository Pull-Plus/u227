import React from 'react'

//類別型元件語法
class MyButtonClass extends React.Component {
  constructor() {
    super()
    this.state = {
      inputText: '',
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.setState({ inputText: 'hello' })
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    console.log('render')
    return (
      <>
        {/* 三元表達式，相當於if...else */}

        <input
          type="text"
          value={this.state.inputText}
          onChange={(event) => this.setState({ inputText: event.target.value })}
        />
        <h1>{this.state.inputText}</h1>
      </>
    )
  }
}

export default MyButtonClass
