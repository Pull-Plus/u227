import React, { useState } from 'react'

//函式型元件語法
function MyButton() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>{total}</h1>
      <button onClick={() => setTotal(total + 1)}>+1</button>
    </>
  )
}

export default MyButton
