import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import whaleModel from "../../assets/3dmodel/whale_model.glb";
import CanvasLoader from "./CanvasLoader";

const Whale = ({ scale, position }) => {
  const whaleRef = useRef();
  const { scene } = useGLTF(whaleModel);
  //const { scene, animations } = useGLTF(whaleModel);
  //const { actions } = useAnimations(animations, whaleRef);

  // useEffect(() => {
  //   actions["Idle"].play();
  // }, [actions]);

  return (
    <mesh ref={whaleRef} position={position} scale={scale} rotation={[2, 3, 2]}>
      <primitive object={scene} />
    </mesh>
  );
};

const WhaleCanvas = ({ scrollContainer }) => {

  console.log("ref:",scrollContainer.current)
  const [rotationX, setRotationX] = useState(220);
  const [rotationY, setRotationY] = useState(5000);
  const [scale, setScale] = useState([2, 2, 2]);
  const [position, setPosition] = useState([0.2, -0.7, 0]);

  useEffect(() => {
    const handleScroll = () => {
      // const scrollTop = scrollContainer.current.scrollTop;
      // const rotationXValue = window.pageYOffset * -1;
      // const rotationYValue = window.pageYOffset * -0.00075;
      // console.log("X:",rotationXValue)
      // console.log("Y:",rotationYValue)
      // setRotationX(rotationXValue);
      // setRotationY(rotationYValue);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setScale([.008, .008, .008]);
        setPosition([-1, -1, -1]);
      }
      // } else if (window.innerWidth < 1024) {
      //   setScale([1.33, 1.33, 1.33]);
      //   setPosition([0.2, -0.3, 0]);
      // } else if (window.innerWidth < 1280) {
      //   setScale([1.5, 1.5, 1.5]);
      //   setPosition([0.2, -0.4, 0]);
      // } else if (window.innerWidth < 1536) {
      //   setScale([1.66, 1.66, 1.66]);
      //   setPosition([0.2, -0.5, 0]);
      // } else {
      //   setScale([2, 2, 2]);
      //   setPosition([0.2, -0.7, 0]);
      // }
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollContainer]);

  return (
    <Canvas className={`w-full h-screen bg-transparent z-1 whaleCanvas`} camera={{ near: 0.1, far: 1000 }}>
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

        <Whale classname="whale" rotationX={rotationX} rotationY={rotationY} scale={scale} position={position} />
      </Suspense>
    </Canvas>
  );
};

export default WhaleCanvas;