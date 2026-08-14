'use client';

import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Maximize2, Minimize2, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import * as THREE from 'three';
import { MarkerPin3D } from './markers/MarkerPin3D';
import { Marker } from './markers/MarkerOverlay';

interface ModelLoaderInnerProps {
  url: string;
  isPlacementMode?: boolean;
  onPlaceMarker?: (x: number, y: number, z: number) => void;
  markers?: Marker[];
  activeMarkerId?: string | null;
  onMarkerClick?: (id: string) => void;
}

function ModelLoaderInner({ 
  url, 
  isPlacementMode, 
  onPlaceMarker, 
  markers = [], 
  activeMarkerId,
  onMarkerClick 
}: ModelLoaderInnerProps) {
  const group = useRef<THREE.Group>(null);
  const [error, setError] = useState(false);
  
  const { scene } = useGLTF(url, true, undefined, (err) => {
    console.error('GLTF load error:', err);
    setError(true);
  });

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene]);

  if (error) {
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ef4444" opacity={0.3} transparent wireframe />
      </mesh>
    );
  }

  return (
    <group ref={group}>
      <primitive 
        object={scene} 
        onPointerDown={(e: any) => {
          if (isPlacementMode && onPlaceMarker) {
            e.stopPropagation();
            onPlaceMarker(e.point.x, e.point.y, e.point.z);
          }
        }}
      />
      {markers.map((marker) => (
        <MarkerPin3D
          key={marker.id}
          position={[marker.positionX, marker.positionY, marker.positionZ]}
          color={marker.color}
          label={marker.label}
          isActive={activeMarkerId === marker.id}
          onClick={() => onMarkerClick?.(marker.id)}
        />
      ))}
    </group>
  );
}

interface ModelViewerProps {
  url: string;
  isPlacementMode?: boolean;
  onPlaceMarker?: (x: number, y: number, z: number) => void;
  markers?: Marker[];
  activeMarkerId?: string | null;
  onMarkerClick?: (id: string) => void;
}

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center rounded-xl bg-navy-light">
      <div className="text-center">
        <motion.div
          className="w-12 h-12 mx-auto mb-3 border-2 border-sky-500/30 border-t-sky-400 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <p className="text-sm text-slate-500">Memuat model 3D...</p>
      </div>
    </div>
  );
}

export function ModelViewer({ 
  url, 
  isPlacementMode, 
  onPlaceMarker, 
  markers, 
  activeMarkerId,
  onMarkerClick 
}: ModelViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={`relative ${isFullscreen ? 'fixed inset-0 z-[100] bg-navy rounded-none' : 'w-full h-full rounded-xl overflow-hidden'} bg-navy-light`}
    >
      <Canvas
        camera={{ position: [0, 2, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className={`!bg-transparent ${isPlacementMode ? 'cursor-crosshair' : ''}`}
      >
        <color attach="background" args={['#040b18']} />
        <fog attach="fog" args={['#040b18', 8, 30]} />

        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#e2e8f0" />
        <directionalLight position={[-3, 3, -3]} intensity={0.4} color="#38bdf8" />
        <pointLight position={[0, 5, 0]} intensity={0.5} color="#06b6d4" />

        <Suspense
          fallback={
            <mesh>
              <sphereGeometry args={[0.8, 16, 16]} />
              <meshStandardMaterial color="#38bdf8" wireframe opacity={0.3} transparent />
            </mesh>
          }
        >
          <ModelLoaderInner 
            url={url} 
            isPlacementMode={isPlacementMode}
            onPlaceMarker={onPlaceMarker}
            markers={markers}
            activeMarkerId={activeMarkerId}
            onMarkerClick={onMarkerClick}
          />
        </Suspense>

        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.3}
          scale={10}
          blur={2.5}
          far={4}
          color="#040b18"
        />

        <OrbitControls
          makeDefault
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          autoRotate={!isPlacementMode && !activeMarkerId} // Stop rotation when placing or selecting
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI}
          minDistance={1}
          maxDistance={20}
        />
      </Canvas>

      {/* Controls */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <Button
          size="icon"
          variant="ghost"
          className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/70 hover:bg-white/20 hover:text-white"
          onClick={() => setIsFullscreen(!isFullscreen)}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </Button>
      </div>

      {/* Hint */}
      <div className="absolute bottom-4 left-4 text-[11px] text-slate-500">
        {isPlacementMode ? (
          <span className="text-sky-400 font-medium bg-navy/80 px-2 py-1 rounded">Klik pada model untuk menambahkan penanda</span>
        ) : (
          'Drag untuk rotasi • Scroll untuk zoom'
        )}
      </div>
    </div>
  );
}

export function ModelViewerWrapper(props: ModelViewerProps) {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ModelViewer {...props} />
    </Suspense>
  );
}
