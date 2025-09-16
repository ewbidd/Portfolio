"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";

function Stars() {
  const starCount = 10000;
  const positions = useMemo(() => {
    const arr = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 2000;
    }
    return arr;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="white"
        size={2}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function RotatingStars() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.0005;
    ref.current.rotation.x += 0.0002;
  });

  return (
    <group ref={ref}>
      <Stars />
    </group>
  );
}

export default function App() {
  return (
    <Canvas
      camera={{ position: [0, 0, 500], fov: 75 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        background: "#000000", // deep black bg
      }}
    >
      <RotatingStars />
    </Canvas>
  );
}
