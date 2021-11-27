import { color } from 'csx';
import { useControls } from 'leva';
import React, { useEffect, useRef, VFC } from 'react';
import * as THREE from 'three';
import { useHelper } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export const Lights: VFC = () => {
	return (
		<>
			<ambientLight intensity={0.05} />
			<PointLight position={[0, 3, -5]} />
		</>
	)
}

type PointLightProps = {
	position: [number, number, number]
}

const PointLight: VFC<PointLightProps> = ({ position }) => {
	// add controller
	const datas = useController()

	// add helper
	const lightRef = useRef<THREE.Light>()
	useHelper(lightRef, THREE.PointLightHelper, [datas.helper ? 1 : 0])

	const meshRef = useRef<THREE.Mesh>()
	const { scene } = useThree()

	useEffect(() => {
		if (!scene.userData.refs) scene.userData.refs = {}
		scene.userData.refs.lightMesh = meshRef
	}, [scene.userData])

	useEffect(() => {
		meshRef.current!.lookAt(0, 0, 0)
	}, [])

	return (
		<mesh ref={meshRef} position={position}>
			<circleGeometry args={[datas.size, 64]} />
			<meshBasicMaterial color={datas.color} side={THREE.DoubleSide} />
			<pointLight
				ref={lightRef}
				color={color(datas.color).lighten(0.5).toHexString()}
				intensity={1}
			/>
		</mesh>
	)
}

const useController = () => {
	const datas = useControls('light', {
		size: {
			value: 4.5,
			min: 0.2,
			max: 10,
			step: 0.1
		},
		color: '#525252',
		helper: false
	})
	return datas
}
