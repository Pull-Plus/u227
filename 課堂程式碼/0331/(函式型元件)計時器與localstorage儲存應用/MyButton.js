import React, { useState, useEffect } from 'react'

// 函式型元件語法
function MyButton(props) {
  // 勾子專用的語法，解構賦值
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  // 相當於componentDidMount
  useEffect(() => {
    const localTotal = localStorage.getItem('total')
      ? +localStorage.getItem('total')
      : 0
    // 在這裡呼叫setState會觸發重新渲染
    setTotal(localTotal)
    setLoading(true)
  }, [])

  // 相當於componentDidUpdate
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [total])

  const spinner = (
    <>
      <div class="spinner-border text-secondary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </>
  )

  const display = (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
          localStorage.setItem('total', total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
          localStorage.setItem('total', total - 1)
        }}
      >
        -1
      </button>
    </>
  )

  return <>{loading ? spinner : display}</>
}

export default MyButton
