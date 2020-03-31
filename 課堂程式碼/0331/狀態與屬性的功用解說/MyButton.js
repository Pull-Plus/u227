import React, { useState } from 'react'

//函式型元件語法
function MyButton(props) {
  const [show, setShow] = useState(false)

  return (
    <>
      {show ? <h1>{props.name}, 你好</h1> : ''}
      <button onClick={() => setShow(!show)}>切換呈現文字</button>
    </>
  )
}

export default MyButton
