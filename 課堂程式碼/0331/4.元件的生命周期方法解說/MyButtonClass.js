import React from 'react'

//類別型元件語法
class MyButtonClass extends React.Component {
  constructor() {
    super()
    this.state = {
      inputText: '',
    }
    // 只有元件第一次出現時會觸發
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    // 在這裡呼叫setState會觸發重新渲染
    this.setState({ inputText: 'hello' })
  }

  componentDidUpdate() {
    // 每次呼叫setState，有可能會造成元件更新
    console.log('componentDidUpdate')
  }

  componentWillMount() {
    // 當元件消失在畫面上才會執行這裡的程式碼
    console.log('componentWillMount')
  }

  render() {
    // 建構式完後就會呈現一次
    // 之後有任何更動就會執行一次
    console.log('render')
    return (
      <>
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
