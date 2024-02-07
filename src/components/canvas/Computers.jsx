import {Suspense, useEffect, useState, useRef} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, useAnimations } from '@react-three/drei';
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'

import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./scene/scene.gltf');
  const { scene, animations } = useGLTF('./scene/scene.gltf');
  const { actions, ref } = useAnimations(animations);

  useEffect(() => {
    if (actions.Animation) {
      actions.Animation.play(); // Play the 'Animation' action if it exists
      console.log("animation is played")
    }
  }, [actions.Animation]);

  
  return (
    <group ref={ref}>
      <hemisphereLight intensity={0.45} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -2.4, -1.5] : [4.5, -2.2, 1.5]}
        rotation={[0, 1.32, 0]}
      />
    </group>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() =>{
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameLoop="demand"
      shadows
      //camera={{position: [15, 14, 4], fov: 25 }}
      camera={{position: [20, 6, 6], fov: 15 }}
      
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}> 
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
          target={[10, -0.26, 3.1]}
          />
          <Computers isMobile={isMobile}/>
      </Suspense>
      try{
      <EffectComposer>
        <Bloom luminanceThreshold={0.7} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.02} />
      </EffectComposer>
} catch{} 
      <Preload all/>
    </Canvas>
  )
}


export default ComputersCanvas;
//export default Computers;