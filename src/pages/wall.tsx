import { RigidBody, CuboidCollider } from '@react-three/rapier'

export default function Wall() {
  return (
    <RigidBody type="fixed">
      {/* 调试坐标轴，绿色是y轴，红色是x轴，蓝色是z轴 */}
      <CuboidCollider args={[50, 1, 0.05]} position={[10, 8, 23]} />
      {/* 添加可视化的墙体 */}
      <mesh position={[0, 8, 23.5]}>
        <boxGeometry args={[26, 6, 0.05]} />
        <meshStandardMaterial color="powderblue" />
      </mesh>
      <CuboidCollider args={[10, 1, 0.05]} position={[10, 20, 10]} />
      <mesh>
        <boxGeometry args={[10, 1, 0.05]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <CuboidCollider args={[10, 1, 0.05]} position={[0, 0, -5]} />
      <mesh>
        <boxGeometry args={[10, 1, 0.05]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <CuboidCollider args={[0.05, 1, 10]} position={[5, 0, 0]} />
      <CuboidCollider args={[0.05, 1, 10]} position={[-5, 0, 0]} />
    </RigidBody>
  )
}
