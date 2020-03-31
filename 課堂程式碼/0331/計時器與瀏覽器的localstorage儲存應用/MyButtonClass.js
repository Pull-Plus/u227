import React from 'react'

//類別型元件語法
class MyButtonClass extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
      loading: false,
    }
    // 只有元件第一次出現時會觸發
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    const total = localStorage.getItem('total')
      ? +localStorage.getItem('total')
      : 0
    // 在這裡呼叫setState會觸發重新渲染
    this.setState({ total: total })
    this.setState({ loading: true })
  }

  componentDidUpdate() {
    // 每次呼叫setState，有可能會造成元件更新
    console.log('componentDidUpdate')

    setTimeout(() => this.setState({ loading: false }), 3000)
  }

  componentWillMount() {
    // 當元件消失在畫面上才會執行這裡的程式碼
    console.log('componentWillMount')
  }

  render() {
    // 建構式完後就會呈現一次
    // 之後有任何更動就會執行一次
    console.log('render')

    const spinner = (
      <>
        <div class="spinner-border text-secondary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </>
    )

    const display = (
      <>
        <h1>{this.state.total}</h1>
        <button
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
            localStorage.setItem('total', this.state.total + 1)
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState({ total: this.state.total - 1 })
            localStorage.setItem('total', this.state.total - 1)
          }}
        >
          -1
        </button>
      </>
    )

    return <>{this.state.loading ? spinner : display}</>
  }
}

export default MyButtonClass
