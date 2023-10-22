import { useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody, CuboidCollider } from '@react-three/rapier'
import { useControlStore } from '../store'
import { message } from 'antd'

export default function Wall() {
  const { isLockControl, setIsLock } = useControlStore()

  const [, get] = useKeyboardControls()
  useFrame(() => {
    const { changeLock } = get()
    console.log(changeLock)
    if (changeLock) {
      setTimeout(() => {
        isLockControl
          ? message.info('已切换到自由视角，请再点击Esc键退出，使用滚轮放缩')
          : message.info('已切换到第一视角，请点击进入')
        setIsLock(!isLockControl)
        console.log(isLockControl)
      }, 2000)
    }
  })
  return (
    <></>
    // <RigidBody type="fixed">
    //   {/* 调试坐标轴，绿色是y轴，红色是x轴，蓝色是z轴 */}
    //   <CuboidCollider args={[50, 1, 0.05]} position={[10, 8, 23]} />
    //   {/* 添加可视化的墙体 */}
    //   <mesh position={[0, 8, 23.5]}>
    //     <boxGeometry args={[26, 6, 0.05]} />
    //     <meshStandardMaterial color="powderblue" />
    //   </mesh>
    //   <CuboidCollider args={[10, 1, 0.05]} position={[10, 20, 10]} />
    //   <mesh>
    //     <boxGeometry args={[10, 1, 0.05]} />
    //     <meshStandardMaterial color="blue" />
    //   </mesh>
    //   <CuboidCollider args={[10, 1, 0.05]} position={[0, 0, -5]} />
    //   <mesh>
    //     <boxGeometry args={[10, 1, 0.05]} />
    //     <meshStandardMaterial color="red" />
    //   </mesh>
    //   <CuboidCollider args={[0.05, 1, 10]} position={[5, 0, 0]} />
    //   <CuboidCollider args={[0.05, 1, 10]} position={[-5, 0, 0]} />
    // </RigidBody>
  )
}
