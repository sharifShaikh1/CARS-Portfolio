import React, { useRef, useMemo, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Particles = ({ count = 5000 }: { count?: number }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      arr[i3] = (Math.random() - 0.5) * 10;
      arr[i3 + 1] = (Math.random() - 0.5) * 10;
      arr[i3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const dummy = new THREE.Object3D();
    const time = clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      dummy.position.set(
        positions[i3] + Math.sin(time + i) * 0.5,
        positions[i3 + 1] + Math.cos(time + i) * 0.5,
        positions[i3 + 2] + Math.sin(time + i) * 0.5
      );
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.02, 16, 16]} />
      <meshStandardMaterial color="#6a0dad" />
    </instancedMesh>
  );
};

const CarModel = ({ scale = 0.5, position = [0, -1, 0] as any }: { scale?: number; position?: [number, number, number] }) => {
  const { scene } = useGLTF('/models/car.gltf');
  return <primitive object={scene} scale={scale} position={position} rotation={[0, Math.PI / 4, 0]} />;
};

const SceneContent = ({ mouseX, mouseY, isMobile }: { mouseX: number; mouseY: number; isMobile: boolean }) => {
  const light = useRef<THREE.SpotLight>(null);

  useFrame(({ viewport }) => {
    if (!light.current) return;
    light.current.position.set(
      (mouseX / viewport.width) * 10 - 5,
      -(mouseY / viewport.height) * 10 + 5,
      5
    );
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight ref={light} position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Particles count={isMobile ? 800 : 5000} />
      <CarModel scale={isMobile ? 0.3 : 0.5} position={[0, isMobile ? -0.6 : -1, 0]} />
      <OrbitControls enablePan={false} enableZoom={false} />
    </>
  );
};

const Scene = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="w-full h-[45vh] sm:h-[55vh] md:h-[100vh]" onMouseMove={e => setMousePosition({ x: e.clientX, y: e.clientY })}>
      <Canvas camera={{ position: isMobile ? [0, 0, 20] : [0, 0, 10], fov: isMobile ? 50 : 75 }}>
        <Suspense fallback={null}>
          <SceneContent mouseX={mousePosition.x} mouseY={mousePosition.y} isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
