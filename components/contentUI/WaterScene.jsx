import * as THREE from 'three';
import { Suspense, useRef, useEffect } from 'react';
import {
	Canvas,
	extend,
	useThree,
	useLoader,
	useFrame,
} from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
import { Water } from 'three-stdlib';

extend({ Water });

function Ocean() {
	const ref = useRef();
	const { gl } = useThree();

	// Load water texture
	const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg');
	waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

	// Smooth mouse movement tracking
	const targetMouse = useRef(new THREE.Vector2(0, 0));
	const smoothedMouse = useRef(new THREE.Vector2(0, 0));

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handlePointerMove = (event) => {
				targetMouse.current.set(
					(event.clientX / window.innerWidth - 0.5) * 2,
					(event.clientY / window.innerHeight - 0.5) * 2
				);
			};

			window.addEventListener('pointermove', handlePointerMove);
			return () => window.removeEventListener('pointermove', handlePointerMove);
		}
	}, []);

	// Water Shader Config
	const config = {
		textureWidth: 512,
		textureHeight: 512,
		waterNormals,
		sunDirection: new THREE.Vector3(),
		sunColor: new THREE.Color(0x333333),
		waterColor: 0x000505, // Darker water
		distortionScale: 2.5,
		fog: false,
		format: gl.encoding,
	};

	// Animate water and sun effect
	useFrame((state, delta) => {
		if (ref.current) {
			ref.current.material.uniforms.time.value += delta * 0.5;

			// Smoothly interpolate mouse movement
			smoothedMouse.current.lerp(targetMouse.current, 0.05);

			// Apply distortion effect
			ref.current.material.uniforms.distortionScale.value =
				2.5 + smoothedMouse.current.length() * 1.5;

			// Adjust sun direction smoothly
			ref.current.material.uniforms.sunDirection.value.set(
				smoothedMouse.current.x * 5,
				1,
				smoothedMouse.current.y * 5
			);

			// Dynamic sunlight effect
			const distance = smoothedMouse.current.length();
			const newSunColor = new THREE.Color().setHSL(
				0.1,
				0.5,
				0.3 + distance * 0.5
			);
			ref.current.material.uniforms.sunColor.value.copy(newSunColor);
		}
	});

	return (
		<water
			ref={ref}
			args={[new THREE.PlaneGeometry(5000, 5000, 64, 64), config]}
			rotation-x={-Math.PI / 2}
		/>
	);
}

export default function WaterScene({ enableControls = false }) {
	return (
		<Canvas camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>
			<pointLight
				color={0xffffff}
				intensity={1}
				decay={0}
				position={[100, 100, 100]}
			/>
			<pointLight
				color={0x222222}
				intensity={0.3}
				decay={0.5}
				position={[-100, -100, -100]}
			/>
			<Suspense fallback={null}>
				<Ocean />
			</Suspense>
			<Sky
				scale={2000}
				sunPosition={[250, 50, -500]} // Lower sun position for darker effect
				turbidity={0.5} // More atmospheric scattering for a deeper sky
				rayleigh={0.2} // Reduce blue light scattering for a moody effect
			/>
			{enableControls && <OrbitControls />}
		</Canvas>
	);
}
