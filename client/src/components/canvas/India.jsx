import React from 'react'
import { Suspense ,useEffect,useState , useRef} from 'react'
import {Canvas} from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls ,Preload , useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader.jsx'
const India = ({isMobile}) => {
   const meshRef = useRef()
  const car = useGLTF('./assets/earth.glb');
  return (
    <mesh ref={meshRef}
     castShadow>
      <hemisphereLight intensity={0.5} skycolor={new THREE.Color(0xffffff)}
        groundColor={new THREE.Color(0xffffff)}/>
      <directionalLight intensity={0.8} castShadow/>
      <pointLight intensity={1}/>
      <spotLight position={[-20,50,10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize = {1024}
        />
        <ambientLight intensity={0.2}/>
      <primitive object={car.scene}
        scale = {isMobile?0.6:2.5}
        position ={[2,1,2]}
        />
       
    </mesh>
  )
}

const IndiaCanvas = () =>{
  const [isMobile , setIsMobile] = useState(false)
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
     frameloop='demand'
     shadows
     dpr={[1, 2]}
     camera={{position:[20,10,8] , fov:25}}
     gl={{preserveDrawingBuffer:true}}
    >
       <Suspense fallback = {<CanvasLoader/>}>
        <OrbitControls
         autoRotate
         enableZoom = {true}

        />
        <India isMobile ={isMobile}/>
       </Suspense>
       <Preload all/>
    </Canvas>
  )
}
export default IndiaCanvas