import { useEffect } from 'react'
import { useVideoStore } from '../store'
import { message } from 'antd'

export function Video() {
  const { isEnd, setIsEnd } = useVideoStore()
  useEffect(() => {
    message.info('请点击播放视频', 3)
    const video = document.querySelector('video')
    video?.addEventListener('click', () => {
      video.play()
    })
    video.addEventListener('ended', () => {
      setIsEnd(true)
    })
  }, [setIsEnd])

  return (
    <>
      <div id="guide" className="w-[100%] h-[100%]">
        <video
          src="../guide.mp4"
          autoPlay
          className="w-[100%] h-[100%]"></video>
      </div>
    </>
  )
}
