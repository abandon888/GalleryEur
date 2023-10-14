import { Suspense } from 'react'
import './App.css'
import GalleryPage from './pages'
import { Canvas } from '@react-three/fiber'
import Loading from './pages/loading'

function App() {
  return (
    <>
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
  )
}

export default App
