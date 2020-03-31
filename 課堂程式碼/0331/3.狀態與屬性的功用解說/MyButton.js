import React, { useState } from 'react'

// 函式型元件語法
function MyButton(props) {
  // 勾子專用的語法，解構賦值
  const [show, setShow] = useState(false)

  return (
    <>
      {/* 三元表達式，相當於if...else */}
      {show ? <h1>{props.name}, 你好</h1> : ''}
      <button onClick={() => setShow(!show)}>切換呈現文字</button>
    </>
  )
}

export default MyButton
