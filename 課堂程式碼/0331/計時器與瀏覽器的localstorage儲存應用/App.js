import React from 'react'
import MyButton from './MyButton'
import MyButtonClass from './MyButtonClass'

function App() {
  return (
    <>
      <h1>類別型元件語法</h1>
      {/* 利用props傳遞資料 */}
      <MyButtonClass name="張小花" />
      <hr />
      {/* <h1>函式型元件語法</h1>
      
      <MyButton name="張小草" /> */}
    </>
  )
}

export default App
