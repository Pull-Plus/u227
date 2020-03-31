import React from 'react'

class MyButtonClass extends React.Component {
  constructor(){
    super()
    this.state={}
  }

  render(){
    return <>
    <button onClick={() => alert('MyButtonClass')}>
    按我一下
    </button>
  </>
  }
  
}

export default MyButtonClass