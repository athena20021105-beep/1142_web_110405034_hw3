"use client"

import Image from "next/image";
import { Canvas } from "@react-three/fiber"
import { Box, Effects, Environment, OrbitControls, RoundedBox } from "@react-three/drei";
import Tree from "@/component/tree";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function Showroom() {
  //3D 模型預覽說明瀏覽器

  return (
    <>
      <Canvas style={{ width: "100%", height: "100vh" }}>

        <Environment preset="forest" background={true} backgroundBlurriness={0.5} />
        <OrbitControls autoRotate={true} />

        {/* <Box position={[-2, 0, 0]}>
          <meshStandardMaterial color="red" />
        </Box> */}

        <Tree position={[-2, 0, 0]} />
        <Tree position={[0, 0, 0]} />
        <Tree position={[2, 0, 0]} />

        <RoundedBox>
          <meshStandardMaterial color="green" />
        </RoundedBox>

        <EffectComposer>
          <Bloom intensity={2.0} />
        </EffectComposer>

        {/* <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 1]} intensity={1} color="white" /> */}

      </Canvas>
    </>
  );
}
