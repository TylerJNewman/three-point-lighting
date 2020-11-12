import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Canvas } from "react-three-fiber";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";

const config = {
  initialKLB: 5.6,
  initialFLB: 2.6,
  initialRLB: 54,
  initX: 0,
  initY: -1,
  initZ: -5,
};

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

function Sphere({ x = 0, y = 0, z = 0 }) {
  return (
    <mesh userData={{ test: "hello" }} position={[x, y, z]} castShadow>
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
function GroundPlane({ x = 5, y = 0, z = 0 }) {
  return (
    <mesh receiveShadow rotation={[x, y, z]} position={[0, -1, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}
function BackDrop({ x = 0, y = -1, z = -5 }) {
  return (
    <mesh receiveShadow position={[x, y, z]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

function App() {
  const { initialKLB, initialFLB, initialRLB, initX, initY, initZ } = config;

  const [keyLightBrightness, setKeyLightBrightness] = React.useState(
    initialKLB
  );
  const [fillLightBrightness, setFillLightBrightness] = React.useState(
    initialFLB
  );
  const [rimLightBrightness, setRimLightBrightness] = React.useState(
    initialRLB
  );

  const [x, setX] = React.useState(initX);
  const [y, setY] = React.useState(initY);
  const [z, setZ] = React.useState(initZ);

  const onSliderChange = (setStateFn) => (event, value) => {
    setStateFn(value);
  };

  console.log("z", z);
  return (
    <>
      <Header
        onSliderChange={[
          setKeyLightBrightness,
          setFillLightBrightness,
          setRimLightBrightness,
        ].map((setStateFn) => onSliderChange(setStateFn))}
        values={[keyLightBrightness, fillLightBrightness, rimLightBrightness]}
        maxValues={[initialKLB * 2, initialFLB * 2, initialRLB * 1.5]}
        minValues={[0, 0, 0]}
        steps={[0.1, 0.1, 0.1]}
      />
      <Header
        onSliderChange={[setX, setY, setZ].map((setStateFn) =>
          onSliderChange(setStateFn)
        )}
        values={[x, y, z]}
        maxValues={[5, 5, 0]}
        minValues={[-5, -5, -10]}
        steps={[0.1, 0.1, 0.1]}
      />
      <Canvas>
        <Sphere />
        <BackDrop x={x} y={y} z={z} />
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
