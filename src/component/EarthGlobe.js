import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function EarthGlobe() {
    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;

        // Scene 생성
        const scene = new THREE.Scene();

        // Camera 생성
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = 5;

        // Renderer 생성
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        // Earth 구 모델 생성
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const texture = new THREE.TextureLoader().load('https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg');
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const earth = new THREE.Mesh(geometry, material);
        scene.add(earth);

        // 렌더링 함수 정의
        const animate = function () {
            requestAnimationFrame(animate);

            // 회전 애니메이션 추가
            earth.rotation.y += 0.005;

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            container.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div ref={containerRef} />
    );
}

export default EarthGlobe;