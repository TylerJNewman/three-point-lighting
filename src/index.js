import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Canvas } from "react-three-fiber";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";

// Lights
function KeyLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}
function FillLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      intensity={brightness}
      color={color}
      position={[2, 1, 4]}
      lookAt={[0, 0, 0]}
      penumbra={2}
      castShadow
    />
  );
}
function RimLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={brightness}
      color={color}
      position={[1, 4, -2]}
      rotation={[0, 180, 0]}
      castShadow
    />
  );
}

function Sphere() {
  return (
    <mesh visible userData={{ test: "hello" }} position={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  );
}

// Geometry
function GroundPlane() {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}
function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

function App() {
  const config = { initialKLB: 5.6, initialFLB: 2.6, initialRLB: 54 };
  const { initialKLB, initialFLB, initialRLB } = config;

  const [keyLightBrightness, setKeyLightBrightness] = React.useState(
    initialKLB
  );
  const [fillLightBrightness, setFillLightBrightness] = React.useState(
    initialFLB
  );
  const [rimLightBrightness, setRimLightBrightness] = React.useState(
    initialRLB
  );
  return (
    <>
      <Header
        key={1}
        setKeyLightBrightness={setKeyLightBrightness}
        setFillLightBrightness={setFillLightBrightness}
        setRimLightBrightness={setRimLightBrightness}
        initialKLB={initialKLB}
        initialFLB={initialFLB}
        initialRLB={initialRLB}
      />
      <Canvas key={2}>
        <Sphere />
        <BackDrop />
        <GroundPlane />
        <KeyLight brightness={keyLightBrightness} color="#ffbdf4" />
        <FillLight brightness={fillLightBrightness} color="#bdefff" />
        <RimLight brightness={rimLightBrightness} color="#fff" />
      </Canvas>
      ,
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
