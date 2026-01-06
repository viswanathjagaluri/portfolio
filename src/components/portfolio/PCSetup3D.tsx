import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  RoundedBox,
  Float,
  Environment,
  ContactShadows
} from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

/* ===================== MONITOR ===================== */
const Monitor = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      <RoundedBox args={[3.8, 1.6, 0.08]} radius={0.03} position={[0, 0.9, 0]}>
        <meshStandardMaterial
          color="#0b0b10"
          metalness={0.95}
          roughness={0.08}
          envMapIntensity={1.5}
        />
      </RoundedBox>

      <mesh position={[0, 0.9, 0.055]}>
        <planeGeometry args={[3.6, 1.45]} />
        <meshStandardMaterial
          color="#1e1e2e"
          emissive="#1a1a2e"
          emissiveIntensity={0.35}
        />
      </mesh>

      {[0.5, 0.38, 0.26, 0.14, 0.02, -0.1].map((y, i) => (
        <mesh key={i} position={[-0.3, 0.9 + y, 0.06]}>
          <planeGeometry args={[1.8, 0.06]} />
          <meshStandardMaterial
            color={['#61afef', '#c678dd', '#98c379'][i % 3]}
            emissive={['#61afef', '#c678dd', '#98c379'][i % 3]}
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}

      <RoundedBox args={[0.15, 0.5, 0.15]} radius={0.02} position={[0, 0.1, 0]}>
        <meshStandardMaterial
          color="#0b0b10"
          metalness={0.95}
          roughness={0.05}
        />
      </RoundedBox>
    </group>
  );
};

/* ===================== KEYBOARD ===================== */
const Keyboard = () => {
  const keysRef = useRef<THREE.Group>(null);

  const colors = useMemo(
    () => ['#ff0066', '#00ffff', '#ffcc00', '#7f5cff'],
    []
  );

  useFrame(({ clock }) => {
    if (!keysRef.current) return;
    keysRef.current.children.forEach((key, i) => {
      const mat = (key as THREE.Mesh).material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity =
        0.5 + Math.sin(clock.elapsedTime * 4 + i) * 0.15;
    });
  });

  return (
    <group position={[0, -0.12, 1]}>
      <RoundedBox args={[2.2, 0.045, 0.6]} radius={0.02}>
        <meshStandardMaterial color="#0b0b10" metalness={0.8} roughness={0.25} />
      </RoundedBox>

      <group ref={keysRef}>
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 14 }).map((_, col) => (
            <mesh
              key={`${row}-${col}`}
              position={[-0.9 + col * 0.14, 0.04, -0.2 + row * 0.11]}
            >
              <boxGeometry args={[0.1, 0.025, 0.08]} />
              <meshStandardMaterial
                color="#111"
                emissive={colors[(row + col) % colors.length]}
                emissiveIntensity={0.6}
              />
            </mesh>
          ))
        )}
      </group>
    </group>
  );
};

/* ===================== MOUSE ===================== */
const Mouse = () => (
  <group position={[1.5, -0.1, 1]} scale={0.9}>
    <RoundedBox args={[0.2, 0.1, 0.35]} radius={0.05}>
      <meshStandardMaterial color="#0b0b10" metalness={0.9} roughness={0.1} />
    </RoundedBox>
    <mesh position={[0, 0.055, -0.05]}>
      <boxGeometry args={[0.04, 0.02, 0.08]} />
      <meshStandardMaterial
        color="#ff0066"
        emissive="#ff0066"
        emissiveIntensity={0.9}
      />
    </mesh>
  </group>
);

/* ===================== RGB FAN ===================== */
const RGBFan = ({ position, offset }: any) => {
  const ring = useRef<THREE.Mesh>(null);
  const blades = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (blades.current)
      blades.current.rotation.z = clock.elapsedTime * 3 + offset;

    if (ring.current) {
      const mat = ring.current.material as THREE.MeshStandardMaterial;
      const hue = (clock.elapsedTime * 0.15 + offset) % 1;
      mat.color.setHSL(hue, 1, 0.5);
      mat.emissive.setHSL(hue, 1, 0.5);
      mat.emissiveIntensity =
        0.7 + Math.sin(clock.elapsedTime * 3 + offset) * 0.3;
    }
  });

  return (
    <group position={position}>
      <mesh ref={ring}>
        <ringGeometry args={[0.18, 0.22, 32]} />
        <meshStandardMaterial emissiveIntensity={0.8} />
      </mesh>

      <group ref={blades}>
        {[...Array(7)].map((_, i) => (
          <mesh key={i} rotation={[0, 0, (i * Math.PI * 2) / 7]}>
            <planeGeometry args={[0.04, 0.15]} />
            <meshStandardMaterial
              color="#222"
              transparent
              opacity={0.7}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
};

/* ===================== PC CASE ===================== */
const PCCase = () => (
  <group position={[2.5, 0.5, 0.2]}>
    <RoundedBox args={[0.5, 1.3, 0.45]} radius={0.02}>
      <meshStandardMaterial
        color="#0b0b10"
        metalness={0.95}
        roughness={0.05}
      />
    </RoundedBox>

    <mesh position={[-0.26, 0, 0]}>
      <planeGeometry args={[0.48, 1.25]} />
      <meshStandardMaterial
        transparent
        opacity={0.35}
        roughness={0.05}
        envMapIntensity={1.8}
      />
    </mesh>

    <RGBFan position={[-0.27, 0.4, 0]} offset={0} />
    <RGBFan position={[-0.27, 0, 0]} offset={2} />
    <RGBFan position={[-0.27, -0.4, 0]} offset={4} />
  </group>
);

/* ===================== DESK ===================== */
const Desk = () => (
  <group position={[0.3, -0.18, 0.5]}>
    <RoundedBox args={[5, 0.05, 2.2]} radius={0.02}>
      <meshStandardMaterial color="#0f0f12" roughness={0.8} />
    </RoundedBox>
  </group>
);

/* ===================== SCENE ===================== */
const Scene = () => {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y +=
      (Math.sin(clock.elapsedTime * 0.25) * 0.12 -
        ref.current.rotation.y) *
      0.05;
    ref.current.position.y = Math.sin(clock.elapsedTime * 0.6) * 0.03;
  });

  return (
    <Float floatIntensity={0.2} rotationIntensity={0.1}>
      <group ref={ref}>
        <Monitor position={[0, 0, 0]} />
        <Keyboard />
        <Mouse />
        <PCCase />
        <Desk />
      </group>
    </Float>
  );
};

/* ===================== MAIN ===================== */
const PCSetup3D = () => {
  return (
    <div className="w-full h-[500px]">
      <Canvas
        shadows
        camera={{ position: [0, 1.6, 5.2], fov: 38 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.15} />
        <spotLight
          position={[4, 6, 4]}
          intensity={1}
          angle={0.35}
          penumbra={1}
          castShadow
        />
        <pointLight position={[-5, 2, -3]} intensity={0.6} color="#7f5cff" />
        <pointLight position={[0, -2, 2]} intensity={0.4} color="#00ffff" />

        <Environment preset="city" />
        <Scene />

        <ContactShadows
          position={[0, -0.9, 0]}
          opacity={0.45}
          scale={10}
          blur={2.5}
          far={5}
        />

        <EffectComposer>
          <Bloom intensity={0.8} luminanceThreshold={0.2} />
        </EffectComposer>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.15}
        />
      </Canvas>
    </div>
  );
};

export default PCSetup3D;
