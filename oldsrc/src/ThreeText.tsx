import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function RotatingText() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <Text3D
      ref={meshRef}
      font="/fonts/helvetiker_regular.typeface.json"
      size={1}
      bevelEnabled
      bevelThickness={0.05}
      bevelSize={0.02}
      height={0.3}
    >
      $WAG
      <meshStandardMaterial color="#c0c0c0" />
    </Text3D>
  );
}

export default function ThreeText() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <RotatingText />
      <OrbitControls enablePan={false} />
    </Canvas>
  );
}
