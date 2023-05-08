import { Canvas } from '@react-three/fiber'
import { Environment, Center, Stage, OrbitControls } from '@react-three/drei'
import Shirt from './Shirt'
import CameraRig from './CameraRig'
import Backdrop from './Backdrop'
import Shoe from './Shoe'
import Shoe2 from './Shoe2'
import Shoe3 from './Shoe3'
import { useSnapshot } from "valtio";
import state from "../store";

export default function CanvasModel() {
  const snap = useSnapshot(state)
  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      className='w-full max-w-full h-full transition-all ease-in'
    >
      <Stage environment="city" intensity={0.1}>
        {snap.shoe === 1 && (
          <Shoe />
        )}
        {snap.shoe === 2 && (
          <Shoe2 />
        )}
        {snap.shoe === 3 && (
          <Shoe3 />
        )}
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}
