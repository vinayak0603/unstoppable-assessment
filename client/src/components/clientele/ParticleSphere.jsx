import React, { useRef, useMemo, useState } from "react";
import { useFrame, extend } from "@react-three/fiber";
import { useTexture, PerspectiveCamera, shaderMaterial, Text, Html } from "@react-three/drei";
import * as THREE from "three";

// Custom Blur Shader Material
const ImageBlurMaterial = shaderMaterial(
  {
    tDiffuse: null,
    blurAmount: 0.015,
  },
  // vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  `
    uniform sampler2D tDiffuse;
    uniform float blurAmount;
    varying vec2 vUv;
    void main() {
      vec4 sum = vec4(0.0);
      
      // 9-tap Gaussian blur
      sum += texture2D(tDiffuse, vUv + vec2(-blurAmount, -blurAmount)) * 0.077847;
      sum += texture2D(tDiffuse, vUv + vec2(0.0, -blurAmount)) * 0.123317;
      sum += texture2D(tDiffuse, vUv + vec2(blurAmount, -blurAmount)) * 0.077847;
      
      sum += texture2D(tDiffuse, vUv + vec2(-blurAmount, 0.0)) * 0.123317;
      sum += texture2D(tDiffuse, vUv + vec2(0.0, 0.0)) * 0.195346;
      sum += texture2D(tDiffuse, vUv + vec2(blurAmount, 0.0)) * 0.123317;
      
      sum += texture2D(tDiffuse, vUv + vec2(-blurAmount, blurAmount)) * 0.077847;
      sum += texture2D(tDiffuse, vUv + vec2(0.0, blurAmount)) * 0.123317;
      sum += texture2D(tDiffuse, vUv + vec2(blurAmount, blurAmount)) * 0.077847;
      
      gl_FragColor = sum;
    }
  `
);

extend({ ImageBlurMaterial });

function FlipCard({ image, texture, onImageClick, width, height }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Scale Html distanceFactor based on size
  const distanceFactor = width === 10 ? 10 : 15;

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotation goal: 0 if not hovered, Math.PI (180 deg) if hovered
      const targetRotationY = hovered ? Math.PI : 0;
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotationY,
        0.15
      );
    }
  });

  return (
    <group position={image.position} rotation={image.rotation}>
      {/* Invisible Hitbox */}
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
        }}
        onClick={(e) => {
          e.stopPropagation();
          onImageClick(image.id);
        }}
        visible={false}
      >
        <planeGeometry args={[width, height]} />
      </mesh>

      {/* Visual Component */}
      <group ref={meshRef}>
        <mesh position={[0, 0, 0.01]}>
          <planeGeometry args={[width, height]} />
          <meshBasicMaterial
            map={texture}
            transparent
            opacity={hovered ? 1 : 0.85}
          />
        </mesh>

        {/* Back Side */}
        <group rotation={[0, Math.PI, 0]} position={[0, 0, -0.01]}>
          <mesh>
            <planeGeometry args={[width, height]} />
            <imageBlurMaterial
              tDiffuse={texture}
              blurAmount={0.012}
              transparent
              opacity={0.6}
            />
          </mesh>
          <mesh position={[0, 0, 0.005]}>
            <planeGeometry args={[width, height]} />
            <meshBasicMaterial color="white" transparent opacity={0.15} />
          </mesh>
          
          <Html
            position={[0, 0, 0.02]}
            transform
            distanceFactor={distanceFactor}
            occlude
          >
            <div className="v2v-card-back-ui">
              <h2 className="v2v-card-company-back">{image.company}</h2>
              <div className="v2v-tag-container">
                {image.tags && image.tags.map((tag, i) => (
                  <span key={i} className="v2v-tag-pill">{tag}</span>
                ))}
              </div>
            </div>
          </Html>
        </group>

        {/* Border */}
        <mesh position={[0, 0, -0.02]}>
          <planeGeometry args={[width + 0.1, height + 0.1]} />
          <meshBasicMaterial color="#da251d" transparent opacity={0.4} />
        </mesh>
      </group>
    </group>
  );
}

export function ParticleSphere({ cards, isMobile, onImageClick }) {
  const ROTATION_SPEED_Y = 0.0005;

  const images = cards.map(c => c.image);
  const textures = useTexture(images);

  // Responsive dimensions
  const IMAGE_WIDTH = isMobile ? 10 : 15;
  const IMAGE_HEIGHT = isMobile ? 8 : 12;

  // Target number of slots in the circle to make it look full
  const MIN_SLOTS = 12;
  const IMAGE_COUNT_CALC = Math.max(cards.length, MIN_SLOTS);

  // Calculate radius so images sit perfectly side-by-side (arc between centers = card width)
  const GAP = isMobile ? 1.5 : 1.2; 
  const CIRCLE_RADIUS = (IMAGE_COUNT_CALC * (IMAGE_WIDTH + GAP)) / (2 * Math.PI);

  const groupRef = useRef();

  // Generate orbiting image positions in a flat circle
  const orbitingImages = useMemo(() => {
    const temp = [];
    for (let i = 0; i < IMAGE_COUNT_CALC; i++) {
      const angle = (i / IMAGE_COUNT_CALC) * Math.PI * 2;
      const cardData = cards[i % cards.length];

      const x = CIRCLE_RADIUS * Math.cos(angle);
      const y = 0;
      const z = CIRCLE_RADIUS * Math.sin(angle);

      const position = new THREE.Vector3(x, y, z);
      const center = new THREE.Vector3(0, 0, 0);
      const outwardDirection = position.clone().sub(center).normalize();

      const matrix = new THREE.Matrix4();
      // Face the camera/outward
      matrix.lookAt(position, position.clone().add(outwardDirection), new THREE.Vector3(0, 1, 0));

      const euler = new THREE.Euler().setFromRotationMatrix(matrix);

      temp.push({
        position: [x, y, z],
        rotation: [euler.x, euler.y, euler.z],
        textureIndex: i % textures.length,
        company: cardData.company,
        tags: cardData.tags,
        id: i % cards.length // Use original index for clicks
      });
    }
    return temp;
  }, [textures, IMAGE_COUNT_CALC, cards, CIRCLE_RADIUS]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += ROTATION_SPEED_Y;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Orbiting Images */}
      {orbitingImages.map((image, index) => (
        <FlipCard 
            key={`img-${index}`} 
            image={image} 
            texture={textures[image.textureIndex]} 
            onImageClick={onImageClick} 
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
        />
      ))}
    </group>
  );
}
