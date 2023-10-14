import {
  KeyboardControls,
  PointerLockControls,
  useGLTF,
} from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Physics, RigidBody } from '@react-three/rapier'
import { Player } from './player'

export default function GalleryPage() {
  const gallery = useGLTF('./the_hallwyl_museum/modelDraco.gltf')
  // const controls = new OrbitControls(camera)

  // //使用useFrame持续更新相机的位置
  // useFrame((state) => {
  //   // const position = state.camera.position
  //   // const quaternion = state.camera.quaternion
  //   // const euler = state.camera.rotation
  //   // console.log(position)
  //   //更新相机的位置
  //   camera.position.set(position[0], position[1], position[2])
  //   const controls = new OrbitControls(camera,camera.domElement)
  // })

  // const changePosition = (e: any) => {
  //   //根据按下的键盘按键，改变相机的位置,w向前，s向后，a向左，d向右
  //   switch (e.key) {
  //     case 'w':
  //       setPositon([position[0], position[1], position[2] - 1])
  //       break
  //     case 's':
  //       setPositon([position[0], position[1], position[2] + 1])
  //       break
  //     case 'a':
  //       setPositon([position[0] - 1, position[1], position[2]])
  //       break
  //     case 'd':
  //       setPositon([position[0] + 1, position[1], position[2]])
  //       break
  //     default:
  //       break
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('keydown', changePosition)
  //   return () => {
  //     window.removeEventListener('keydown', changePosition)
  //   }
  // }, [])

  // useEffect(() => {
  //   //设置相机的位置
  //   camera.position.set(position[0], position[1], position[2])
  // }, [])

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
            <primitive object={gallery.scene} />
          </RigidBody>

          <RigidBody type="fixed">
            <mesh
              receiveShadow
              position-y={-0.8}
              rotation-x={-Math.PI * 0.5}
              scale={10}>
              <boxGeometry args={[10, 10, 0.05]} />
              <meshStandardMaterial color="powderblue" />
            </mesh>
          </RigidBody>

          {/* <RigidBody type="dynamic" mass={1}>
            <mesh position={[-5, 0, 15]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="powderblue" />
            </mesh>
          </RigidBody> */}

          {/* <Wall /> */}
        </Physics>

        {/* <OrbitControls /> */}
        <PointerLockControls />
      </KeyboardControls>
    </>
  )
}
