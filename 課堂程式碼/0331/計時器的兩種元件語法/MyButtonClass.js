import React from 'react'

//類別型元件語法
class MyButtonClass extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
    }
  }

  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <button onClick={() => this.setState({ total: this.state.total + 1 })}>
          +1
        </button>
      </>
    )
  }
}

export default MyButtonClass
