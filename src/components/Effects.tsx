import { useControls } from 'leva';
import React, { useEffect, useState, VFC } from 'react';
import THREE from 'three';
import { useThree } from '@react-three/fiber';
import { EffectComposer, GodRays } from '@react-three/postprocessing';

export const Effects: VFC = () => {
	// add controller
	const datas = useController()

	const [lightMesh, setLightMesh] = useState<
		React.MutableRefObject<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>
	>()

	const { scene } = useThree()

	useEffect(() => {
		if (scene.userData.refs && scene.userData.refs.lightMesh) {
			const lightMeshRef = scene.userData.refs.lightMesh
			setLightMesh(lightMeshRef)
		}
	}, [scene.userData.refs])

	return (
		<EffectComposer>
			<>{lightMesh && datas.enabled && <GodRays sun={lightMesh.current!} {...datas} />}</>
		</EffectComposer>
	)
}

const useController = () => {
	const datas = useControls('godray', {
		enabled: true,
		samples: {
			value: 100,
			min: 10,
			max: 200,
			step: 10
		},
		density: {
			value: 0.96,
			min: 0,
			max: 1,
			step: 0.01
		},
		decay: {
			value: 0.98,
			min: 0,
			max: 1,
			step: 0.01
		},
		weight: {
			value: 0.3,
			min: 0,
			max: 1,
			step: 0.01
		},
		exposure: {
			value: 1,
			min: 0,
			max: 1,
			step: 0.01
		},
		blur: {
			value: 0,
			min: 0,
			max: 1,
			step: 0.01
		}
	})
	return datas
}
