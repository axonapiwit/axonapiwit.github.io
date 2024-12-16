"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const WaveDots = () => {
  const ref = useRef<THREE.InstancedMesh>(null);
  const rows = 50; // Number of rows
  const cols = 100; // Number of columns
  const dotSize = 0.15; // Size of each dot
  const gap = 0.4; // Gap between dots

  // Generate positions for the dots
  const positions: [number, number, number][] = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      positions.push([(j - cols / 2) * gap, 0, (i - rows / 2) * gap]); // Center the grid
    }
  }

  // Animation loop
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    positions.forEach((pos, i) => {
      const [x, , z] = pos;
      // Calculate wave motion
      const wave = Math.sin(x * 1 + time * 1.5) + Math.cos(z * 1 + time * 1.5);
      const scale = (Math.sin(time + x + z) + 1.5) / 2; // Smooth scaling effect
      const matrix = new THREE.Matrix4()
        .makeTranslation(x, wave * 0.5, z)
        .multiply(
          new THREE.Matrix4().makeScale(
            scale * dotSize,
            scale * dotSize,
            scale * dotSize
          )
        );
      ref.current?.setMatrixAt(i, matrix);
    });
    if (ref.current) {
      ref.current.instanceMatrix.needsUpdate = true; // Notify Three.js to update the positions
    }
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, positions.length]}>
      <circleGeometry args={[0.2, 32]} />
      <meshBasicMaterial color="#FFCB08" />
    </instancedMesh>
  );
};

const WaveDotBackground = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Canvas camera={{ position: [0, 5, 18], fov: 25 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} />
        <WaveDots />
      </Canvas>
    </div>
  );
};

export default WaveDotBackground;
