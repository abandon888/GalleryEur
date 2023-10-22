import { useEffect } from 'react'
import { useVideoStore } from '../store'

export function Video() {
  const { isEnd, setIsEnd } = useVideoStore()
  useEffect(() => {
    const video = document.querySelector('video')
    video.addEventListener('ended', () => {
      setIsEnd(true)
    })
  }, [setIsEnd])

  return (
    <div>
      <div id="guide" className="w-[100%] h-[100%]">
        <video src="../assets/guide.mp4" autoPlay></video>
      </div>
    </div>
  )
}
