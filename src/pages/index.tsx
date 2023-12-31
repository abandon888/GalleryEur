import {
  Html,
  KeyboardControls,
  OrbitControls,
  PointerLockControls,
  Text,
  useGLTF,
  useKeyboardControls,
} from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Physics, RigidBody } from '@react-three/rapier'
import { Player } from './player'
import { Model } from '../model'
import Modal from '../components/modal'
import { useState } from 'react'
import { useControlStore } from '../store'
import { useFrame } from '@react-three/fiber'
import Wall from './wall'

export default function GalleryPage() {
  const [isOpen, setIsOpen] = useState(false)
  const { isLockControl, setIsLock } = useControlStore()

  return (
    <>
      <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
          { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
          { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
          { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
          { name: 'jump', keys: ['Space'] },
          { name: 'changeLock', keys: ['KeyL'] },
        ]}>
        <Physics>
          {/* <Debug /> */}
          {/* <Environment
            files="../../../public/canary_wharf_2k.hdr"
            ground={{ height: 10, radius: 40, scale: 40 }}
          /> */}
          {/* <Canvas camera={{ position: [0, 0, 0] }}> */}
          {/* <Perf position="top-left" /> */}
          <directionalLight castShadow position={[0, 10, 0]} intensity={1} />
          <ambientLight intensity={0.5} />
          {/* 引入模型 */}
          {isLockControl && <Player />}

          <RigidBody type="fixed" colliders="trimesh">
            <Model />
          </RigidBody>

          <RigidBody type="fixed">
            <mesh
              receiveShadow
              position-y={-0.8}
              rotation-x={-Math.PI * 0.5}
              scale={10}>
              <boxGeometry args={[20, 20, 0.05]} />
              <meshStandardMaterial color="powderblue" />
            </mesh>
          </RigidBody>

          {/* <RigidBody type="dynamic">
            <mesh
              position={[-5, 0, 12]}
              onClick={() => {
                setIsOpen(true)
              }}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="powderblue" />
              <Text
                //font="../assets/MaShanZheng-Regular.ttf"
                fontSize={0.5}
                position={[0, 0.7, -1.5]}
                color="blue"
                direction="ltr"
                rotation={[-1, 4, 0.5]}>
               
                Click the box
              </Text>
              <Html>
                <Modal
                  isOpen={isOpen}
                  title="hello"
                  content="world"
                  onClose={() => {
                    setIsOpen(false)
                  }}
                />
              </Html>
            </mesh>
          </RigidBody> */}

          <Wall />
        </Physics>
        {isLockControl ? <PointerLockControls /> : <OrbitControls />}
      </KeyboardControls>
    </>
  )
}
