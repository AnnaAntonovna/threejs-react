import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

import CanvasLoader from "../Loader";

export let done = false;

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./scene/scene.gltf");
  const { scene, animations } = useGLTF("./scene/scene.gltf");
  const { actions, ref } = useAnimations(animations);

  useEffect(() => {
    if (actions.Animation) {
      actions.Animation.play(); // Play the 'Animation' action if it exists
      console.log("animation is played");
      done = true;
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
        position={isMobile ? [0, -2.4, -1.5] : [4.3, -2.2, 2.5]}
        rotation={[0, 1.6, 0]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const handleContextLost = (e) => {
      e.preventDefault();
      alert("WebGL context lost. Reloading the page.");
      window.location.reload();
    };

    const canvasElement = canvasRef.current?.gl.domElement;
    if (canvasElement) {
      canvasElement.addEventListener(
        "webglcontextlost",
        handleContextLost,
        false
      );
    }

    return () => {
      if (canvasElement) {
        canvasElement.removeEventListener(
          "webglcontextlost",
          handleContextLost,
          false
        );
      }
    };
  }, []);

  return (
    <Canvas
      frameLoop="demand"
      shadows
      //camera={{position: [15, 14, 4], fov: 25 }}
      camera={{ position: [20, 6, 6], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          target={[10, -0.26, 3.1]}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      {/* try
      {
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.7}
            luminanceSmoothing={0.9}
            height={300}
          />
        </EffectComposer>
      }{" "}
      catch{} */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
//export default Computers;
