import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
    Object_6: THREE.Mesh
    Object_8: THREE.Mesh
    Object_10: THREE.Mesh
    Object_12: THREE.Mesh
    Object_14: THREE.Mesh
    Object_16: THREE.Mesh
    Object_18: THREE.Mesh
    Object_20: THREE.Mesh
    Object_22: THREE.Mesh
    Object_24: THREE.Mesh
    Object_26: THREE.Mesh
    Object_28: THREE.Mesh
    Object_30: THREE.Mesh
    Object_32: THREE.Mesh
    Object_34: THREE.Mesh
    Object_36: THREE.Mesh
    Object_38: THREE.Mesh
    Object_40: THREE.Mesh
    Object_42: THREE.Mesh
    Object_44: THREE.Mesh
    Object_46: THREE.Mesh
    Object_48: THREE.Mesh
    Object_50: THREE.Mesh
    Object_52: THREE.Mesh
    Object_54: THREE.Mesh
    Object_56: THREE.Mesh
    Object_58: THREE.Mesh
    Object_60: THREE.Mesh
    Object_62: THREE.Mesh
    Object_64: THREE.Mesh
    Object_66: THREE.Mesh
    Object_68: THREE.Mesh
    Object_70: THREE.Mesh
    Object_72: THREE.Mesh
    Object_74: THREE.Mesh
    Object_76: THREE.Mesh
    Object_78: THREE.Mesh
    Object_80: THREE.Mesh
    Object_82: THREE.Mesh
    Object_84: THREE.Mesh
    Object_86: THREE.Mesh
    Object_88: THREE.Mesh
    Object_90: THREE.Mesh
    Object_92: THREE.Mesh
    Object_94: THREE.Mesh
    Object_96: THREE.Mesh
    Object_98: THREE.Mesh
    Object_100: THREE.Mesh
    Object_102: THREE.Mesh
    Object_104: THREE.Mesh
    Object_106: THREE.Mesh
    Object_108: THREE.Mesh
    Object_110: THREE.Mesh
    Object_112: THREE.Mesh
    Object_114: THREE.Mesh
    Object_116: THREE.Mesh
    Object_118: THREE.Mesh
    Object_120: THREE.Mesh
    Object_122: THREE.Mesh
    Object_124: THREE.Mesh
    Object_126: THREE.Mesh
    Object_128: THREE.Mesh
    Object_130: THREE.Mesh
    Object_132: THREE.Mesh
    Object_134: THREE.Mesh
    Object_136: THREE.Mesh
    Object_138: THREE.Mesh
    Object_140: THREE.Mesh
    Object_142: THREE.Mesh
    Object_144: THREE.Mesh
    Object_146: THREE.Mesh
    Object_148: THREE.Mesh
    Object_150: THREE.Mesh
    Object_152: THREE.Mesh
    Object_154: THREE.Mesh
    Object_156: THREE.Mesh
    Object_158: THREE.Mesh
    Object_160: THREE.Mesh
    Object_162: THREE.Mesh
    Object_164: THREE.Mesh
    Object_166: THREE.Mesh
    Object_168: THREE.Mesh
    Object_170: THREE.Mesh
    Object_172: THREE.Mesh
    Object_174: THREE.Mesh
    Object_176: THREE.Mesh
    Object_178: THREE.Mesh
    Object_180: THREE.Mesh
    Object_182: THREE.Mesh
    Object_184: THREE.Mesh
    Object_186: THREE.Mesh
    Object_188: THREE.Mesh
    Object_190: THREE.Mesh
    Object_192: THREE.Mesh
    Object_194: THREE.Mesh
    Object_196: THREE.Mesh
    Object_198: THREE.Mesh
    Object_200: THREE.Mesh
    Object_202: THREE.Mesh
    Object_204: THREE.Mesh
    Object_206: THREE.Mesh
    Object_208: THREE.Mesh
    Object_210: THREE.Mesh
    Object_212: THREE.Mesh
    Object_214: THREE.Mesh
    Object_216: THREE.Mesh
    Object_218: THREE.Mesh
    Object_220: THREE.Mesh
    Object_222: THREE.Mesh
    Object_224: THREE.Mesh
    Object_226: THREE.Mesh
    Object_228: THREE.Mesh
    Object_230: THREE.Mesh
    Object_232: THREE.Mesh
    Object_234: THREE.Mesh
    Object_236: THREE.Mesh
    Object_238: THREE.Mesh
    Object_240: THREE.Mesh
    Object_242: THREE.Mesh
    Object_244: THREE.Mesh
    Object_246: THREE.Mesh
    Object_248: THREE.Mesh
    Object_250: THREE.Mesh
    Object_252: THREE.Mesh
    Object_254: THREE.Mesh
    Object_256: THREE.Mesh
    Object_258: THREE.Mesh
    Object_260: THREE.Mesh
    Object_262: THREE.Mesh
    Object_264: THREE.Mesh
    Object_266: THREE.Mesh
    Object_268: THREE.Mesh
    Object_270: THREE.Mesh
    Object_272: THREE.Mesh
    Object_274: THREE.Mesh
    Object_276: THREE.Mesh
    Object_278: THREE.Mesh
    Object_280: THREE.Mesh
    Object_282: THREE.Mesh
    Object_284: THREE.Mesh
    Object_286: THREE.Mesh
    Object_288: THREE.Mesh
    Object_290: THREE.Mesh
    Object_292: THREE.Mesh
    Object_294: THREE.Mesh
    Object_296: THREE.Mesh
    Object_298: THREE.Mesh
    Object_300: THREE.Mesh
    Object_302: THREE.Mesh
    Object_304: THREE.Mesh
    Object_306: THREE.Mesh
    Object_308: THREE.Mesh
    Object_310: THREE.Mesh
    Object_312: THREE.Mesh
    Object_314: THREE.Mesh
    Object_316: THREE.Mesh
    Object_318: THREE.Mesh
    Object_320: THREE.Mesh
    Object_322: THREE.Mesh
    Object_324: THREE.Mesh
    Object_326: THREE.Mesh
    Object_328: THREE.Mesh
    Object_330: THREE.Mesh
    Object_332: THREE.Mesh
    Object_334: THREE.Mesh
    Object_336: THREE.Mesh
    Object_338: THREE.Mesh
    Object_340: THREE.Mesh
    Object_342: THREE.Mesh
    Object_344: THREE.Mesh
    Object_346: THREE.Mesh
    Object_348: THREE.Mesh
    Object_350: THREE.Mesh
    Object_352: THREE.Mesh
    Object_354: THREE.Mesh
    Object_356: THREE.Mesh
    Object_358: THREE.Mesh
    Object_360: THREE.Mesh
    Object_362: THREE.Mesh
    Object_364: THREE.Mesh
    Object_366: THREE.Mesh
    Object_368: THREE.Mesh
    Object_370: THREE.Mesh
    Object_372: THREE.Mesh
    Object_374: THREE.Mesh
    Object_376: THREE.Mesh
    Object_378: THREE.Mesh
    Object_380: THREE.Mesh
    Object_382: THREE.Mesh
    Object_384: THREE.Mesh
    Object_386: THREE.Mesh
    Object_388: THREE.Mesh
    Object_390: THREE.Mesh
    Object_392: THREE.Mesh
    Object_394: THREE.Mesh
    Object_396: THREE.Mesh
    Object_398: THREE.Mesh
    Object_400: THREE.Mesh
    Object_402: THREE.Mesh
    Object_404: THREE.Mesh
    Object_406: THREE.Mesh
    Object_408: THREE.Mesh
    Object_410: THREE.Mesh
    Object_412: THREE.Mesh
    Object_414: THREE.Mesh
    Object_416: THREE.Mesh
    Object_418: THREE.Mesh
    Object_420: THREE.Mesh
    Object_422: THREE.Mesh
    Object_424: THREE.Mesh
    Object_426: THREE.Mesh
    Object_428: THREE.Mesh
    Object_430: THREE.Mesh
    Object_432: THREE.Mesh
    Object_434: THREE.Mesh
    Object_436: THREE.Mesh
    Object_438: THREE.Mesh
    Object_440: THREE.Mesh
    Object_442: THREE.Mesh
    Object_444: THREE.Mesh
    Object_446: THREE.Mesh
    Object_448: THREE.Mesh
    Object_450: THREE.Mesh
    Object_452: THREE.Mesh
    Object_454: THREE.Mesh
    Object_456: THREE.Mesh
    Object_458: THREE.Mesh
    Object_460: THREE.Mesh
    Object_462: THREE.Mesh
    Object_464: THREE.Mesh
    Object_466: THREE.Mesh
    Object_468: THREE.Mesh
    Object_470: THREE.Mesh
    Object_472: THREE.Mesh
    Object_474: THREE.Mesh
    Object_476: THREE.Mesh
    Object_478: THREE.Mesh
    Object_480: THREE.Mesh
    Object_482: THREE.Mesh
    Object_484: THREE.Mesh
    Object_486: THREE.Mesh
    Object_488: THREE.Mesh
    Object_490: THREE.Mesh
    Object_492: THREE.Mesh
    Object_494: THREE.Mesh
    Object_496: THREE.Mesh
    Object_498: THREE.Mesh
    Object_500: THREE.Mesh
    Object_502: THREE.Mesh
    Object_504: THREE.Mesh
    Object_506: THREE.Mesh
    Object_508: THREE.Mesh
    Object_510: THREE.Mesh
    Object_512: THREE.Mesh
    Object_514: THREE.Mesh
    Object_516: THREE.Mesh
    Object_518: THREE.Mesh
    Object_520: THREE.Mesh
    Object_522: THREE.Mesh
    Object_524: THREE.Mesh
    Object_526: THREE.Mesh
    Object_528: THREE.Mesh
    Object_530: THREE.Mesh
    Object_532: THREE.Mesh
    Object_534: THREE.Mesh
    Object_536: THREE.Mesh
    Object_538: THREE.Mesh
    Object_540: THREE.Mesh
    Object_542: THREE.Mesh
    Object_544: THREE.Mesh
    Object_546: THREE.Mesh
    Object_548: THREE.Mesh
    Object_550: THREE.Mesh
    Object_552: THREE.Mesh
    Object_554: THREE.Mesh
    Object_556: THREE.Mesh
    Object_558: THREE.Mesh
    Object_560: THREE.Mesh
    Object_562: THREE.Mesh
    Object_564: THREE.Mesh
    Object_566: THREE.Mesh
    Object_568: THREE.Mesh
    Object_570: THREE.Mesh
    Object_572: THREE.Mesh
    Object_574: THREE.Mesh
    Object_576: THREE.Mesh
    Object_578: THREE.Mesh
    Object_580: THREE.Mesh
    Object_582: THREE.Mesh
    Object_584: THREE.Mesh
    Object_586: THREE.Mesh
    Object_588: THREE.Mesh
    Object_590: THREE.Mesh
    Object_592: THREE.Mesh
    Object_594: THREE.Mesh
    Object_596: THREE.Mesh
    Object_598: THREE.Mesh
    Object_600: THREE.Mesh
    Object_602: THREE.Mesh
    Object_604: THREE.Mesh
    Object_606: THREE.Mesh
    Object_608: THREE.Mesh
    Object_610: THREE.Mesh
    Object_612: THREE.Mesh
    Object_614: THREE.Mesh
    Object_616: THREE.Mesh
    Object_618: THREE.Mesh
    Object_620: THREE.Mesh
    Object_622: THREE.Mesh
    Object_624: THREE.Mesh
    Object_626: THREE.Mesh
    Object_628: THREE.Mesh
    Object_630: THREE.Mesh
    Object_632: THREE.Mesh
    Object_634: THREE.Mesh
    Object_636: THREE.Mesh
    Object_638: THREE.Mesh
    Object_640: THREE.Mesh
    Object_642: THREE.Mesh
    Object_644: THREE.Mesh
    Object_646: THREE.Mesh
    Object_648: THREE.Mesh
    Object_650: THREE.Mesh
    Object_652: THREE.Mesh
    Object_654: THREE.Mesh
    Object_656: THREE.Mesh
    Object_658: THREE.Mesh
    Object_660: THREE.Mesh
    Object_662: THREE.Mesh
    Object_664: THREE.Mesh
    Object_666: THREE.Mesh
    Object_668: THREE.Mesh
    Object_670: THREE.Mesh
    Object_672: THREE.Mesh
    Object_674: THREE.Mesh
    Object_676: THREE.Mesh
    Object_678: THREE.Mesh
    Object_680: THREE.Mesh
    Object_682: THREE.Mesh
    Object_684: THREE.Mesh
    Object_686: THREE.Mesh
    Object_688: THREE.Mesh
    Object_690: THREE.Mesh
    Object_692: THREE.Mesh
    Object_694: THREE.Mesh
    Object_696: THREE.Mesh
    Object_698: THREE.Mesh
    Object_700: THREE.Mesh
    Object_702: THREE.Mesh
    Object_704: THREE.Mesh
    Object_706: THREE.Mesh
    Object_708: THREE.Mesh
    Object_710: THREE.Mesh
    Object_712: THREE.Mesh
    Object_714: THREE.Mesh
    Object_716: THREE.Mesh
    Object_718: THREE.Mesh
    Object_720: THREE.Mesh
    Object_722: THREE.Mesh
    Object_724: THREE.Mesh
    Object_726: THREE.Mesh
    Object_728: THREE.Mesh
    Object_730: THREE.Mesh
    Object_732: THREE.Mesh
    Object_734: THREE.Mesh
    Object_736: THREE.Mesh
    Object_738: THREE.Mesh
    Object_740: THREE.Mesh
    Object_742: THREE.Mesh
    Object_744: THREE.Mesh
    Object_746: THREE.Mesh
    Object_748: THREE.Mesh
    Object_750: THREE.Mesh
    Object_752: THREE.Mesh
    Object_754: THREE.Mesh
    Object_756: THREE.Mesh
    Object_758: THREE.Mesh
    Object_760: THREE.Mesh
    Object_762: THREE.Mesh
    Object_764: THREE.Mesh
    Object_766: THREE.Mesh
    Object_768: THREE.Mesh
    Object_770: THREE.Mesh
    Object_772: THREE.Mesh
    Object_774: THREE.Mesh
    Object_776: THREE.Mesh
    Object_778: THREE.Mesh
    Object_780: THREE.Mesh
    Object_782: THREE.Mesh
    Object_784: THREE.Mesh
    Object_786: THREE.Mesh
    Object_788: THREE.Mesh
    Object_790: THREE.Mesh
    Object_792: THREE.Mesh
    Object_794: THREE.Mesh
    Object_796: THREE.Mesh
    Object_798: THREE.Mesh
    Object_800: THREE.Mesh
    Object_802: THREE.Mesh
    Object_816: THREE.Mesh
    Object_818: THREE.Mesh
    Object_820: THREE.Mesh
    Object_822: THREE.Mesh
    Object_824: THREE.Mesh
    Object_826: THREE.Mesh
    Object_828: THREE.Mesh
    Object_830: THREE.Mesh
    Object_833: THREE.Mesh
    Object_839: THREE.Mesh
    Object_852: THREE.SkinnedMesh
    Object_854: THREE.SkinnedMesh
    Object_855: THREE.SkinnedMesh
    Object_807: THREE.SkinnedMesh
    Object_809: THREE.SkinnedMesh
    Object_811: THREE.SkinnedMesh
    Object_813: THREE.SkinnedMesh
    GLTF_created_1_rootJoint: THREE.Bone
    GLTF_created_0_rootJoint: THREE.Bone
  }
  materials: {
    Light: THREE.MeshStandardMaterial
    Basket: THREE.MeshStandardMaterial
    Book: THREE.MeshStandardMaterial
    bLACK: THREE.MeshStandardMaterial
    Plush: THREE.MeshStandardMaterial
    WireMetal: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    material_11: THREE.MeshStandardMaterial
    CatEye: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    material: THREE.MeshStandardMaterial
    Springs: THREE.MeshStandardMaterial
  }
}

const BroomStick = React.memo(function BroomStick(props) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/models/the_travelers_broomstick.glb') as GLTFResult
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // Play the animation
    if (actions && actions["Action"]) {
      actions["Action"].play();
    }

    // Alternatively, play the first available animation
    if (actions && Object.keys(actions).length > 0) {
      const firstAnimation = Object.keys(actions)[0];
      actions?.[firstAnimation]?.play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, -0.5]} scale={0.75}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="particle000_0"
                position={[0.331, -1.058, -3.324]}
                rotation={[-Math.PI, -0.177, -0.372]}
                scale={0}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle001_1"
                position={[0.187, -1.164, -3.763]}
                rotation={[Math.PI, -0.693, -0.695]}
                scale={0}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle002_2"
                position={[-0.032, -1.363, -2.261]}
                rotation={[0, 0.942, -2.09]}
                scale={0}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle003_3"
                position={[-0.005, -1.378, -3.954]}
                rotation={[0, -1.496, -2.815]}
                scale={0}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle004_4"
                position={[-0.366, -1.002, -2.841]}
                rotation={[0, -0.031, 2.745]}
                scale={0}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle005_5"
                position={[0.16, -1.54, -3.057]}
                rotation={[Math.PI, 0.218, 1.259]}
                scale={0}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle006_6"
                position={[0.213, -0.816, -2.956]}
                rotation={[Math.PI, -0.16, -0.869]}
                scale={0}>
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle007_7"
                position={[-0.22, -0.998, -3.473]}
                rotation={[0, -0.45, 2.342]}
                scale={0}>
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle008_8"
                position={[-0.035, -1.434, -2.439]}
                rotation={[0, 0.813, -2.017]}
                scale={0}>
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle009_9"
                position={[0.299, -1.112, -3.506]}
                rotation={[-Math.PI, -0.259, -0.354]}
                scale={0}>
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle010_10"
                position={[-0.193, -1.143, -2.051]}
                rotation={[0, 0.66, -2.672]}
                scale={0}>
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle011_11"
                position={[-0.162, -0.764, -2.815]}
                rotation={[0, -0.542, 1.877]}
                scale={0}>
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle012_12"
                position={[0.015, -0.75, -2.972]}
                rotation={[Math.PI, -0.542, -1.264]}
                scale={0}>
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle013_13"
                position={[-0.287, -0.909, -2.264]}
                rotation={[0, 0.241, 2.826]}
                scale={0}>
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle014_14"
                position={[-0.223, -1.498, -3.067]}
                rotation={[0, 0.047, -2.348]}
                scale={0}>
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle015_15"
                position={[-0.182, -0.761, -2.752]}
                rotation={[0, -0.314, 1.843]}
                scale={0}>
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle016_16"
                position={[0.287, -1.113, -2.214]}
                rotation={[-Math.PI, 0.338, 0.176]}
                scale={0}>
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle017_17"
                position={[-0.292, -1.399, -3.487]}
                rotation={[0, -0.241, -2.826]}
                scale={0}>
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle018_18"
                position={[0.129, -1.228, -2.074]}
                rotation={[Math.PI, 1.174, 0.898]}
                scale={0}>
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle019_19"
                position={[0.229, -1.094, -3.627]}
                rotation={[Math.PI, -0.544, -0.645]}
                scale={0}>
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle020_20"
                position={[-0.384, -1.158, -3.152]}
                rotation={[0, -0.162, 2.913]}
                scale={0}>
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle021_21"
                position={[-0.278, -0.852, -2.332]}
                rotation={[0, 0.207, 2.328]}
                scale={0}>
                <mesh
                  name="Object_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle022_22"
                position={[-0.301, -1.062, -2.226]}
                rotation={[0, 0.338, -2.965]}
                scale={0}>
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_48.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle023_23"
                position={[-0.322, -0.929, -2.992]}
                rotation={[0, -0.241, 2.387]}
                scale={0}>
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle024_24"
                position={[0.286, -1.434, -3.425]}
                rotation={[-3.142, -0.068, 0.807]}
                scale={0}>
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle025_25"
                position={[-0.322, -1.133, -3.438]}
                rotation={[0, -0.242, 2.936]}
                scale={0}>
                <mesh
                  name="Object_54"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_54.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle026_26"
                position={[0.359, -1.266, -3.331]}
                rotation={[Math.PI, -0.14, 0.299]}
                scale={0}>
                <mesh
                  name="Object_56"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle027_27"
                position={[-0.354, -1.321, -2.83]}
                rotation={[0, 0.088, -2.894]}
                scale={0}>
                <mesh
                  name="Object_58"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_58.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle028_28"
                position={[-0.295, -1.331, -3.568]}
                rotation={[0, -0.241, -2.826]}
                scale={0}>
                <mesh
                  name="Object_60"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_60.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle029_29"
                position={[-0.188, -0.84, -2.072]}
                rotation={[0, 0.387, 2.333]}
                scale={0}>
                <mesh
                  name="Object_62"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_62.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle030_30"
                position={[-0.316, -1.028, -3.331]}
                rotation={[0, -0.335, 2.414]}
                scale={0}>
                <mesh
                  name="Object_64"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle031_31"
                position={[0.083, -1.281, -3.932]}
                rotation={[Math.PI, -1.071, -0.269]}
                scale={0}>
                <mesh
                  name="Object_66"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle032_32"
                position={[-0.03, -1.58, -3.442]}
                rotation={[0, -0.36, -1.836]}
                scale={0}>
                <mesh
                  name="Object_68"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_68.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle033_33"
                position={[-0.012, -1.34, -2.211]}
                rotation={[0, 1.075, -2.127]}
                scale={0}>
                <mesh
                  name="Object_70"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle034_34"
                position={[-0.281, -1.182, -3.606]}
                rotation={[0, -0.338, 2.965]}
                scale={0}>
                <mesh
                  name="Object_72"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_72.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle035_35"
                position={[-0.09, -0.928, -1.87]}
                rotation={[0, 0.853, 2.789]}
                scale={0}>
                <mesh
                  name="Object_74"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_74.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle036_36"
                position={[0.153, -1.303, -2.22]}
                rotation={[Math.PI, 1.075, 1.015]}
                scale={0}>
                <mesh
                  name="Object_76"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_76.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle037_37"
                position={[0.086, -0.751, -2.148]}
                rotation={[-Math.PI, 0.742, -1.249]}
                scale={0}>
                <mesh
                  name="Object_78"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_78.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle038_38"
                position={[0.195, -0.766, -2.408]}
                rotation={[Math.PI, 0.068, -0.807]}
                scale={0}>
                <mesh
                  name="Object_80"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_80.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle039_39"
                position={[0.007, -1.182, -3.909]}
                rotation={[Math.PI, -1.274, -0.725]}
                scale={0}>
                <mesh
                  name="Object_82"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_82.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle040_40"
                position={[0.223, -1.305, -2.349]}
                rotation={[Math.PI, 0.433, 0.693]}
                scale={0}>
                <mesh
                  name="Object_84"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_84.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle041_41"
                position={[0.36, -0.992, -2.977]}
                rotation={[Math.PI, -0.088, -0.248]}
                scale={0}>
                <mesh
                  name="Object_86"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_86.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle042_42"
                position={[-0.015, -1.477, -2.575]}
                rotation={[0, 0.854, -1.975]}
                scale={0}>
                <mesh
                  name="Object_88"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_88.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle043_43"
                position={[0.288, -0.85, -2.663]}
                rotation={[Math.PI, -0.047, -0.794]}
                scale={0}>
                <mesh
                  name="Object_90"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_90.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle044_44"
                position={[0.369, -1.104, -2.52]}
                rotation={[Math.PI, 0.162, 0.228]}
                scale={0}>
                <mesh
                  name="Object_92"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_92.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle045_45"
                position={[0.331, -1.3, -2.619]}
                rotation={[Math.PI, 0.335, 0.728]}
                scale={0}>
                <mesh
                  name="Object_94"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_94.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle046_46"
                position={[0.234, -0.821, -2.286]}
                rotation={[-Math.PI, 0.207, -0.814]}
                scale={0}>
                <mesh
                  name="Object_96"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_96.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle047_47"
                position={[0.168, -0.77, -2.234]}
                rotation={[-Math.PI, 0.207, -0.814]}
                scale={0}>
                <mesh
                  name="Object_98"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_98.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle048_48"
                position={[-0.366, -1.044, -2.475]}
                rotation={[0, 0.14, 2.843]}
                scale={0}>
                <mesh
                  name="Object_100"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_100.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle049_49"
                position={[-0.229, -1.468, -3.535]}
                rotation={[0, -0.207, -2.328]}
                scale={0}>
                <mesh
                  name="Object_102"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_102.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle050_50"
                position={[-0.037, -1.488, -2.636]}
                rotation={[0, 0.716, -1.921]}
                scale={0}>
                <mesh
                  name="Object_104"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_104.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle051_51"
                position={[-0.339, -0.932, -2.927]}
                rotation={[0, -0.147, 2.366]}
                scale={0}>
                <mesh
                  name="Object_106"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_106.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle052_52"
                position={[-0.076, -0.853, -1.913]}
                rotation={[0, 0.963, 2.473]}
                scale={0}>
                <mesh
                  name="Object_108"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_108.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle053_53"
                position={[0.35, -1.037, -3.182]}
                rotation={[Math.PI, -0.162, -0.228]}
                scale={0}>
                <mesh
                  name="Object_110"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_110.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle054_54"
                position={[-0.101, -1.509, -3.749]}
                rotation={[0, -1.064, -2.019]}
                scale={0}>
                <mesh
                  name="Object_112"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_112.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle055_55"
                position={[0.193, -0.824, -2.129]}
                rotation={[-Math.PI, 0.387, -0.808]}
                scale={0}>
                <mesh
                  name="Object_114"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_114.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle056_56"
                position={[-0.058, -1.222, -3.923]}
                rotation={[0, -1.381, 2.693]}
                scale={0}>
                <mesh
                  name="Object_116"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_116.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle057_57"
                position={[0.4, -1.154, -2.871]}
                rotation={[Math.PI, 0.088, 0.248]}
                scale={0}>
                <mesh
                  name="Object_118"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_118.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle058_58"
                position={[-0.287, -0.909, -2.264]}
                rotation={[0, 0.241, 2.826]}
                scale={0}>
                <mesh
                  name="Object_120"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_120.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle059_59"
                position={[0.227, -0.801, -2.806]}
                rotation={[Math.PI, -0.147, -0.776]}
                scale={0}>
                <mesh
                  name="Object_122"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_122.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle060_60"
                position={[0.338, -1.271, -3.465]}
                rotation={[Math.PI, -0.14, 0.299]}
                scale={0}>
                <mesh
                  name="Object_124"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_124.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle061_61"
                position={[-0.263, -1.461, -3.357]}
                rotation={[0, -0.068, -2.335]}
                scale={0}>
                <mesh
                  name="Object_126"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_126.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle062_62"
                position={[0.318, -1.33, -2.675]}
                rotation={[-Math.PI, 0.241, 0.754]}
                scale={0}>
                <mesh
                  name="Object_128"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_128.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle063_63"
                position={[0.29, -1.303, -3.629]}
                rotation={[Math.PI, -0.241, 0.316]}
                scale={0}>
                <mesh
                  name="Object_130"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_130.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle064_64"
                position={[-0.241, -1.351, -3.715]}
                rotation={[0, -0.372, -2.808]}
                scale={0}>
                <mesh
                  name="Object_132"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_132.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle065_65"
                position={[-0.195, -1.298, -2.276]}
                rotation={[0, 0.433, -2.449]}
                scale={0}>
                <mesh
                  name="Object_134"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_134.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle066_66"
                position={[0.354, -0.958, -2.92]}
                rotation={[Math.PI, -0.017, -0.265]}
                scale={0}>
                <mesh
                  name="Object_136"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_136.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle067_67"
                position={[0.37, -1.022, -2.621]}
                rotation={[Math.PI, 0.057, -0.282]}
                scale={0}>
                <mesh
                  name="Object_138"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_138.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle068_68"
                position={[-0.189, -1.41, -3.78]}
                rotation={[0, -0.56, -2.791]}
                scale={0}>
                <mesh
                  name="Object_140"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_140.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle069_69"
                position={[-0.208, -1.419, -2.589]}
                rotation={[0, 0.335, -2.414]}
                scale={0}>
                <mesh
                  name="Object_142"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_142.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle070_70"
                position={[-0.052, -0.995, -3.652]}
                rotation={[0, -1.075, 2.127]}
                scale={0}>
                <mesh
                  name="Object_144"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_144.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle071_71"
                position={[0.359, -1.266, -3.331]}
                rotation={[Math.PI, -0.14, 0.299]}
                scale={0}>
                <mesh
                  name="Object_146"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_146.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle072_72"
                position={[0.015, -0.798, -3.177]}
                rotation={[Math.PI, -0.716, -1.22]}
                scale={0}>
                <mesh
                  name="Object_148"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_148.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle073_73"
                position={[0.25, -1.457, -2.945]}
                rotation={[-Math.PI, 0.147, 0.776]}
                scale={0}>
                <mesh
                  name="Object_150"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_150.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle074_74"
                position={[-0.09, -0.928, -1.87]}
                rotation={[0, 0.853, 2.789]}
                scale={0}>
                <mesh
                  name="Object_152"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_152.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle075_75"
                position={[0.245, -0.864, -2.164]}
                rotation={[-Math.PI, 0.372, -0.334]}
                scale={0}>
                <mesh
                  name="Object_154"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_154.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle076_76"
                position={[0.35, -1.333, -3.189]}
                rotation={[Math.PI, -0.057, 0.282]}
                scale={0}>
                <mesh
                  name="Object_156"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_156.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle077_77"
                position={[0.294, -1.435, -3.289]}
                rotation={[-3.142, -0.068, 0.807]}
                scale={0}>
                <mesh
                  name="Object_158"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_158.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle078_78"
                position={[-0.31, -0.868, -2.518]}
                rotation={[0, 0.068, 2.335]}
                scale={0}>
                <mesh
                  name="Object_160"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_160.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle079_79"
                position={[0.128, -0.868, -3.304]}
                rotation={[-Math.PI, -0.854, -1.166]}
                scale={0}>
                <mesh
                  name="Object_162"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_162.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle080_80"
                position={[0.035, -0.711, -2.618]}
                rotation={[-Math.PI, -0.314, -1.298]}
                scale={0}>
                <mesh
                  name="Object_164"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_164.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle081_81"
                position={[0.175, -0.752, -2.357]}
                rotation={[-Math.PI, 0.207, -0.814]}
                scale={0}>
                <mesh
                  name="Object_166"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_166.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle082_82"
                position={[0.322, -1.361, -3.382]}
                rotation={[Math.PI, -0.14, 0.299]}
                scale={0}>
                <mesh
                  name="Object_168"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_168.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle083_83"
                position={[0.013, -1.21, -3.926]}
                rotation={[Math.PI, -1.381, -0.448]}
                scale={0}>
                <mesh
                  name="Object_170"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_170.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle084_84"
                position={[0.391, -1.112, -2.665]}
                rotation={[Math.PI, 0.162, 0.228]}
                scale={0}>
                <mesh
                  name="Object_172"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_172.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle085_85"
                position={[0.116, -1.467, -3.805]}
                rotation={[Math.PI, -0.631, 0.774]}
                scale={0}>
                <mesh
                  name="Object_174"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_174.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle086_86"
                position={[0.262, -1.45, -3.474]}
                rotation={[-Math.PI, -0.207, 0.814]}
                scale={0}>
                <mesh
                  name="Object_176"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_176.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle087_87"
                position={[-0.014, -1.414, -2.383]}
                rotation={[0, 0.971, -2.042]}
                scale={0}>
                <mesh
                  name="Object_178"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_178.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle088_88"
                position={[-0.287, -0.909, -2.264]}
                rotation={[0, 0.241, 2.826]}
                scale={0}>
                <mesh
                  name="Object_180"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_180.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle089_89"
                position={[-0.113, -1.266, -3.912]}
                rotation={[0, -1.071, 2.873]}
                scale={0}>
                <mesh
                  name="Object_182"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_182.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle090_90"
                position={[-0.143, -1.412, -3.852]}
                rotation={[0, -0.56, -2.791]}
                scale={0}>
                <mesh
                  name="Object_184"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_184.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle091_91"
                position={[-0.128, -1.549, -3.135]}
                rotation={[0, 0.314, -1.843]}
                scale={0}>
                <mesh
                  name="Object_186"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_186.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle092_92"
                position={[0.223, -0.888, -3.219]}
                rotation={[Math.PI, -0.335, -0.728]}
                scale={0}>
                <mesh
                  name="Object_188"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_188.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle093_93"
                position={[0.182, -1.434, -2.585]}
                rotation={[Math.PI, 0.854, 1.166]}
                scale={0}>
                <mesh
                  name="Object_190"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_190.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle094_94"
                position={[-0.299, -1.369, -2.749]}
                rotation={[0, 0.241, -2.387]}
                scale={0}>
                <mesh
                  name="Object_192"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_192.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle095_95"
                position={[0.037, -0.732, -2.823]}
                rotation={[Math.PI, -0.542, -1.264]}
                scale={0}>
                <mesh
                  name="Object_194"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_194.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle096_96"
                position={[-0.245, -1.141, -3.669]}
                rotation={[0, -0.544, 2.497]}
                scale={0}>
                <mesh
                  name="Object_196"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_196.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle097_97"
                position={[0.365, -1.297, -2.984]}
                rotation={[Math.PI, 0.017, 0.265]}
                scale={0}>
                <mesh
                  name="Object_198"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_198.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle098_98"
                position={[0.294, -1.435, -3.289]}
                rotation={[-3.142, -0.068, 0.807]}
                scale={0}>
                <mesh
                  name="Object_200"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_200.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle099_99"
                position={[-0.195, -1.359, -2.397]}
                rotation={[0, 0.433, -2.449]}
                scale={0}>
                <mesh
                  name="Object_202"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_202.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle100_100"
                position={[-0.053, -0.719, -2.311]}
                rotation={[0, 0.36, 1.836]}
                scale={0}>
                <mesh
                  name="Object_204"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_204.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle101_101"
                position={[-0.22, -1.148, -3.713]}
                rotation={[0, -0.676, 2.567]}
                scale={0}>
                <mesh
                  name="Object_206"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_206.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle102_102"
                position={[0.4, -1.154, -2.871]}
                rotation={[Math.PI, 0.088, 0.248]}
                scale={0}>
                <mesh
                  name="Object_208"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_208.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle103_103"
                position={[0.37, -1.022, -2.621]}
                rotation={[Math.PI, 0.057, -0.282]}
                scale={0}>
                <mesh
                  name="Object_210"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_210.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle104_104"
                position={[-0.189, -1.41, -3.78]}
                rotation={[0, -0.56, -2.791]}
                scale={0}>
                <mesh
                  name="Object_212"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_212.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle105_105"
                position={[0.015, -0.75, -2.972]}
                rotation={[Math.PI, -0.542, -1.264]}
                scale={0}>
                <mesh
                  name="Object_214"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_214.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle106_106"
                position={[-0.25, -0.878, -3.088]}
                rotation={[0, -0.241, 2.387]}
                scale={0}>
                <mesh
                  name="Object_216"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_216.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle107_107"
                position={[-0.168, -1.228, -2.12]}
                rotation={[0, 0.544, -2.497]}
                scale={0}>
                <mesh
                  name="Object_218"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_218.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle108_108"
                position={[0.245, -1.442, -3.595]}
                rotation={[-Math.PI, -0.207, 0.814]}
                scale={0}>
                <mesh
                  name="Object_220"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_220.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle109_109"
                position={[-0.298, -1.41, -2.956]}
                rotation={[0, 0.147, -2.365]}
                scale={0}>
                <mesh
                  name="Object_222"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_222.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle110_110"
                position={[0.369, -1.104, -2.52]}
                rotation={[Math.PI, 0.162, 0.228]}
                scale={0}>
                <mesh
                  name="Object_224"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_224.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle111_111"
                position={[0.158, -1.549, -3.396]}
                rotation={[Math.PI, 0.011, 1.316]}
                scale={0}>
                <mesh
                  name="Object_226"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_226.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle112_112"
                position={[0.065, -1.445, -2.516]}
                rotation={[Math.PI, 0.854, 1.166]}
                scale={0}>
                <mesh
                  name="Object_228"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_228.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle113_113"
                position={[0.037, -0.732, -2.823]}
                rotation={[Math.PI, -0.542, -1.264]}
                scale={0}>
                <mesh
                  name="Object_230"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_230.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle114_114"
                position={[-0.354, -1.321, -2.83]}
                rotation={[0, 0.088, -2.894]}
                scale={0}>
                <mesh
                  name="Object_232"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_232.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle115_115"
                position={[-0.322, -1.133, -3.438]}
                rotation={[0, -0.242, 2.936]}
                scale={0}>
                <mesh
                  name="Object_234"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_234.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle116_116"
                position={[0.065, -0.934, -1.854]}
                rotation={[-3.142, 1.31, -0.167]}
                scale={0}>
                <mesh
                  name="Object_236"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_236.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle117_117"
                position={[0.339, -1.347, -2.824]}
                rotation={[-Math.PI, 0.241, 0.754]}
                scale={0}>
                <mesh
                  name="Object_238"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_238.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle118_118"
                position={[-0.239, -0.931, -3.288]}
                rotation={[0, -0.335, 2.414]}
                scale={0}>
                <mesh
                  name="Object_240"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_240.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle119_119"
                position={[-0.269, -1.276, -3.681]}
                rotation={[0, -0.46, 3.005]}
                scale={0}>
                <mesh
                  name="Object_242"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_242.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle120_120"
                position={[-0.012, -1.34, -2.211]}
                rotation={[0, 1.075, -2.127]}
                scale={0}>
                <mesh
                  name="Object_244"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_244.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle121_121"
                position={[0.239, -1.486, -3.151]}
                rotation={[Math.PI, 0.047, 0.794]}
                scale={0}>
                <mesh
                  name="Object_246"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_246.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle122_122"
                position={[0.322, -1.375, -2.882]}
                rotation={[-Math.PI, 0.147, 0.776]}
                scale={0}>
                <mesh
                  name="Object_248"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_248.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle123_123"
                position={[0.338, -1.271, -3.465]}
                rotation={[Math.PI, -0.14, 0.299]}
                scale={0}>
                <mesh
                  name="Object_250"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_250.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle124_124"
                position={[-0.052, -0.995, -3.652]}
                rotation={[0, -1.075, 2.127]}
                scale={0}>
                <mesh
                  name="Object_252"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_252.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle125_125"
                position={[0.328, -1.087, -3.376]}
                rotation={[-Math.PI, -0.242, -0.205]}
                scale={0}>
                <mesh
                  name="Object_254"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_254.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle126_126"
                position={[0.155, -1.053, -3.691]}
                rotation={[Math.PI, -0.544, -0.645]}
                scale={0}>
                <mesh
                  name="Object_256"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_256.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle127_127"
                position={[0.239, -1.486, -3.151]}
                rotation={[Math.PI, 0.047, 0.794]}
                scale={0}>
                <mesh
                  name="Object_258"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_258.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle128_128"
                position={[-0.337, -1.219, -2.492]}
                rotation={[0, 0.162, -2.913]}
                scale={0}>
                <mesh
                  name="Object_260"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_260.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle129_129"
                position={[-0.354, -1.321, -2.83]}
                rotation={[0, 0.088, -2.894]}
                scale={0}>
                <mesh
                  name="Object_262"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_262.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle130_130"
                position={[-0.103, -1.554, -3.513]}
                rotation={[0, -0.36, -1.836]}
                scale={0}>
                <mesh
                  name="Object_264"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_264.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle131_131"
                position={[-0.032, -1.358, -2.262]}
                rotation={[0, 0.971, -2.042]}
                scale={0}>
                <mesh
                  name="Object_266"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_266.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle132_132"
                position={[0.349, -1.002, -3.127]}
                rotation={[Math.PI, -0.088, -0.248]}
                scale={0}>
                <mesh
                  name="Object_268"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_268.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle133_133"
                position={[0.337, -1.189, -3.424]}
                rotation={[-Math.PI, -0.242, -0.205]}
                scale={0}>
                <mesh
                  name="Object_270"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_270.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle134_134"
                position={[0.037, -0.732, -2.823]}
                rotation={[Math.PI, -0.542, -1.264]}
                scale={0}>
                <mesh
                  name="Object_272"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_272.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle135_135"
                position={[-0.174, -0.9, -3.362]}
                rotation={[0, -0.854, 1.975]}
                scale={0}>
                <mesh
                  name="Object_274"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_274.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle136_136"
                position={[-0.239, -0.931, -3.288]}
                rotation={[0, -0.335, 2.414]}
                scale={0}>
                <mesh
                  name="Object_276"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_276.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle137_137"
                position={[0.223, -0.888, -3.219]}
                rotation={[Math.PI, -0.335, -0.728]}
                scale={0}>
                <mesh
                  name="Object_278"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_278.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle138_138"
                position={[0.182, -1.434, -2.585]}
                rotation={[Math.PI, 0.854, 1.166]}
                scale={0}>
                <mesh
                  name="Object_280"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_280.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle139_139"
                position={[0.298, -0.925, -3.077]}
                rotation={[Math.PI, -0.241, -0.754]}
                scale={0}>
                <mesh
                  name="Object_282"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_282.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle140_140"
                position={[0.03, -0.958, -3.596]}
                rotation={[Math.PI, -1.075, -1.015]}
                scale={0}>
                <mesh
                  name="Object_284"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_284.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle141_141"
                position={[-0.204, -1.423, -3.742]}
                rotation={[0, -0.372, -2.808]}
                scale={0}>
                <mesh
                  name="Object_286"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_286.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle142_142"
                position={[-0.263, -1.461, -3.357]}
                rotation={[0, -0.068, -2.335]}
                scale={0}>
                <mesh
                  name="Object_288"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_288.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle143_143"
                position={[-0.229, -1.465, -2.859]}
                rotation={[0, 0.147, -2.365]}
                scale={0}>
                <mesh
                  name="Object_290"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_290.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle144_144"
                position={[-0.334, -0.976, -3.133]}
                rotation={[0, -0.241, 2.387]}
                scale={0}>
                <mesh
                  name="Object_292"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_292.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle145_145"
                position={[-0.37, -1.148, -2.59]}
                rotation={[0, 0.162, -2.913]}
                scale={0}>
                <mesh
                  name="Object_294"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_294.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle146_146"
                position={[-0.223, -1.498, -3.067]}
                rotation={[0, 0.047, -2.348]}
                scale={0}>
                <mesh
                  name="Object_296"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_296.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle147_147"
                position={[0.015, -0.75, -2.972]}
                rotation={[Math.PI, -0.542, -1.264]}
                scale={0}>
                <mesh
                  name="Object_298"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_298.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle148_148"
                position={[-0.043, -0.74, -2.15]}
                rotation={[0, 0.742, 1.893]}
                scale={0}>
                <mesh
                  name="Object_300"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_300.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle149_149"
                position={[0.134, -1.553, -3.449]}
                rotation={[-Math.PI, -0.36, 1.306]}
                scale={0}>
                <mesh
                  name="Object_302"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_302.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle150_150"
                position={[-0.316, -1.028, -3.331]}
                rotation={[0, -0.335, 2.414]}
                scale={0}>
                <mesh
                  name="Object_304"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_304.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle151_151"
                position={[-0.162, -0.794, -2.137]}
                rotation={[0, 0.387, 2.333]}
                scale={0}>
                <mesh
                  name="Object_306"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_306.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle152_152"
                position={[-0.355, -1.268, -2.691]}
                rotation={[0, 0.088, -2.894]}
                scale={0}>
                <mesh
                  name="Object_308"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_308.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle153_153"
                position={[-0.4, -1.124, -2.879]}
                rotation={[0, -0.017, 2.877]}
                scale={0}>
                <mesh
                  name="Object_310"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_310.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle154_154"
                position={[-0.128, -1.549, -3.135]}
                rotation={[0, 0.314, -1.843]}
                scale={0}>
                <mesh
                  name="Object_312"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_312.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle155_155"
                position={[0.269, -1.325, -3.669]}
                rotation={[-Math.PI, -0.372, 0.334]}
                scale={0}>
                <mesh
                  name="Object_314"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_314.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle156_156"
                position={[-0.199, -1.528, -3.207]}
                rotation={[0, 0.047, -2.348]}
                scale={0}>
                <mesh
                  name="Object_316"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_316.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle157_157"
                position={[-0.086, -1.211, -2.034]}
                rotation={[0, 1.174, -2.244]}
                scale={0}>
                <mesh
                  name="Object_318"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_318.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle158_158"
                position={[0.168, -0.77, -2.234]}
                rotation={[-Math.PI, 0.207, -0.814]}
                scale={0}>
                <mesh
                  name="Object_320"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_320.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle159_159"
                position={[-0.334, -0.976, -3.133]}
                rotation={[0, -0.241, 2.387]}
                scale={0}>
                <mesh
                  name="Object_322"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_322.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle160_160"
                position={[-0.162, -0.794, -2.137]}
                rotation={[0, 0.387, 2.333]}
                scale={0}>
                <mesh
                  name="Object_324"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_324.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle161_161"
                position={[0.245, -1.191, -3.702]}
                rotation={[Math.PI, -0.46, -0.136]}
                scale={0}>
                <mesh
                  name="Object_326"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_326.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle162_162"
                position={[-0.123, -1.508, -3.721]}
                rotation={[0, -0.387, -2.333]}
                scale={0}>
                <mesh
                  name="Object_328"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_328.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle163_163"
                position={[-0.187, -1.463, -3.688]}
                rotation={[0, -0.387, -2.333]}
                scale={0}>
                <mesh
                  name="Object_330"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_330.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle164_164"
                position={[-0.306, -1.168, -2.309]}
                rotation={[0, 0.242, -2.936]}
                scale={0}>
                <mesh
                  name="Object_332"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_332.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle165_165"
                position={[0.013, -0.93, -3.55]}
                rotation={[Math.PI, -0.971, -1.1]}
                scale={0}>
                <mesh
                  name="Object_334"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_334.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle166_166"
                position={[0.031, -1.505, -3.796]}
                rotation={[-Math.PI, -1.064, 1.123]}
                scale={0}>
                <mesh
                  name="Object_336"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_336.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle167_167"
                position={[0.096, -1.176, -1.989]}
                rotation={[Math.PI, 1.174, 0.898]}
                scale={0}>
                <mesh
                  name="Object_338"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_338.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle168_168"
                position={[-0.245, -1.141, -3.669]}
                rotation={[0, -0.544, 2.497]}
                scale={0}>
                <mesh
                  name="Object_340"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_340.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle169_169"
                position={[0.37, -1.022, -2.621]}
                rotation={[Math.PI, 0.057, -0.282]}
                scale={0}>
                <mesh
                  name="Object_342"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_342.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle170_170"
                position={[-0.306, -1.168, -2.309]}
                rotation={[0, 0.242, -2.936]}
                scale={0}>
                <mesh
                  name="Object_344"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_344.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle171_171"
                position={[0.158, -1.549, -3.396]}
                rotation={[Math.PI, 0.011, 1.316]}
                scale={0}>
                <mesh
                  name="Object_346"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_346.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle172_172"
                position={[-0.119, -1.363, -2.334]}
                rotation={[0, 0.971, -2.042]}
                scale={0}>
                <mesh
                  name="Object_348"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_348.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle173_173"
                position={[0.209, -0.947, -3.41]}
                rotation={[-Math.PI, -0.433, -0.693]}
                scale={0}>
                <mesh
                  name="Object_350"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_350.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle174_174"
                position={[0.087, -1.207, -3.903]}
                rotation={[-Math.PI, -0.844, -0.462]}
                scale={0}>
                <mesh
                  name="Object_352"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_352.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle175_175"
                position={[-0.299, -1.369, -2.749]}
                rotation={[0, 0.241, -2.387]}
                scale={0}>
                <mesh
                  name="Object_354"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_354.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle176_176"
                position={[-0.12, -0.743, -2.241]}
                rotation={[0, 0.36, 1.836]}
                scale={0}>
                <mesh
                  name="Object_356"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_356.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle177_177"
                position={[0.187, -1.484, -2.79]}
                rotation={[Math.PI, 0.716, 1.22]}
                scale={0}>
                <mesh
                  name="Object_358"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_358.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle178_178"
                position={[-0.299, -1.369, -2.749]}
                rotation={[0, 0.241, -2.387]}
                scale={0}>
                <mesh
                  name="Object_360"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_360.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle179_179"
                position={[-0.016, -1.109, -1.896]}
                rotation={[0, 1.274, -2.417]}
                scale={0}>
                <mesh
                  name="Object_362"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_362.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle180_180"
                position={[-0.21, -1.505, -3.002]}
                rotation={[0, 0.147, -2.365]}
                scale={0}>
                <mesh
                  name="Object_364"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_364.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle181_181"
                position={[-0.295, -1.331, -3.568]}
                rotation={[0, -0.241, -2.826]}
                scale={0}>
                <mesh
                  name="Object_366"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_366.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle182_182"
                position={[-0.162, -0.764, -2.815]}
                rotation={[0, -0.542, 1.877]}
                scale={0}>
                <mesh
                  name="Object_368"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_368.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle183_183"
                position={[-0.135, -1.042, -3.694]}
                rotation={[0, -1.075, 2.127]}
                scale={0}>
                <mesh
                  name="Object_370"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_370.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle184_184"
                position={[-0.065, -0.725, -2.695]}
                rotation={[0, -0.314, 1.843]}
                scale={0}>
                <mesh
                  name="Object_372"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_372.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle185_185"
                position={[0.369, -1.104, -2.52]}
                rotation={[Math.PI, 0.162, 0.228]}
                scale={0}>
                <mesh
                  name="Object_374"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_374.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle186_186"
                position={[-0.366, -1.044, -2.475]}
                rotation={[0, 0.14, 2.843]}
                scale={0}>
                <mesh
                  name="Object_376"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_376.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle187_187"
                position={[0.365, -1.297, -2.984]}
                rotation={[Math.PI, 0.017, 0.265]}
                scale={0}>
                <mesh
                  name="Object_378"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_378.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle188_188"
                position={[-0.369, -1.035, -2.537]}
                rotation={[0, 0.057, 2.86]}
                scale={0}>
                <mesh
                  name="Object_380"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_380.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle189_189"
                position={[-0.068, -1.467, -3.858]}
                rotation={[0, -1.309, -2.252]}
                scale={0}>
                <mesh
                  name="Object_382"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_382.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle190_190"
                position={[-0.134, -1.482, -2.721]}
                rotation={[0, 0.716, -1.921]}
                scale={0}>
                <mesh
                  name="Object_384"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_384.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle191_191"
                position={[-0.236, -0.835, -2.218]}
                rotation={[0, 0.207, 2.328]}
                scale={0}>
                <mesh
                  name="Object_386"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_386.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle192_192"
                position={[0.18, -0.981, -3.537]}
                rotation={[-Math.PI, -0.433, -0.693]}
                scale={0}>
                <mesh
                  name="Object_388"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_388.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle193_193"
                position={[-0.129, -1.428, -2.52]}
                rotation={[0, 0.854, -1.975]}
                scale={0}>
                <mesh
                  name="Object_390"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_390.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle194_194"
                position={[0.056, -0.965, -1.846]}
                rotation={[-3.142, 1.382, -0.05]}
                scale={0}>
                <mesh
                  name="Object_392"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_392.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle195_195"
                position={[-0.182, -0.761, -2.752]}
                rotation={[0, -0.314, 1.843]}
                scale={0}>
                <mesh
                  name="Object_394"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_394.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle196_196"
                position={[-0.322, -1.133, -3.438]}
                rotation={[0, -0.242, 2.936]}
                scale={0}>
                <mesh
                  name="Object_396"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_396.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle197_197"
                position={[-0.164, -0.802, -3.024]}
                rotation={[0, -0.716, 1.921]}
                scale={0}>
                <mesh
                  name="Object_398"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_398.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle198_198"
                position={[0.328, -1.034, -2.287]}
                rotation={[-Math.PI, 0.338, 0.176]}
                scale={0}>
                <mesh
                  name="Object_400"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_400.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle199_199"
                position={[0.117, -0.934, -3.487]}
                rotation={[Math.PI, -0.971, -1.1]}
                scale={0}>
                <mesh
                  name="Object_402"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_402.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle200_200"
                position={[0.331, -1.058, -3.324]}
                rotation={[Math.PI, -0.162, -0.228]}
                scale={0}>
                <mesh
                  name="Object_404"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_404.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle201_201"
                position={[0.187, -1.164, -3.763]}
                rotation={[Math.PI, -0.676, -0.574]}
                scale={0}>
                <mesh
                  name="Object_406"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_406.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle202_202"
                position={[-0.032, -1.363, -2.261]}
                rotation={[0, 0.972, -2.042]}
                scale={0}>
                <mesh
                  name="Object_408"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_408.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle203_203"
                position={[-0.005, -1.378, -3.954]}
                rotation={[0, -1.494, -2.645]}
                scale={0}>
                <mesh
                  name="Object_410"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_410.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle204_204"
                position={[-0.366, -1.002, -2.841]}
                rotation={[0, -0.017, 2.877]}
                scale={0}>
                <mesh
                  name="Object_412"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_412.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle205_205"
                position={[0.16, -1.54, -3.057]}
                rotation={[Math.PI, 0.318, 1.298]}
                scale={0}>
                <mesh
                  name="Object_414"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_414.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle206_206"
                position={[0.213, -0.816, -2.956]}
                rotation={[3.142, -0.148, -0.776]}
                scale={0}>
                <mesh
                  name="Object_416"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_416.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle207_207"
                position={[-0.22, -0.998, -3.473]}
                rotation={[0, -0.434, 2.449]}
                scale={0}>
                <mesh
                  name="Object_418"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_418.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle208_208"
                position={[-0.035, -1.434, -2.439]}
                rotation={[0, 0.856, -1.976]}
                scale={0}>
                <mesh
                  name="Object_420"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_420.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle209_209"
                position={[0.299, -1.112, -3.506]}
                rotation={[Math.PI, -0.242, -0.205]}
                scale={0}>
                <mesh
                  name="Object_422"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_422.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle210_210"
                position={[-0.193, -1.143, -2.051]}
                rotation={[0, 0.676, -2.567]}
                scale={0}>
                <mesh
                  name="Object_424"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_424.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle211_211"
                position={[-0.162, -0.77, -2.815]}
                rotation={[0, -0.607, 1.74]}
                scale={0}>
                <mesh
                  name="Object_426"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_426.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle212_212"
                position={[0.015, -0.756, -2.971]}
                rotation={[-Math.PI, -0.605, -1.403]}
                scale={0}>
                <mesh
                  name="Object_428"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_428.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle213_213"
                position={[-0.287, -0.914, -2.264]}
                rotation={[0, 0.208, 2.251]}
                scale={0}>
                <mesh
                  name="Object_430"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_430.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle214_214"
                position={[-0.223, -1.504, -3.066]}
                rotation={[0, -0.054, 2.872]}
                scale={0}>
                <mesh
                  name="Object_432"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_432.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle215_215"
                position={[-0.182, -0.767, -2.752]}
                rotation={[0, -0.394, 1.72]}
                scale={0}>
                <mesh
                  name="Object_434"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_434.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle216_216"
                position={[0.287, -1.118, -2.213]}
                rotation={[-Math.PI, 0.294, -0.608]}
                scale={0}>
                <mesh
                  name="Object_436"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_436.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle217_217"
                position={[-0.292, -1.405, -3.486]}
                rotation={[0, -0.306, 2.569]}
                scale={0}>
                <mesh
                  name="Object_438"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_438.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle218_218"
                position={[0.129, -1.233, -2.073]}
                rotation={[-Math.PI, 1.14, -0.104]}
                scale={0}>
                <mesh
                  name="Object_440"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_440.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle219_219"
                position={[0.229, -1.101, -3.626]}
                rotation={[Math.PI, -0.591, -1.081]}
                scale={0}>
                <mesh
                  name="Object_442"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_442.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle220_220"
                position={[-0.384, -1.164, -3.151]}
                rotation={[0, -0.211, 2.283]}
                scale={0}>
                <mesh
                  name="Object_444"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_444.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle221_221"
                position={[-0.278, -0.857, -2.332]}
                rotation={[0, 0.166, 1.977]}
                scale={0}>
                <mesh
                  name="Object_446"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_446.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle222_222"
                position={[-0.301, -1.067, -2.226]}
                rotation={[0, 0.298, 2.533]}
                scale={0}>
                <mesh
                  name="Object_448"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_448.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle223_223"
                position={[-0.322, -0.935, -2.992]}
                rotation={[0, -0.287, 2.006]}
                scale={0}>
                <mesh
                  name="Object_450"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_450.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle224_224"
                position={[0.286, -1.44, -3.424]}
                rotation={[-Math.PI, -0.163, -0.289]}
                scale={0}>
                <mesh
                  name="Object_452"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_452.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle225_225"
                position={[-0.322, -1.139, -3.438]}
                rotation={[0, -0.289, 2.289]}
                scale={0}>
                <mesh
                  name="Object_454"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_454.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle226_226"
                position={[0.359, -1.272, -3.33]}
                rotation={[-Math.PI, -0.198, -0.578]}
                scale={0}>
                <mesh
                  name="Object_456"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_456.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle227_227"
                position={[-0.354, -1.326, -2.829]}
                rotation={[0, 0.028, 2.552]}
                scale={0}>
                <mesh
                  name="Object_458"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_458.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle228_228"
                position={[-0.295, -1.338, -3.568]}
                rotation={[0, -0.301, 2.565]}
                scale={0}>
                <mesh
                  name="Object_460"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_460.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle229_229"
                position={[-0.188, -0.845, -2.072]}
                rotation={[0, 0.35, 1.981]}
                scale={0}>
                <mesh
                  name="Object_462"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_462.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle230_230"
                position={[-0.316, -1.034, -3.33]}
                rotation={[0, -0.386, 2.018]}
                scale={0}>
                <mesh
                  name="Object_464"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_464.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle231_231"
                position={[0.083, -1.287, -3.932]}
                rotation={[Math.PI, -1.099, -0.88]}
                scale={0}>
                <mesh
                  name="Object_466"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_466.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle232_232"
                position={[-0.03, -1.586, -3.441]}
                rotation={[0, -0.601, -3.028]}
                scale={0}>
                <mesh
                  name="Object_468"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_468.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle233_233"
                position={[-0.012, -1.345, -2.21]}
                rotation={[0, 1.016, 3.138]}
                scale={0}>
                <mesh
                  name="Object_470"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_470.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle234_234"
                position={[-0.281, -1.188, -3.605]}
                rotation={[0, -0.386, 2.302]}
                scale={0}>
                <mesh
                  name="Object_472"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_472.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle235_235"
                position={[-0.09, -0.932, -1.87]}
                rotation={[0, 0.829, 2.232]}
                scale={0}>
                <mesh
                  name="Object_474"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_474.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle236_236"
                position={[0.153, -1.308, -2.219]}
                rotation={[Math.PI, 1.019, -0.005]}
                scale={0}>
                <mesh
                  name="Object_476"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_476.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle237_237"
                position={[0.086, -0.756, -2.147]}
                rotation={[-Math.PI, 0.688, -1.404]}
                scale={0}>
                <mesh
                  name="Object_478"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_478.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle238_238"
                position={[0.195, -0.771, -2.408]}
                rotation={[Math.PI, 0.035, -1.16]}
                scale={0}>
                <mesh
                  name="Object_480"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_480.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle239_239"
                position={[0.007, -1.189, -3.908]}
                rotation={[Math.PI, -1.293, -1.114]}
                scale={0}>
                <mesh
                  name="Object_482"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_482.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle240_240"
                position={[0.223, -1.31, -2.348]}
                rotation={[Math.PI, 0.364, -0.288]}
                scale={0}>
                <mesh
                  name="Object_484"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_484.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle241_241"
                position={[0.36, -0.998, -2.976]}
                rotation={[-Math.PI, -0.127, -0.867]}
                scale={0}>
                <mesh
                  name="Object_486"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_486.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle242_242"
                position={[-0.015, -1.483, -2.574]}
                rotation={[0, 0.724, -3.013]}
                scale={0}>
                <mesh
                  name="Object_488"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_488.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle243_243"
                position={[0.288, -0.856, -2.663]}
                rotation={[Math.PI, -0.088, -1.155]}
                scale={0}>
                <mesh
                  name="Object_490"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_490.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle244_244"
                position={[0.369, -1.109, -2.52]}
                rotation={[-Math.PI, 0.116, -0.588]}
                scale={0}>
                <mesh
                  name="Object_492"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_492.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle245_245"
                position={[0.331, -1.306, -2.618]}
                rotation={[-Math.PI, 0.261, -0.283]}
                scale={0}>
                <mesh
                  name="Object_494"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_494.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle246_246"
                position={[0.234, -0.826, -2.286]}
                rotation={[-Math.PI, 0.169, -1.164]}
                scale={0}>
                <mesh
                  name="Object_496"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_496.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle247_247"
                position={[0.168, -0.775, -2.234]}
                rotation={[-Math.PI, 0.174, -1.163]}
                scale={0}>
                <mesh
                  name="Object_498"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_498.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle248_248"
                position={[-0.366, -1.05, -2.474]}
                rotation={[0, 0.098, 2.256]}
                scale={0}>
                <mesh
                  name="Object_500"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_500.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle249_249"
                position={[-0.229, -1.474, -3.534]}
                rotation={[0, -0.303, 2.851]}
                scale={0}>
                <mesh
                  name="Object_502"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_502.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle250_250"
                position={[-0.037, -1.493, -2.635]}
                rotation={[0, 0.543, -2.944]}
                scale={0}>
                <mesh
                  name="Object_504"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_504.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle251_251"
                position={[-0.339, -0.938, -2.926]}
                rotation={[0, -0.195, 1.994]}
                scale={0}>
                <mesh
                  name="Object_506"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_506.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle252_252"
                position={[-0.076, -0.858, -1.913]}
                rotation={[0, 0.943, 2.054]}
                scale={0}>
                <mesh
                  name="Object_508"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_508.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle253_253"
                position={[0.35, -1.043, -3.181]}
                rotation={[Math.PI, -0.203, -0.86]}
                scale={0}>
                <mesh
                  name="Object_510"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_510.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle254_254"
                position={[-0.101, -1.516, -3.748]}
                rotation={[0, -1.134, 3.042]}
                scale={0}>
                <mesh
                  name="Object_512"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_512.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle255_255"
                position={[0.193, -0.829, -2.129]}
                rotation={[-Math.PI, 0.351, -1.161]}
                scale={0}>
                <mesh
                  name="Object_514"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_514.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle256_256"
                position={[-0.058, -1.228, -3.922]}
                rotation={[0, -1.392, 2.171]}
                scale={0}>
                <mesh
                  name="Object_516"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_516.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle257_257"
                position={[0.4, -1.16, -2.871]}
                rotation={[Math.PI, 0.039, -0.592]}
                scale={0}>
                <mesh
                  name="Object_518"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_518.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle258_258"
                position={[-0.287, -0.914, -2.264]}
                rotation={[0, 0.208, 2.251]}
                scale={0}>
                <mesh
                  name="Object_520"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_520.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle259_259"
                position={[0.227, -0.806, -2.806]}
                rotation={[Math.PI, -0.183, -1.147]}
                scale={0}>
                <mesh
                  name="Object_522"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_522.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle260_260"
                position={[0.338, -1.278, -3.464]}
                rotation={[Math.PI, -0.198, -0.585]}
                scale={0}>
                <mesh
                  name="Object_524"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_524.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle261_261"
                position={[-0.263, -1.467, -3.356]}
                rotation={[0, -0.165, 2.858]}
                scale={0}>
                <mesh
                  name="Object_526"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_526.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle262_262"
                position={[0.318, -1.336, -2.674]}
                rotation={[Math.PI, 0.162, -0.267]}
                scale={0}>
                <mesh
                  name="Object_528"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_528.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle263_263"
                position={[0.29, -1.309, -3.628]}
                rotation={[-Math.PI, -0.3, -0.58]}
                scale={0}>
                <mesh
                  name="Object_530"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_530.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle264_264"
                position={[-0.241, -1.358, -3.715]}
                rotation={[0, -0.431, 2.571]}
                scale={0}>
                <mesh
                  name="Object_532"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_532.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle265_265"
                position={[-0.195, -1.304, -2.275]}
                rotation={[0, 0.365, 2.859]}
                scale={0}>
                <mesh
                  name="Object_534"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_534.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle266_266"
                position={[0.354, -0.963, -2.92]}
                rotation={[-Math.PI, -0.054, -0.876]}
                scale={0}>
                <mesh
                  name="Object_536"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_536.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle267_267"
                position={[0.37, -1.027, -2.62]}
                rotation={[Math.PI, 0.016, -0.878]}
                scale={0}>
                <mesh
                  name="Object_538"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_538.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle268_268"
                position={[-0.189, -1.417, -3.779]}
                rotation={[0, -0.617, 2.583]}
                scale={0}>
                <mesh
                  name="Object_540"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_540.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle269_269"
                position={[-0.208, -1.425, -2.588]}
                rotation={[0, 0.251, 2.86]}
                scale={0}>
                <mesh
                  name="Object_542"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_542.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle270_270"
                position={[-0.052, -1.001, -3.651]}
                rotation={[0, -1.109, 1.875]}
                scale={0}>
                <mesh
                  name="Object_544"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_544.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle271_271"
                position={[0.359, -1.272, -3.33]}
                rotation={[-Math.PI, -0.198, -0.578]}
                scale={0}>
                <mesh
                  name="Object_546"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_546.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle272_272"
                position={[0.015, -0.804, -3.177]}
                rotation={[Math.PI, -0.771, -1.378]}
                scale={0}>
                <mesh
                  name="Object_548"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_548.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle273_273"
                position={[0.25, -1.463, -2.944]}
                rotation={[Math.PI, 0.053, -0.273]}
                scale={0}>
                <mesh
                  name="Object_550"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_550.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle274_274"
                position={[-0.09, -0.932, -1.87]}
                rotation={[0, 0.829, 2.232]}
                scale={0}>
                <mesh
                  name="Object_552"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_552.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle275_275"
                position={[0.245, -0.869, -2.163]}
                rotation={[Math.PI, 0.343, -0.899]}
                scale={0}>
                <mesh
                  name="Object_554"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_554.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle276_276"
                position={[0.35, -1.339, -3.188]}
                rotation={[-Math.PI, -0.119, -0.583]}
                scale={0}>
                <mesh
                  name="Object_556"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_556.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle277_277"
                position={[0.294, -1.442, -3.288]}
                rotation={[Math.PI, -0.163, -0.277]}
                scale={0}>
                <mesh
                  name="Object_558"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_558.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle278_278"
                position={[-0.31, -0.874, -2.518]}
                rotation={[0, 0.025, 1.98]}
                scale={0}>
                <mesh
                  name="Object_560"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_560.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle279_279"
                position={[0.128, -0.874, -3.303]}
                rotation={[Math.PI, -0.903, -1.348]}
                scale={0}>
                <mesh
                  name="Object_562"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_562.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle280_280"
                position={[0.035, -0.716, -2.618]}
                rotation={[Math.PI, -0.382, -1.422]}
                scale={0}>
                <mesh
                  name="Object_564"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_564.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle281_281"
                position={[0.175, -0.757, -2.357]}
                rotation={[Math.PI, 0.176, -1.165]}
                scale={0}>
                <mesh
                  name="Object_566"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_566.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle282_282"
                position={[0.322, -1.367, -3.381]}
                rotation={[Math.PI, -0.204, -0.58]}
                scale={0}>
                <mesh
                  name="Object_568"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_568.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle283_283"
                position={[0.013, -1.217, -3.925]}
                rotation={[Math.PI, -1.392, -0.971]}
                scale={0}>
                <mesh
                  name="Object_570"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_570.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle284_284"
                position={[0.391, -1.118, -2.665]}
                rotation={[Math.PI, 0.116, -0.595]}
                scale={0}>
                <mesh
                  name="Object_572"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_572.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle285_285"
                position={[0.116, -1.474, -3.804]}
                rotation={[Math.PI, -0.705, -0.325]}
                scale={0}>
                <mesh
                  name="Object_574"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_574.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle286_286"
                position={[0.262, -1.456, -3.473]}
                rotation={[-Math.PI, -0.301, -0.285]}
                scale={0}>
                <mesh
                  name="Object_576"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_576.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle287_287"
                position={[-0.014, -1.419, -2.382]}
                rotation={[0, 0.881, -3.07]}
                scale={0}>
                <mesh
                  name="Object_578"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_578.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle288_288"
                position={[-0.287, -0.914, -2.264]}
                rotation={[0, 0.208, 2.251]}
                scale={0}>
                <mesh
                  name="Object_580"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_580.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle289_289"
                position={[-0.113, -1.273, -3.911]}
                rotation={[0, -1.098, 2.262]}
                scale={0}>
                <mesh
                  name="Object_582"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_582.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle290_290"
                position={[-0.143, -1.419, -3.851]}
                rotation={[0, -0.617, 2.58]}
                scale={0}>
                <mesh
                  name="Object_584"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_584.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle291_291"
                position={[-0.128, -1.555, -3.134]}
                rotation={[0, 0.038, -2.942]}
                scale={0}>
                <mesh
                  name="Object_586"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_586.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle292_292"
                position={[0.223, -0.894, -3.218]}
                rotation={[Math.PI, -0.375, -1.124]}
                scale={0}>
                <mesh
                  name="Object_588"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_588.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle293_293"
                position={[0.182, -1.439, -2.584]}
                rotation={[-Math.PI, 0.73, 0.126]}
                scale={0}>
                <mesh
                  name="Object_590"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_590.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle294_294"
                position={[-0.299, -1.375, -2.748]}
                rotation={[0, 0.158, 2.868]}
                scale={0}>
                <mesh
                  name="Object_592"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_592.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle295_295"
                position={[0.037, -0.738, -2.823]}
                rotation={[Math.PI, -0.601, -1.403]}
                scale={0}>
                <mesh
                  name="Object_594"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_594.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle296_296"
                position={[-0.245, -1.148, -3.669]}
                rotation={[0, -0.595, 2.061]}
                scale={0}>
                <mesh
                  name="Object_596"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_596.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle297_297"
                position={[0.365, -1.303, -2.984]}
                rotation={[Math.PI, -0.043, -0.585]}
                scale={0}>
                <mesh
                  name="Object_598"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_598.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle298_298"
                position={[0.294, -1.442, -3.288]}
                rotation={[Math.PI, -0.163, -0.277]}
                scale={0}>
                <mesh
                  name="Object_600"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_600.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle299_299"
                position={[-0.195, -1.365, -2.396]}
                rotation={[0, 0.36, 2.849]}
                scale={0}>
                <mesh
                  name="Object_602"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_602.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle300_300"
                position={[-0.053, -0.724, -2.311]}
                rotation={[0, 0.287, 1.71]}
                scale={0}>
                <mesh
                  name="Object_604"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_604.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle301_301"
                position={[-0.22, -1.155, -3.712]}
                rotation={[0, -0.72, 2.099]}
                scale={0}>
                <mesh
                  name="Object_606"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_606.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle302_302"
                position={[0.4, -1.16, -2.871]}
                rotation={[Math.PI, 0.039, -0.592]}
                scale={0}>
                <mesh
                  name="Object_608"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_608.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle303_303"
                position={[0.37, -1.027, -2.62]}
                rotation={[Math.PI, 0.016, -0.878]}
                scale={0}>
                <mesh
                  name="Object_610"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_610.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle304_304"
                position={[-0.189, -1.417, -3.779]}
                rotation={[0, -0.617, 2.583]}
                scale={0}>
                <mesh
                  name="Object_612"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_612.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle305_305"
                position={[0.015, -0.756, -2.971]}
                rotation={[-Math.PI, -0.605, -1.403]}
                scale={0}>
                <mesh
                  name="Object_614"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_614.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle306_306"
                position={[-0.25, -0.884, -3.088]}
                rotation={[0, -0.282, 2.004]}
                scale={0}>
                <mesh
                  name="Object_616"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_616.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle307_307"
                position={[-0.168, -1.233, -2.12]}
                rotation={[0, 0.487, 2.836]}
                scale={0}>
                <mesh
                  name="Object_618"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_618.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle308_308"
                position={[0.245, -1.448, -3.594]}
                rotation={[-Math.PI, -0.301, -0.296]}
                scale={0}>
                <mesh
                  name="Object_620"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_620.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle309_309"
                position={[-0.298, -1.416, -2.955]}
                rotation={[0, 0.057, 2.867]}
                scale={0}>
                <mesh
                  name="Object_622"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_622.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle310_310"
                position={[0.369, -1.109, -2.52]}
                rotation={[-Math.PI, 0.116, -0.588]}
                scale={0}>
                <mesh
                  name="Object_624"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_624.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle311_311"
                position={[0.158, -1.556, -3.395]}
                rotation={[-3.142, -0.274, 0.15]}
                scale={0}>
                <mesh
                  name="Object_626"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_626.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle312_312"
                position={[0.065, -1.45, -2.515]}
                rotation={[-Math.PI, 0.729, 0.139]}
                scale={0}>
                <mesh
                  name="Object_628"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_628.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle313_313"
                position={[0.037, -0.738, -2.823]}
                rotation={[Math.PI, -0.601, -1.403]}
                scale={0}>
                <mesh
                  name="Object_630"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_630.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle314_314"
                position={[-0.354, -1.326, -2.829]}
                rotation={[0, 0.028, 2.552]}
                scale={0}>
                <mesh
                  name="Object_632"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_632.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle315_315"
                position={[-0.322, -1.139, -3.438]}
                rotation={[0, -0.289, 2.289]}
                scale={0}>
                <mesh
                  name="Object_634"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_634.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle316_316"
                position={[0.065, -0.939, -1.853]}
                rotation={[-Math.PI, 1.301, -0.806]}
                scale={0}>
                <mesh
                  name="Object_636"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_636.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle317_317"
                position={[0.339, -1.352, -2.823]}
                rotation={[-Math.PI, 0.16, -0.28]}
                scale={0}>
                <mesh
                  name="Object_638"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_638.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle318_318"
                position={[-0.239, -0.937, -3.288]}
                rotation={[0, -0.378, 2.017]}
                scale={0}>
                <mesh
                  name="Object_640"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_640.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle319_319"
                position={[-0.269, -1.282, -3.68]}
                rotation={[0, -0.511, 2.325]}
                scale={0}>
                <mesh
                  name="Object_642"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_642.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle320_320"
                position={[-0.012, -1.345, -2.21]}
                rotation={[0, 1.016, 3.138]}
                scale={0}>
                <mesh
                  name="Object_644"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_644.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle321_321"
                position={[0.239, -1.492, -3.15]}
                rotation={[Math.PI, -0.053, -0.277]}
                scale={0}>
                <mesh
                  name="Object_646"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_646.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle322_322"
                position={[0.322, -1.38, -2.881]}
                rotation={[Math.PI, 0.06, -0.268]}
                scale={0}>
                <mesh
                  name="Object_648"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_648.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle323_323"
                position={[0.338, -1.278, -3.464]}
                rotation={[Math.PI, -0.198, -0.585]}
                scale={0}>
                <mesh
                  name="Object_650"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_650.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle324_324"
                position={[-0.052, -1.001, -3.651]}
                rotation={[0, -1.109, 1.875]}
                scale={0}>
                <mesh
                  name="Object_652"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_652.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle325_325"
                position={[0.328, -1.093, -3.375]}
                rotation={[Math.PI, -0.286, -0.851]}
                scale={0}>
                <mesh
                  name="Object_654"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_654.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle326_326"
                position={[0.155, -1.06, -3.69]}
                rotation={[Math.PI, -0.589, -1.083]}
                scale={0}>
                <mesh
                  name="Object_656"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_656.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle327_327"
                position={[0.239, -1.492, -3.15]}
                rotation={[Math.PI, -0.053, -0.277]}
                scale={0}>
                <mesh
                  name="Object_658"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_658.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle328_328"
                position={[-0.337, -1.225, -2.491]}
                rotation={[0, 0.109, 2.555]}
                scale={0}>
                <mesh
                  name="Object_660"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_660.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle329_329"
                position={[-0.354, -1.326, -2.829]}
                rotation={[0, 0.028, 2.552]}
                scale={0}>
                <mesh
                  name="Object_662"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_662.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle330_330"
                position={[-0.103, -1.561, -3.512]}
                rotation={[0, -0.597, -3.043]}
                scale={0}>
                <mesh
                  name="Object_664"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_664.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle331_331"
                position={[-0.032, -1.363, -2.261]}
                rotation={[0, 0.887, -3.051]}
                scale={0}>
                <mesh
                  name="Object_666"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_666.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle332_332"
                position={[0.349, -1.008, -3.126]}
                rotation={[Math.PI, -0.128, -0.871]}
                scale={0}>
                <mesh
                  name="Object_668"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_668.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle333_333"
                position={[0.337, -1.196, -3.423]}
                rotation={[Math.PI, -0.293, -0.852]}
                scale={0}>
                <mesh
                  name="Object_670"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_670.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle334_334"
                position={[0.037, -0.738, -2.823]}
                rotation={[Math.PI, -0.601, -1.403]}
                scale={0}>
                <mesh
                  name="Object_672"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_672.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle335_335"
                position={[-0.174, -0.906, -3.362]}
                rotation={[0, -0.906, 1.794]}
                scale={0}>
                <mesh
                  name="Object_674"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_674.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle336_336"
                position={[-0.239, -0.937, -3.288]}
                rotation={[0, -0.378, 2.017]}
                scale={0}>
                <mesh
                  name="Object_676"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_676.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle337_337"
                position={[0.223, -0.894, -3.218]}
                rotation={[Math.PI, -0.375, -1.124]}
                scale={0}>
                <mesh
                  name="Object_678"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_678.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle338_338"
                position={[0.182, -1.439, -2.584]}
                rotation={[-Math.PI, 0.73, 0.126]}
                scale={0}>
                <mesh
                  name="Object_680"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_680.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle339_339"
                position={[0.298, -0.931, -3.076]}
                rotation={[-Math.PI, -0.286, -1.137]}
                scale={0}>
                <mesh
                  name="Object_682"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_682.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle340_340"
                position={[0.03, -0.964, -3.596]}
                rotation={[Math.PI, -1.107, -1.267]}
                scale={0}>
                <mesh
                  name="Object_684"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_684.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle341_341"
                position={[-0.204, -1.429, -3.741]}
                rotation={[0, -0.436, 2.571]}
                scale={0}>
                <mesh
                  name="Object_686"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_686.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle342_342"
                position={[-0.263, -1.467, -3.356]}
                rotation={[0, -0.165, 2.858]}
                scale={0}>
                <mesh
                  name="Object_688"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_688.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle343_343"
                position={[-0.229, -1.471, -2.858]}
                rotation={[0, 0.052, 2.875]}
                scale={0}>
                <mesh
                  name="Object_690"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_690.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle344_344"
                position={[-0.334, -0.982, -3.133]}
                rotation={[0, -0.291, 2.004]}
                scale={0}>
                <mesh
                  name="Object_692"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_692.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle345_345"
                position={[-0.37, -1.153, -2.589]}
                rotation={[0, 0.113, 2.55]}
                scale={0}>
                <mesh
                  name="Object_694"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_694.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle346_346"
                position={[-0.223, -1.504, -3.066]}
                rotation={[0, -0.054, 2.872]}
                scale={0}>
                <mesh
                  name="Object_696"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_696.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle347_347"
                position={[0.015, -0.756, -2.971]}
                rotation={[-Math.PI, -0.605, -1.403]}
                scale={0}>
                <mesh
                  name="Object_698"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_698.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle348_348"
                position={[-0.043, -0.745, -2.15]}
                rotation={[0, 0.69, 1.738]}
                scale={0}>
                <mesh
                  name="Object_700"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_700.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle349_349"
                position={[0.134, -1.559, -3.448]}
                rotation={[-Math.PI, -0.596, 0.112]}
                scale={0}>
                <mesh
                  name="Object_702"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_702.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle350_350"
                position={[-0.316, -1.034, -3.33]}
                rotation={[0, -0.386, 2.018]}
                scale={0}>
                <mesh
                  name="Object_704"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_704.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle351_351"
                position={[-0.162, -0.799, -2.137]}
                rotation={[0, 0.354, 1.981]}
                scale={0}>
                <mesh
                  name="Object_706"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_706.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle352_352"
                position={[-0.355, -1.273, -2.69]}
                rotation={[0, 0.031, 2.559]}
                scale={0}>
                <mesh
                  name="Object_708"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_708.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle353_353"
                position={[-0.4, -1.13, -2.878]}
                rotation={[0, -0.065, 2.267]}
                scale={0}>
                <mesh
                  name="Object_710"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_710.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle354_354"
                position={[-0.128, -1.555, -3.134]}
                rotation={[0, 0.038, -2.942]}
                scale={0}>
                <mesh
                  name="Object_712"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_712.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle355_355"
                position={[0.269, -1.331, -3.668]}
                rotation={[Math.PI, -0.43, -0.568]}
                scale={0}>
                <mesh
                  name="Object_714"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_714.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle356_356"
                position={[-0.199, -1.534, -3.206]}
                rotation={[0, -0.057, 2.86]}
                scale={0}>
                <mesh
                  name="Object_716"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_716.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle357_357"
                position={[-0.086, -1.216, -2.033]}
                rotation={[0, 1.141, 3.042]}
                scale={0}>
                <mesh
                  name="Object_718"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_718.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle358_358"
                position={[0.168, -0.775, -2.234]}
                rotation={[-Math.PI, 0.174, -1.163]}
                scale={0}>
                <mesh
                  name="Object_720"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_720.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle359_359"
                position={[-0.334, -0.982, -3.133]}
                rotation={[0, -0.291, 2.004]}
                scale={0}>
                <mesh
                  name="Object_722"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_722.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle360_360"
                position={[-0.162, -0.799, -2.137]}
                rotation={[0, 0.354, 1.981]}
                scale={0}>
                <mesh
                  name="Object_724"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_724.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle361_361"
                position={[0.245, -1.197, -3.701]}
                rotation={[-Math.PI, -0.506, -0.818]}
                scale={0}>
                <mesh
                  name="Object_726"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_726.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle362_362"
                position={[-0.123, -1.514, -3.72]}
                rotation={[0, -0.479, 2.837]}
                scale={0}>
                <mesh
                  name="Object_728"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_728.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle363_363"
                position={[-0.187, -1.469, -3.687]}
                rotation={[0, -0.476, 2.84]}
                scale={0}>
                <mesh
                  name="Object_730"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_730.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle364_364"
                position={[-0.306, -1.173, -2.308]}
                rotation={[0, 0.194, 2.548]}
                scale={0}>
                <mesh
                  name="Object_732"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_732.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle365_365"
                position={[0.013, -0.937, -3.549]}
                rotation={[-Math.PI, -1.012, -1.313]}
                scale={0}>
                <mesh
                  name="Object_734"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_734.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle366_366"
                position={[0.031, -1.512, -3.795]}
                rotation={[Math.PI, -1.134, -0.106]}
                scale={0}>
                <mesh
                  name="Object_736"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_736.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle367_367"
                position={[0.096, -1.181, -1.988]}
                rotation={[-Math.PI, 1.142, -0.095]}
                scale={0}>
                <mesh
                  name="Object_738"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_738.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle368_368"
                position={[-0.245, -1.148, -3.669]}
                rotation={[0, -0.595, 2.061]}
                scale={0}>
                <mesh
                  name="Object_740"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_740.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle369_369"
                position={[0.37, -1.027, -2.62]}
                rotation={[Math.PI, 0.016, -0.878]}
                scale={0}>
                <mesh
                  name="Object_742"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_742.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle370_370"
                position={[-0.306, -1.173, -2.308]}
                rotation={[0, 0.194, 2.548]}
                scale={0}>
                <mesh
                  name="Object_744"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_744.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle371_371"
                position={[0.158, -1.556, -3.395]}
                rotation={[-3.142, -0.274, 0.15]}
                scale={0}>
                <mesh
                  name="Object_746"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_746.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle372_372"
                position={[-0.119, -1.368, -2.333]}
                rotation={[0, 0.886, -3.063]}
                scale={0}>
                <mesh
                  name="Object_748"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_748.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle373_373"
                position={[0.209, -0.954, -3.41]}
                rotation={[-Math.PI, -0.475, -1.107]}
                scale={0}>
                <mesh
                  name="Object_750"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_750.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle374_374"
                position={[0.087, -1.213, -3.902]}
                rotation={[-Math.PI, -0.882, -0.984]}
                scale={0}>
                <mesh
                  name="Object_752"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_752.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle375_375"
                position={[-0.299, -1.375, -2.748]}
                rotation={[0, 0.158, 2.868]}
                scale={0}>
                <mesh
                  name="Object_754"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_754.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle376_376"
                position={[-0.12, -0.748, -2.24]}
                rotation={[0, 0.282, 1.71]}
                scale={0}>
                <mesh
                  name="Object_756"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_756.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle377_377"
                position={[0.187, -1.489, -2.789]}
                rotation={[Math.PI, 0.543, 0.165]}
                scale={0}>
                <mesh
                  name="Object_758"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_758.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle378_378"
                position={[-0.299, -1.375, -2.748]}
                rotation={[0, 0.158, 2.868]}
                scale={0}>
                <mesh
                  name="Object_760"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_760.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle379_379"
                position={[-0.016, -1.114, -1.895]}
                rotation={[0, 1.256, 2.908]}
                scale={0}>
                <mesh
                  name="Object_762"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_762.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle380_380"
                position={[-0.21, -1.511, -3.001]}
                rotation={[0, 0.048, 2.863]}
                scale={0}>
                <mesh
                  name="Object_764"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_764.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle381_381"
                position={[-0.295, -1.338, -3.568]}
                rotation={[0, -0.301, 2.565]}
                scale={0}>
                <mesh
                  name="Object_766"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_766.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle382_382"
                position={[-0.162, -0.77, -2.815]}
                rotation={[0, -0.607, 1.74]}
                scale={0}>
                <mesh
                  name="Object_768"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_768.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle383_383"
                position={[-0.135, -1.049, -3.693]}
                rotation={[0, -1.111, 1.876]}
                scale={0}>
                <mesh
                  name="Object_770"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_770.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle384_384"
                position={[-0.065, -0.731, -2.694]}
                rotation={[0, -0.386, 1.719]}
                scale={0}>
                <mesh
                  name="Object_772"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_772.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle385_385"
                position={[0.369, -1.109, -2.52]}
                rotation={[-Math.PI, 0.116, -0.588]}
                scale={0}>
                <mesh
                  name="Object_774"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_774.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle386_386"
                position={[-0.366, -1.05, -2.474]}
                rotation={[0, 0.098, 2.256]}
                scale={0}>
                <mesh
                  name="Object_776"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_776.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle387_387"
                position={[0.365, -1.303, -2.984]}
                rotation={[Math.PI, -0.043, -0.585]}
                scale={0}>
                <mesh
                  name="Object_778"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_778.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle388_388"
                position={[-0.369, -1.041, -2.537]}
                rotation={[0, 0.015, 2.266]}
                scale={0}>
                <mesh
                  name="Object_780"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_780.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle389_389"
                position={[-0.068, -1.474, -3.857]}
                rotation={[0, -1.335, 2.887]}
                scale={0}>
                <mesh
                  name="Object_782"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_782.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle390_390"
                position={[-0.134, -1.487, -2.72]}
                rotation={[0, 0.544, -2.962]}
                scale={0}>
                <mesh
                  name="Object_784"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_784.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle391_391"
                position={[-0.236, -0.84, -2.217]}
                rotation={[0, 0.168, 1.978]}
                scale={0}>
                <mesh
                  name="Object_786"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_786.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle392_392"
                position={[0.18, -0.987, -3.537]}
                rotation={[Math.PI, -0.478, -1.108]}
                scale={0}>
                <mesh
                  name="Object_788"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_788.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle393_393"
                position={[-0.129, -1.433, -2.519]}
                rotation={[0, 0.731, -3.004]}
                scale={0}>
                <mesh
                  name="Object_790"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_790.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle394_394"
                position={[0.056, -0.97, -1.845]}
                rotation={[-Math.PI, 1.375, -0.739]}
                scale={0}>
                <mesh
                  name="Object_792"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_792.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle395_395"
                position={[-0.182, -0.767, -2.752]}
                rotation={[0, -0.394, 1.72]}
                scale={0}>
                <mesh
                  name="Object_794"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_794.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle396_396"
                position={[-0.322, -1.139, -3.438]}
                rotation={[0, -0.289, 2.289]}
                scale={0}>
                <mesh
                  name="Object_796"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_796.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle397_397"
                position={[-0.164, -0.808, -3.023]}
                rotation={[0, -0.771, 1.764]}
                scale={0}>
                <mesh
                  name="Object_798"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_798.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle398_398"
                position={[0.328, -1.039, -2.287]}
                rotation={[Math.PI, 0.299, -0.611]}
                scale={0}>
                <mesh
                  name="Object_800"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_800.geometry}
                  material={materials.Light}
                />
              </group>
              <group
                name="particle399_399"
                position={[0.117, -0.94, -3.487]}
                rotation={[Math.PI, -1.012, -1.312]}
                scale={0}>
                <mesh
                  name="Object_802"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_802.geometry}
                  material={materials.Light}
                />
              </group>
              <group name="BroomRig_442">
                <group name="GLTF_created_1">
                  <primitive object={nodes.GLTF_created_1_rootJoint} />
                  <skinnedMesh
                    name="Object_807"
                    geometry={nodes.Object_807.geometry}
                    material={materials['Material.001']}
                    skeleton={nodes.Object_807.skeleton}
                  />
                  <skinnedMesh
                    name="Object_809"
                    geometry={nodes.Object_809.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_809.skeleton}
                  />
                  <skinnedMesh
                    name="Object_811"
                    geometry={nodes.Object_811.geometry}
                    material={materials.Springs}
                    skeleton={nodes.Object_811.skeleton}
                  />
                  <skinnedMesh
                    name="Object_813"
                    geometry={nodes.Object_813.geometry}
                    material={materials.Springs}
                    skeleton={nodes.Object_813.skeleton}
                  />
                  <group name="Bristles_438" />
                  <group name="Hat_439" />
                  <group name="SpringBottom_440" />
                  <group name="SpringTop_441" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
})

export default BroomStick;

useGLTF.preload('/models/the_travelers_broomstick.glb')
