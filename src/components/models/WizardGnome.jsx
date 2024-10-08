/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 wizard_gnome.glb 
Author: JonathanCG (https://sketchfab.com/jonathancg)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/wizard-gnome-581405b5a63b40aba342e1356700e464
Title: Wizard Gnome
*/
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

const WizardGnome = React.memo(function WizardGnome(props) {
    const { nodes, materials } = useGLTF("/models/gnome.glb");

    const modelRef = useRef();

    useFrame((state) => {

        modelRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.5;

    });

    return (
    <group {...props} dispose={null} ref={modelRef} position={[0, -1, 0]} scale={[0.45, 0.45, 0.45]} rotation={[-1.5, 0, 0]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
                <group position={[0.016, 1.215, 0.683]}>
                    <mesh geometry={nodes.Object_23.geometry} material={materials.Haare} />
                    <mesh geometry={nodes.Object_24.geometry} material={materials.Haare} />
                </group>
                <group position={[0.016, 1.61, 0]}>
                    <mesh geometry={nodes.Object_11.geometry} material={materials.EYE} />
                    <mesh geometry={nodes.Object_12.geometry} material={materials.Haare} />
                    <mesh geometry={nodes.Object_13.geometry} material={materials.Mantel} />
                    <mesh geometry={nodes.Object_14.geometry} material={materials.Mantel} />
                    <mesh geometry={nodes.Object_15.geometry} material={materials.Mantel} />
                    <mesh geometry={nodes.Object_16.geometry} material={materials.Mantel} />
                </group>
                <group position={[0, 3.426, 0]}>
                <mesh geometry={nodes.Object_4.geometry} material={materials.Mtze} />
                <mesh geometry={nodes.Object_5.geometry} material={materials.Mtze} />
                <mesh geometry={nodes.Object_6.geometry} material={materials.Mtze} />
                <mesh geometry={nodes.Object_7.geometry} material={materials.Mtze} />
                <mesh geometry={nodes.Object_8.geometry} material={materials.Mtze} />
                <mesh geometry={nodes.Object_9.geometry} material={materials.Mtze} />
                </group>
                <group position={[0.016, 0.499, 0]} rotation={[-0.075, 0, 0]}>
                <mesh geometry={nodes.Object_18.geometry} material={materials['Material.003']} />
                <mesh geometry={nodes.Object_19.geometry} material={materials['Material.003']} />
                </group>
                <mesh geometry={nodes.Object_21.geometry} material={materials.Nase} position={[0.011, 2.068, 0.548]} />
            </group>
    </group>
      )

})

export default WizardGnome;

useGLTF.preload('/models/gnome.glb')
