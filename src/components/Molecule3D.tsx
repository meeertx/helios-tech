import { useMemo, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, Sphere, Edges, ContactShadows, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Bu component, MOF yapısını 3D olarak görselleştirmek için oluşturuldu.
 * Three.js ve react-three-fiber kullanılarak metal düğümler, organik bağlar ve iç gözenek yapısı modellenmiştir.
 * useMemo ile geometri ve vertex hesaplamaları optimize edilerek performans artırılmıştır.
 * OrbitControls ve ışık ayarları sayesinde etkileşimli ve gerçekçi bir deneyim sağlanmıştır.
 * Performans optimizasyonu ve gerçekçi ışıklandırma ile dinamik bir deneyim sunar.
 */
function MOFStructure({ variant }: { variant: 'hero' | 'overview' }) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create a base geometry to get vertices and edges for the framework
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(variant === 'hero' ? 2.2 : 1.8, 1), [variant]);
  
  // Extract unique vertices to place the "metal nodes"
  const vertices = useMemo(() => {
    const positions = geometry.attributes.position.array;
    const pts = [];
    const seen = new Set();
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i+1];
      const z = positions[i+2];
      const key = `${x.toFixed(2)},${y.toFixed(2)},${z.toFixed(2)}`;
      if (!seen.has(key)) {
        seen.add(key);
        pts.push(new THREE.Vector3(x, y, z));
      }
    }
    return pts;
  }, [geometry]);

  // Colors based on variant (teal for hero, indigo for overview)
  const nodeColor = variant === 'hero' ? '#0d9488' : '#4f46e5'; 
  const edgeColor = variant === 'hero' ? '#5eead4' : '#a5b4fc'; 
  const coreColor = variant === 'hero' ? '#ccfbf1' : '#e0e7ff'; 

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <group ref={groupRef}>
        {/* Organic Linkers (Edges) */}
        <mesh geometry={geometry}>
          <meshBasicMaterial color={edgeColor} wireframe={true} transparent opacity={0.3} />
        </mesh>
        
        {/* Metal Nodes (Vertices) */}
        {vertices.map((v, i) => (
          <Sphere key={i} args={[0.08, 16, 16]} position={v}>
            <meshStandardMaterial color={nodeColor} roughness={0.2} metalness={0.8} />
          </Sphere>
        ))}
        
        {/* Inner Core (Pore Volume / Captured Gas) */}
        <Sphere args={[variant === 'hero' ? 1.2 : 0.9, 32, 32]}>
          <meshStandardMaterial 
            color={coreColor} 
            roughness={0.1} 
            metalness={0.1} 
            transparent 
            opacity={0.4}
          />
        </Sphere>
      </group>
    </Float>
  );
}

// Main 3D Canvas component
export default function Molecule3D({ variant = 'hero' }: { variant?: 'hero' | 'overview' }) {
  return (
    <div className="w-full h-full min-h-[400px] cursor-grab active:cursor-grabbing relative z-20">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Suspense fallback={null}>
          {/* Lighting setup */}
          <ambientLight intensity={1.2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          <directionalLight position={[0, 5, 5]} intensity={1} />
          
          {/* The MOF Model */}
          <MOFStructure variant={variant} />
          
          {/* Environment and effects */}
          <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={10} blur={2} far={4} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}
