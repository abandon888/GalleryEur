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
      <div id="guide">
        <video src="../assets/guide.mp4" autoPlay></video>
      </div>
    </div>
  )
}
