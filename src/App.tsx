import { Suspense } from 'react'
import './styles/App.css'
import GalleryPage from './pages'
import { Canvas } from '@react-three/fiber'
import Loading from './pages/loading'
import Sider from './pages/sider'
import { useVideoStore } from './store'
import { Video } from './pages/video'

function App() {
  const { isEnd } = useVideoStore()
  console.log(isEnd)
  return (
    <>
      {isEnd == false ? (
        <Video />
      ) : (
        <>
          <Sider />
          <Suspense fallback={<Loading />}>
            <Canvas
              shadows
              camera={{
                fov: 45,
                near: 0.1,
                far: 200,
              }}>
              <GalleryPage />
            </Canvas>
          </Suspense>
        </>
      )}
    </>
  )
}

export default App
