import { useControls } from 'leva';
import React, { Suspense, VFC } from 'react';
import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Effects } from './Effects';
import { Lights } from './Lights';
import { Model } from './Model';

export const FallenAngel: VFC = () => {
	const datas = useControls('Scene', { bgColor: '#000' })

	return (
		<Canvas
			camera={{
				position: [0, -1.5, 3],
				fov: 50,
				aspect: window.innerWidth / window.innerHeight,
				near: 0.1,
				far: 2000
			}}
			dpr={window.devicePixelRatio}
			shadows>
			{/* canvas color */}
			<color attach="background" args={[datas.bgColor]} />
			{/* fps */}
			<Stats />
			{/* camera controller */}
			<OrbitControls />
			{/* lights */}
			<Lights />
			{/* objects */}
			<Suspense fallback={null}>
				<Model position={[0, 0.3, 0]} />
			</Suspense>
			{/* effects */}
			<Effects />
			{/* helper */}
			{/* <axesHelper /> */}
		</Canvas>
	)
}
