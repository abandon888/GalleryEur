import React from 'react'
import './loading.css'

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <h1>加载中...</h1>
      <p>模型比较大，加载中请耐心等待</p>
      {/* <img src="loading.gif" alt="Loading" /> */}
    </div>
  )
}

export default Loading
