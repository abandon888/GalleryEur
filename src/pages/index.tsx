import {
  Html,
  KeyboardControls,
  OrbitControls,
  PointerLockControls,
  Text,
  useGLTF,
} from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Physics, RigidBody } from '@react-three/rapier'
import { Player } from './player'
import { Model } from '../model'
import Modal from '../components/modal'
import { useState } from 'react'

export default function GalleryPage() {

  const [isOpen, setIsOpen] = useState(false)


  return (
    <>
      <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
          { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
          { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
          { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
          { name: 'jump', keys: ['Space'] },
        ]}>
        <Physics>
          {/* <Debug /> */}
          {/* <Environment
            files="../../../public/canary_wharf_2k.hdr"
            ground={{ height: 10, radius: 40, scale: 40 }}
          /> */}
          {/* <Canvas camera={{ position: [0, 0, 0] }}> */}
          <Perf position="top-left" />
          <directionalLight castShadow position={[0, 10, 0]} intensity={1} />
          <ambientLight intensity={0.5} />
          {/* 引入模型 */}
          <Player />
          <RigidBody type="fixed" colliders="trimesh">
            <Model />
          </RigidBody>

          <RigidBody type="fixed">
            <mesh
              receiveShadow
              position-y={-0.8}
              rotation-x={-Math.PI * 0.5}
              scale={10}>
              <boxGeometry args={[25, 25, 0.05]} />
              <meshStandardMaterial color="powderblue" />
            </mesh>
          </RigidBody>

          <RigidBody type="dynamic">
            <mesh
              position={[-5, 0, 12]}
              onClick={() => {
                setIsOpen(true)
              }}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="powderblue" />
              {/* 光调个字的位置都要调半天 */}
              <Text
                fontSize={0.5}
                position={[0, 0.7, -1.5]}
                color="blue"
                direction="ltr"
                rotation={[-1, 4, 0.5]}>
                {/* 请点击盒子 */}
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
          </RigidBody>

          {/* <Wall /> */}
        </Physics>

        {/* <OrbitControls /> */}
        <PointerLockControls />
      </KeyboardControls>
    </>
  )
}
