import React, { VFC } from 'react';
import { FallenAngel } from './components/FallenAngel';

export const App: VFC = () => {
	return (
		<div style={{ width: '100vw', height: '100vh', backgroundColor: '#000' }}>
			<FallenAngel />
		</div>
	)
}
