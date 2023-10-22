import { message } from 'antd'
import React, { useEffect } from 'react'
//import './loading.css'

const Loading: React.FC = () => {
  useEffect(() => {
    message.info(
      '请使用w,a,s,d控制移动，空格键跳跃，鼠标控制视角,L键切换视角',
      5000
    )
  }, [])
  return (
    <div
    //className="loading-container"
    >
      <h1>加载中...</h1>
      <div>模型比较大，加载中请耐心等待</div>
      {/* <img src="loading.gif" alt="Loading" /> */}
    </div>
  )
}

export default Loading
