"use client";

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_10: THREE.SkinnedMesh
    Object_919: THREE.SkinnedMesh
    Object_920: THREE.SkinnedMesh
    Object_922: THREE.SkinnedMesh
    Object_923: THREE.SkinnedMesh
    Object_925: THREE.SkinnedMesh
    Object_926: THREE.SkinnedMesh
    Object_928: THREE.SkinnedMesh
    Object_929: THREE.SkinnedMesh
    Object_931: THREE.SkinnedMesh
    Object_932: THREE.SkinnedMesh
    Object_934: THREE.SkinnedMesh
    Object_935: THREE.SkinnedMesh
    Object_937: THREE.SkinnedMesh
    Object_938: THREE.SkinnedMesh
    Object_940: THREE.SkinnedMesh
    Object_941: THREE.SkinnedMesh
    Object_943: THREE.SkinnedMesh
    Object_944: THREE.SkinnedMesh
    Object_946: THREE.SkinnedMesh
    Object_947: THREE.SkinnedMesh
    Object_949: THREE.SkinnedMesh
    Object_950: THREE.SkinnedMesh
    Object_952: THREE.SkinnedMesh
    Object_953: THREE.SkinnedMesh
    Object_955: THREE.SkinnedMesh
    Object_956: THREE.SkinnedMesh
    Object_958: THREE.SkinnedMesh
    Object_959: THREE.SkinnedMesh
    Object_961: THREE.SkinnedMesh
    Object_962: THREE.SkinnedMesh
    Object_964: THREE.SkinnedMesh
    Object_965: THREE.SkinnedMesh
    Object_967: THREE.SkinnedMesh
    Object_968: THREE.SkinnedMesh
    Object_970: THREE.SkinnedMesh
    Object_971: THREE.SkinnedMesh
    Object_973: THREE.SkinnedMesh
    Object_974: THREE.SkinnedMesh
    Object_976: THREE.SkinnedMesh
    Object_977: THREE.SkinnedMesh
    Object_979: THREE.SkinnedMesh
    Object_980: THREE.SkinnedMesh
    Object_982: THREE.SkinnedMesh
    Object_983: THREE.SkinnedMesh
    Object_985: THREE.SkinnedMesh
    Object_986: THREE.SkinnedMesh
    Object_988: THREE.SkinnedMesh
    Object_989: THREE.SkinnedMesh
    Object_991: THREE.SkinnedMesh
    Object_992: THREE.SkinnedMesh
    Object_994: THREE.SkinnedMesh
    Object_995: THREE.SkinnedMesh
    Object_997: THREE.SkinnedMesh
    Object_998: THREE.SkinnedMesh
    Object_1000: THREE.SkinnedMesh
    Object_1001: THREE.SkinnedMesh
    Object_1003: THREE.SkinnedMesh
    Object_1004: THREE.SkinnedMesh
    Object_1006: THREE.SkinnedMesh
    Object_1007: THREE.SkinnedMesh
    Object_1009: THREE.SkinnedMesh
    Object_1010: THREE.SkinnedMesh
    Object_1012: THREE.SkinnedMesh
    Object_1013: THREE.SkinnedMesh
    Object_1015: THREE.SkinnedMesh
    Object_1016: THREE.SkinnedMesh
    Object_1018: THREE.SkinnedMesh
    Object_1019: THREE.SkinnedMesh
    Object_1021: THREE.SkinnedMesh
    Object_1022: THREE.SkinnedMesh
    Object_1024: THREE.SkinnedMesh
    Object_1025: THREE.SkinnedMesh
    Object_1027: THREE.SkinnedMesh
    Object_1028: THREE.SkinnedMesh
    Object_1030: THREE.SkinnedMesh
    Object_1031: THREE.SkinnedMesh
    Object_1033: THREE.SkinnedMesh
    Object_1034: THREE.SkinnedMesh
    Object_1036: THREE.SkinnedMesh
    Object_1037: THREE.SkinnedMesh
    Object_1039: THREE.SkinnedMesh
    Object_1040: THREE.SkinnedMesh
    Object_1042: THREE.SkinnedMesh
    Object_1043: THREE.SkinnedMesh
    Object_1045: THREE.SkinnedMesh
    Object_1046: THREE.SkinnedMesh
    Object_1048: THREE.SkinnedMesh
    Object_1049: THREE.SkinnedMesh
    Object_1051: THREE.SkinnedMesh
    Object_1052: THREE.SkinnedMesh
    Object_1054: THREE.SkinnedMesh
    Object_1055: THREE.SkinnedMesh
    Object_1056: THREE.SkinnedMesh
    Object_1058: THREE.SkinnedMesh
    Object_1059: THREE.SkinnedMesh
    Object_1060: THREE.SkinnedMesh
    Object_1062: THREE.SkinnedMesh
    Object_1063: THREE.SkinnedMesh
    Object_1064: THREE.SkinnedMesh
    Object_1066: THREE.SkinnedMesh
    Object_1067: THREE.SkinnedMesh
    Object_1068: THREE.SkinnedMesh
    Object_1070: THREE.SkinnedMesh
    Object_1071: THREE.SkinnedMesh
    Object_1072: THREE.SkinnedMesh
    Object_1074: THREE.SkinnedMesh
    Object_1075: THREE.SkinnedMesh
    Object_1076: THREE.SkinnedMesh
    Object_1078: THREE.SkinnedMesh
    Object_1079: THREE.SkinnedMesh
    Object_1080: THREE.SkinnedMesh
    Object_1082: THREE.SkinnedMesh
    Object_1083: THREE.SkinnedMesh
    Object_1084: THREE.SkinnedMesh
    Object_1086: THREE.SkinnedMesh
    Object_1087: THREE.SkinnedMesh
    Object_1088: THREE.SkinnedMesh
    Object_1090: THREE.SkinnedMesh
    Object_1091: THREE.SkinnedMesh
    Object_1092: THREE.SkinnedMesh
    Object_1094: THREE.SkinnedMesh
    Object_1095: THREE.SkinnedMesh
    Object_1097: THREE.SkinnedMesh
    Object_1098: THREE.SkinnedMesh
    _rootJoint: THREE.Bone
  }
  materials: {
    material: THREE.MeshPhysicalMaterial
    body: THREE.MeshPhysicalMaterial
    body_Line: THREE.MeshPhysicalMaterial
    eyebrow: THREE.MeshPhysicalMaterial
    eyebrow_Line: THREE.MeshPhysicalMaterial
    hair: THREE.MeshPhysicalMaterial
    hair_Line: THREE.MeshPhysicalMaterial
    cloth: THREE.MeshPhysicalMaterial
    cloth_Line: THREE.MeshPhysicalMaterial
    cloth_B: THREE.MeshPhysicalMaterial
  }
}

const Wizard = React.memo(function Wizard(props) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/models/elaina.glb') as GLTFResult
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
        <group name="Sketchfab_model" position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1.75}>
          <group
            name="6bdeed62e3b04ce0af91491cb23fc966fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="eye" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="char_grp" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="rig">
                    <group name="Object_7">
                      <primitive object={nodes._rootJoint} />
                      <skinnedMesh
                        name="Object_10"
                        geometry={nodes.Object_10.geometry}
                        material={materials.material}
                        skeleton={nodes.Object_10.skeleton}
                      />
                      <skinnedMesh
                        name="Object_919"
                        geometry={nodes.Object_919.geometry}
                        material={materials.body}
                        skeleton={nodes.Object_919.skeleton}
                      />
                      <skinnedMesh
                        name="Object_920"
                        geometry={nodes.Object_920.geometry}
                        material={materials.body_Line}
                        skeleton={nodes.Object_920.skeleton}
                      />
                      <skinnedMesh
                        name="Object_922"
                        geometry={nodes.Object_922.geometry}
                        material={materials.eyebrow}
                        skeleton={nodes.Object_922.skeleton}
                      />
                      <skinnedMesh
                        name="Object_923"
                        geometry={nodes.Object_923.geometry}
                        material={materials.eyebrow_Line}
                        skeleton={nodes.Object_923.skeleton}
                      />
                      <skinnedMesh
                        name="Object_925"
                        geometry={nodes.Object_925.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_925.skeleton}
                      />
                      <skinnedMesh
                        name="Object_926"
                        geometry={nodes.Object_926.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_926.skeleton}
                      />
                      <skinnedMesh
                        name="Object_928"
                        geometry={nodes.Object_928.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_928.skeleton}
                      />
                      <skinnedMesh
                        name="Object_929"
                        geometry={nodes.Object_929.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_929.skeleton}
                      />
                      <skinnedMesh
                        name="Object_931"
                        geometry={nodes.Object_931.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_931.skeleton}
                      />
                      <skinnedMesh
                        name="Object_932"
                        geometry={nodes.Object_932.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_932.skeleton}
                      />
                      <skinnedMesh
                        name="Object_934"
                        geometry={nodes.Object_934.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_934.skeleton}
                      />
                      <skinnedMesh
                        name="Object_935"
                        geometry={nodes.Object_935.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_935.skeleton}
                      />
                      <skinnedMesh
                        name="Object_937"
                        geometry={nodes.Object_937.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_937.skeleton}
                      />
                      <skinnedMesh
                        name="Object_938"
                        geometry={nodes.Object_938.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_938.skeleton}
                      />
                      <skinnedMesh
                        name="Object_940"
                        geometry={nodes.Object_940.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_940.skeleton}
                      />
                      <skinnedMesh
                        name="Object_941"
                        geometry={nodes.Object_941.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_941.skeleton}
                      />
                      <skinnedMesh
                        name="Object_943"
                        geometry={nodes.Object_943.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_943.skeleton}
                      />
                      <skinnedMesh
                        name="Object_944"
                        geometry={nodes.Object_944.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_944.skeleton}
                      />
                      <skinnedMesh
                        name="Object_946"
                        geometry={nodes.Object_946.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_946.skeleton}
                      />
                      <skinnedMesh
                        name="Object_947"
                        geometry={nodes.Object_947.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_947.skeleton}
                      />
                      <skinnedMesh
                        name="Object_949"
                        geometry={nodes.Object_949.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_949.skeleton}
                      />
                      <skinnedMesh
                        name="Object_950"
                        geometry={nodes.Object_950.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_950.skeleton}
                      />
                      <skinnedMesh
                        name="Object_952"
                        geometry={nodes.Object_952.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_952.skeleton}
                      />
                      <skinnedMesh
                        name="Object_953"
                        geometry={nodes.Object_953.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_953.skeleton}
                      />
                      <skinnedMesh
                        name="Object_955"
                        geometry={nodes.Object_955.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_955.skeleton}
                      />
                      <skinnedMesh
                        name="Object_956"
                        geometry={nodes.Object_956.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_956.skeleton}
                      />
                      <skinnedMesh
                        name="Object_958"
                        geometry={nodes.Object_958.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_958.skeleton}
                      />
                      <skinnedMesh
                        name="Object_959"
                        geometry={nodes.Object_959.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_959.skeleton}
                      />
                      <skinnedMesh
                        name="Object_961"
                        geometry={nodes.Object_961.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_961.skeleton}
                      />
                      <skinnedMesh
                        name="Object_962"
                        geometry={nodes.Object_962.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_962.skeleton}
                      />
                      <skinnedMesh
                        name="Object_964"
                        geometry={nodes.Object_964.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_964.skeleton}
                      />
                      <skinnedMesh
                        name="Object_965"
                        geometry={nodes.Object_965.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_965.skeleton}
                      />
                      <skinnedMesh
                        name="Object_967"
                        geometry={nodes.Object_967.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_967.skeleton}
                      />
                      <skinnedMesh
                        name="Object_968"
                        geometry={nodes.Object_968.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_968.skeleton}
                      />
                      <skinnedMesh
                        name="Object_970"
                        geometry={nodes.Object_970.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_970.skeleton}
                      />
                      <skinnedMesh
                        name="Object_971"
                        geometry={nodes.Object_971.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_971.skeleton}
                      />
                      <skinnedMesh
                        name="Object_973"
                        geometry={nodes.Object_973.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_973.skeleton}
                      />
                      <skinnedMesh
                        name="Object_974"
                        geometry={nodes.Object_974.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_974.skeleton}
                      />
                      <skinnedMesh
                        name="Object_976"
                        geometry={nodes.Object_976.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_976.skeleton}
                      />
                      <skinnedMesh
                        name="Object_977"
                        geometry={nodes.Object_977.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_977.skeleton}
                      />
                      <skinnedMesh
                        name="Object_979"
                        geometry={nodes.Object_979.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_979.skeleton}
                      />
                      <skinnedMesh
                        name="Object_980"
                        geometry={nodes.Object_980.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_980.skeleton}
                      />
                      <skinnedMesh
                        name="Object_982"
                        geometry={nodes.Object_982.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_982.skeleton}
                      />
                      <skinnedMesh
                        name="Object_983"
                        geometry={nodes.Object_983.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_983.skeleton}
                      />
                      <skinnedMesh
                        name="Object_985"
                        geometry={nodes.Object_985.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_985.skeleton}
                      />
                      <skinnedMesh
                        name="Object_986"
                        geometry={nodes.Object_986.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_986.skeleton}
                      />
                      <skinnedMesh
                        name="Object_988"
                        geometry={nodes.Object_988.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_988.skeleton}
                      />
                      <skinnedMesh
                        name="Object_989"
                        geometry={nodes.Object_989.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_989.skeleton}
                      />
                      <skinnedMesh
                        name="Object_991"
                        geometry={nodes.Object_991.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_991.skeleton}
                      />
                      <skinnedMesh
                        name="Object_992"
                        geometry={nodes.Object_992.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_992.skeleton}
                      />
                      <skinnedMesh
                        name="Object_994"
                        geometry={nodes.Object_994.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_994.skeleton}
                      />
                      <skinnedMesh
                        name="Object_995"
                        geometry={nodes.Object_995.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_995.skeleton}
                      />
                      <skinnedMesh
                        name="Object_997"
                        geometry={nodes.Object_997.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_997.skeleton}
                      />
                      <skinnedMesh
                        name="Object_998"
                        geometry={nodes.Object_998.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_998.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1000"
                        geometry={nodes.Object_1000.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_1000.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1001"
                        geometry={nodes.Object_1001.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_1001.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1003"
                        geometry={nodes.Object_1003.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_1003.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1004"
                        geometry={nodes.Object_1004.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_1004.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1006"
                        geometry={nodes.Object_1006.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_1006.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1007"
                        geometry={nodes.Object_1007.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_1007.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1009"
                        geometry={nodes.Object_1009.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_1009.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1010"
                        geometry={nodes.Object_1010.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_1010.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1012"
                        geometry={nodes.Object_1012.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_1012.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1013"
                        geometry={nodes.Object_1013.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_1013.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1015"
                        geometry={nodes.Object_1015.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_1015.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1016"
                        geometry={nodes.Object_1016.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_1016.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1018"
                        geometry={nodes.Object_1018.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_1018.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1019"
                        geometry={nodes.Object_1019.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_1019.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1021"
                        geometry={nodes.Object_1021.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_1021.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1022"
                        geometry={nodes.Object_1022.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_1022.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1024"
                        geometry={nodes.Object_1024.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_1024.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1025"
                        geometry={nodes.Object_1025.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_1025.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1027"
                        geometry={nodes.Object_1027.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_1027.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1028"
                        geometry={nodes.Object_1028.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_1028.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1030"
                        geometry={nodes.Object_1030.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_1030.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1031"
                        geometry={nodes.Object_1031.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_1031.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1033"
                        geometry={nodes.Object_1033.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_1033.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1034"
                        geometry={nodes.Object_1034.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_1034.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1036"
                        geometry={nodes.Object_1036.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_1036.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1037"
                        geometry={nodes.Object_1037.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_1037.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1039"
                        geometry={nodes.Object_1039.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_1039.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1040"
                        geometry={nodes.Object_1040.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_1040.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1042"
                        geometry={nodes.Object_1042.geometry}
                        material={materials.hair}
                        skeleton={nodes.Object_1042.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1043"
                        geometry={nodes.Object_1043.geometry}
                        material={materials.hair_Line}
                        skeleton={nodes.Object_1043.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1045"
                        geometry={nodes.Object_1045.geometry}
                        material={materials.cloth}
                        skeleton={nodes.Object_1045.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1046"
                        geometry={nodes.Object_1046.geometry}
                        material={materials.cloth_Line}
                        skeleton={nodes.Object_1046.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1048"
                        geometry={nodes.Object_1048.geometry}
                        material={materials.cloth}
                        skeleton={nodes.Object_1048.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1049"
                        geometry={nodes.Object_1049.geometry}
                        material={materials.cloth_Line}
                        skeleton={nodes.Object_1049.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1051"
                        geometry={nodes.Object_1051.geometry}
                        material={materials.cloth}
                        skeleton={nodes.Object_1051.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1052"
                        geometry={nodes.Object_1052.geometry}
                        material={materials.cloth_Line}
                        skeleton={nodes.Object_1052.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1054"
                        geometry={nodes.Object_1054.geometry}
                        material={materials.cloth}
                        skeleton={nodes.Object_1054.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1055"
                        geometry={nodes.Object_1055.geometry}
                        material={materials.cloth_B}
                        skeleton={nodes.Object_1055.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1056"
                        geometry={nodes.Object_1056.geometry}
                        material={materials.cloth_Line}
                        skeleton={nodes.Object_1056.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1058"
                        geometry={nodes.Object_1058.geometry}
                        material={materials.cloth}
                        skeleton={nodes.Object_1058.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1059"
                        geometry={nodes.Object_1059.geometry}
                        material={materials.cloth_B}
                        skeleton={nodes.Object_1059.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1060"
                        geometry={nodes.Object_1060.geometry}
                        material={materials.cloth_Line}
                        skeleton={nodes.Object_1060.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1062"
                        geometry={nodes.Object_1062.geometry}
                        material={materials.cloth}
                        skeleton={nodes.Object_1062.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1063"
                        geometry={nodes.Object_1063.geometry}
                        material={materials.cloth_B}
                        skeleton={nodes.Object_1063.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1064"
                        geometry={nodes.Object_1064.geometry}
                        material={materials.cloth_Line}
                        skeleton={nodes.Object_1064.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1066"
                        geometry={nodes.Object_1066.geometry}
                        material={materials.cloth}
                        skeleton={nodes.Object_1066.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1067"
                        geometry={nodes.Object_1067.geometry}
                        material={materials.cloth_B}
                        skeleton={nodes.Object_1067.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1068"
                        geometry={nodes.Object_1068.geometry}
                        material={materials.cloth_Line}
                        skeleton={nodes.Object_1068.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1070"
                        geometry={nodes.Object_1070.geometry}
                        material={materials.cloth}
                        skeleton={nodes.Object_1070.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1071"
                        geometry={nodes.Object_1071.geometry}
                        material={materials.cloth_B}
                        skeleton={nodes.Object_1071.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1072"
                        geometry={nodes.Object_1072.geometry}
                        material={materials.cloth_Line}
                        skeleton={nodes.Object_1072.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1074"
                        geometry={nodes.Object_1074.geometry}
                        material={materials.cloth}
                        skeleton={nodes.Object_1074.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1075"
                        geometry={nodes.Object_1075.geometry}
                        material={materials.cloth_B}
                        skeleton={nodes.Object_1075.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1076"
                        geometry={nodes.Object_1076.geometry}
                        material={materials.cloth_Line}
                        skeleton={nodes.Object_1076.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1078"
                        geometry={nodes.Object_1078.geometry}
                        material={materials.cloth}
                        skeleton={nodes.Object_1078.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1079"
                        geometry={nodes.Object_1079.geometry}
                        material={materials.cloth_B}
                        skeleton={nodes.Object_1079.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1080"
                        geometry={nodes.Object_1080.geometry}
                        material={materials.cloth_Line}
                        skeleton={nodes.Object_1080.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1082"
                        geometry={nodes.Object_1082.geometry}
                        material={materials.cloth}
                        skeleton={nodes.Object_1082.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1083"
                        geometry={nodes.Object_1083.geometry}
                        material={materials.cloth_B}
                        skeleton={nodes.Object_1083.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1084"
                        geometry={nodes.Object_1084.geometry}
                        material={materials.cloth_Line}
                        skeleton={nodes.Object_1084.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1086"
                        geometry={nodes.Object_1086.geometry}
                        material={materials.cloth}
                        skeleton={nodes.Object_1086.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1087"
                        geometry={nodes.Object_1087.geometry}
                        material={materials.cloth_B}
                        skeleton={nodes.Object_1087.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1088"
                        geometry={nodes.Object_1088.geometry}
                        material={materials.cloth_Line}
                        skeleton={nodes.Object_1088.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1090"
                        geometry={nodes.Object_1090.geometry}
                        material={materials.cloth}
                        skeleton={nodes.Object_1090.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1091"
                        geometry={nodes.Object_1091.geometry}
                        material={materials.cloth_B}
                        skeleton={nodes.Object_1091.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1092"
                        geometry={nodes.Object_1092.geometry}
                        material={materials.cloth_Line}
                        skeleton={nodes.Object_1092.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1094"
                        geometry={nodes.Object_1094.geometry}
                        material={materials.cloth}
                        skeleton={nodes.Object_1094.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1095"
                        geometry={nodes.Object_1095.geometry}
                        material={materials.cloth_Line}
                        skeleton={nodes.Object_1095.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1097"
                        geometry={nodes.Object_1097.geometry}
                        material={materials.cloth}
                        skeleton={nodes.Object_1097.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1098"
                        geometry={nodes.Object_1098.geometry}
                        material={materials.cloth_Line}
                        skeleton={nodes.Object_1098.skeleton}
                      />
                      <group name="Object_9" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_918" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_921" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_924" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_927" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_930" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_933" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_936" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_939" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_942" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_945" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_948" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_951" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_954" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_957" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_960" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_963" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_966" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_969" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_972" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_975" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_978" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_981" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_984" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_987" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_990" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_993" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_996" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_999" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1002" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1005" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1008" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1011" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1014" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1017" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1020" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1023" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1026" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1029" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1032" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1035" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1038" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1041" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1044" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1047" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1050" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1053" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1057" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1061" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1065" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1069" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1073" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1077" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1081" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1085" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1089" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1093" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                      <group name="Object_1096" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                    </group>
                  </group>
                  <group name="cs_grp">
                    <group name="cs_eyelid2" position={[-1.788, 0.165, -0.029]} scale={0.098} />
                    <group
                      name="cs_jaw_square"
                      position={[2.907, -0.044, 0.461]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.283}
                    />
                    <group
                      name="cs_half_circle"
                      position={[0.03, -0.053, -0.087]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.069}
                    />
                    <group
                      name="cs_shoulderr"
                      position={[-0.708, -0.053, 0.672]}
                      rotation={[0, 0, Math.PI / 2]}
                      scale={0.085}
                    />
                    <group
                      name="cs_shoulderl"
                      position={[-0.532, -0.053, 0.672]}
                      rotation={[0, 0, Math.PI / 2]}
                      scale={0.085}
                    />
                    <group
                      name="cs_square"
                      position={[-5.737, -0.053, 0.822]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_base_finger_end"
                      position={[-2.89, -0.053, -0.157]}
                      scale={0.098}
                    />
                    <group name="cs_base_finger" position={[-2.67, -0.053, -0.157]} scale={0.098} />
                    <group
                      name="cs_circle_head"
                      position={[-5.032, -0.381, 0.81]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.074}
                    />
                    <group
                      name="cs_semi_sphere_inv"
                      position={[-0.615, -0.053, 0.472]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.085}
                    />
                    <group
                      name="cs_semi_sphere"
                      position={[-0.648, -0.053, 0.472]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.085}
                    />
                    <group name="cs_fist" position={[7.973, 0, 0]} />
                    <group
                      name="cs_ctrl_ik_solid_blue"
                      position={[5.16, -0.053, -0.508]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.055}
                    />
                    <group
                      name="cs_ctrl_ik_solid_red"
                      position={[4.963, -0.053, -0.508]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.055}
                    />
                    <group
                      name="cs_c_eye_offset"
                      position={[-1.617, -0.053, 0.174]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_pupil_blue"
                      position={[4.722, -0.053, -0.515]}
                      rotation={[0, 0, Math.PI]}
                      scale={0.208}
                    />
                    <group
                      name="cs_solid_pupil_red"
                      position={[4.483, -0.053, -0.515]}
                      rotation={[0, 0, Math.PI]}
                      scale={0.215}
                    />
                    <group
                      name="cs_solid_eye_red"
                      position={[3.917, -0.053, -0.515]}
                      rotation={[0, 0, Math.PI]}
                      scale={0.215}
                    />
                    <group
                      name="cs_solid_eye_blue"
                      position={[4.156, -0.053, -0.515]}
                      rotation={[0, 0, Math.PI]}
                      scale={0.208}
                    />
                    <group name="cs_user_c_thigh_fkr" position={[4.963, -0.067, -0.508]} />
                    <group
                      name="cs_user_c_thigh_fkl"
                      position={[0.126, -0.001, 0.772]}
                      rotation={[-1.629, 0.01, -0.175]}
                      scale={0.415}
                    />
                    <group name="cs_user_c_leg_fkr" position={[2.476, 0.051, 0.479]} />
                    <group
                      name="cs_user_c_leg_fkl"
                      position={[0.169, -0.015, 0.528]}
                      rotation={[-0.883, 1.317, -0.642]}
                      scale={0.475}
                    />
                    <group
                      name="cs_spine"
                      position={[0, -0.006, 1.075]}
                      rotation={[Math.PI / 2, -0.007, 0]}
                      scale={0.05}
                    />
                    <group name="cs_hand" position={[2.476, 0.051, 0.479]} scale={0.098} />
                    <group
                      name="cs_cube_03"
                      position={[-4.468, -0.381, 0.673]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.074}
                    />
                    <group
                      name="cs_box_head"
                      position={[-3.901, -0.381, 0.81]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.074}
                    />
                    <group
                      name="cs_cube_02"
                      position={[-3.443, -0.381, 0.873]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.074}
                    />
                    <group name="cs_box" position={[-2.347, -0.053, -0.16]} scale={0.702} />
                    <group name="cs_foot_roll" position={[-1.409, -0.053, -0.157]} scale={0.098} />
                    <group name="cs_footl" position={[1.967, -0.053, 0.472]} scale={0.098} />
                    <group
                      name="cs_jaw"
                      position={[2.449, -0.044, 0.461]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.283}
                    />
                    <group
                      name="cs_cube"
                      position={[-2.803, -0.515, 0.863]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.192}
                    />
                    <group
                      name="cs_cheek_inflate"
                      position={[0.531, -0.053, 0.117]}
                      scale={0.098}
                    />
                    <group name="cs_wire_eyebrow" position={[3.566, -0.046, -0.46]} scale={0.25} />
                    <group
                      name="cs_solid_eyebrow_red"
                      position={[3.081, -0.046, -0.46]}
                      scale={0.25}
                    />
                    <group
                      name="cs_solid_eyebrow_blue"
                      position={[2.679, -0.046, -0.46]}
                      scale={0.25}
                    />
                    <group name="cs_footr" position={[2.067, -0.053, 0.472]} scale={0.098} />
                    <group
                      name="cs_c_eyelid_micro"
                      position={[-1.961, -0.053, 0.174]}
                      scale={0.098}
                    />
                    <group name="cs_arrow_03" position={[1.228, -0.044, 0.037]} scale={0.283} />
                    <group
                      name="cs_pos"
                      position={[-2.074, -0.053, 0.822]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group name="cs_curve" position={[0.422, -0.053, 0.515]} scale={0.098} />
                    <group name="cs_arrow_cross" position={[2.082, -0.044, 0.037]} scale={0.283} />
                    <group
                      name="cs_plane_5"
                      position={[0.803, -0.053, 0.001]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.055}
                    />
                    <group
                      name="cs_fk"
                      position={[-1.602, -0.053, 0.822]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group name="cs_foot_fk" position={[-0.083, -0.053, 0.285]} scale={0.098} />
                    <group name="cs_eyelid" position={[-1.785, -0.053, 0.071]} scale={0.098} />
                    <group name="cs_c_eye" position={[-1.785, -0.053, 0.174]} scale={0.098} />
                    <group name="cs_arrow" position={[1.025, -0.044, 0.037]} scale={0.283} />
                    <group name="cs_arrow_02" position={[1.328, -0.044, 0.037]} scale={0.283} />
                    <group
                      name="cs_circle_ik"
                      position={[-0.267, -0.053, -0.113]}
                      rotation={[Math.PI / 2, -1.571, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_plane_4_fill"
                      position={[1.338, -0.053, 0.506]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_torus_04_rot2"
                      position={[-0.689, -0.053, -0.16]}
                      scale={0.098}
                    />
                    <group
                      name="cs_torus_04_rot"
                      position={[-0.772, -0.053, -0.15]}
                      scale={0.098}
                    />
                    <group name="cs_torus_05" position={[-0.943, -0.053, -0.16]} scale={0.098} />
                    <group
                      name="cs_triangle_02"
                      position={[0.213, -0.053, 0.948]}
                      rotation={[0, 0, 1.743]}
                      scale={0.172}
                    />
                    <group
                      name="cs_triangle"
                      position={[-0.166, -0.053, 0.935]}
                      rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                      scale={0.225}
                    />
                    <group
                      name="cs_plane_4"
                      position={[0.846, -0.053, 0.501]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_circle_squashed"
                      position={[0.531, -0.053, -0.061]}
                      scale={0.098}
                    />
                    <group
                      name="cs_yeux"
                      position={[-1.039, -0.053, 0.462]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_plane_3"
                      position={[0.643, -0.053, 0.001]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.055}
                    />
                    <group
                      name="cs_plane_2"
                      position={[-1.064, -0.053, 0.822]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_circle_01"
                      position={[0.03, -0.053, -0.087]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_circle_02"
                      position={[0.33, -0.053, -0.078]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group name="cs_plane_1" position={[0.422, -0.053, 0.285]} scale={0.098} />
                    <group name="cs_torus_04" position={[-1.265, -0.053, -0.157]} scale={0.098} />
                    <group name="cs_torus_02" position={[-0.84, -0.053, 0.164]} scale={0.098} />
                    <group name="cs_torus_03" position={[-0.259, -0.053, 0.156]} scale={0.098} />
                    <group name="cs_torus_01" position={[-1.25, -0.053, 0.174]} scale={0.098} />
                    <group
                      name="cs_sphere"
                      position={[-0.848, -0.053, 0.472]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.085}
                    />
                    <group name="cs_sphere_dir2" position={[-0.746, -0.053, 0.473]} scale={0.094} />
                    <group name="cs_sphere_dir1" position={[-0.548, -0.053, 0.477]} scale={0.085} />
                    <group name="cs_arrow_twist" position={[5.246, -0.046, 0.308]} />
                    <group
                      name="cs_arrow_cross_solid"
                      position={[-1.203, -0.044, -1.334]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.084}
                    />
                    <group
                      name="cs_pos_solid_eye_offset_blue"
                      position={[-2.583, -0.053, -1.292]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.245}
                    />
                    <group
                      name="cs_pos_solid_eye_offset_red"
                      position={[-3.083, -0.053, -1.292]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.245}
                    />
                    <group
                      name="cs_solid_arrow_twist_blue"
                      position={[2.266, -0.046, -0.46]}
                      scale={0.25}
                    />
                    <group
                      name="cs_solid_arrow_twist_red"
                      position={[1.859, -0.046, -0.46]}
                      scale={0.25}
                    />
                    <group
                      name="cs_solid_bar_01"
                      position={[-1.916, -0.053, -0.498]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_bar_blue"
                      position={[-6.034, -0.231, -0.422]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_bar_red"
                      position={[-4.874, -0.053, -0.498]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_circle_01"
                      position={[0.03, -0.053, -0.515]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_circle_02"
                      position={[0.524, -0.053, -0.515]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_circle_02_blue"
                      position={[0.876, -0.053, -0.515]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_circle_02_green"
                      position={[0.326, -0.053, -0.515]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_circle_02_red"
                      position={[0.7, -0.053, -0.515]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_circle_ik_blue"
                      position={[-4.072, -0.053, -0.482]}
                      rotation={[-Math.PI / 2, -1.571, 0]}
                      scale={0.133}
                    />
                    <group
                      name="cs_solid_circle_ik_red"
                      position={[-3.226, -0.053, -0.482]}
                      rotation={[-Math.PI / 2, -1.571, 0]}
                      scale={0.133}
                    />
                    <group
                      name="cs_solid_circle_squashed_blue"
                      position={[0.102, -0.598, -1.152]}
                      scale={0.374}
                    />
                    <group
                      name="cs_solid_circle_squashed_green"
                      position={[-0.429, -0.598, -1.152]}
                      scale={0.374}
                    />
                    <group
                      name="cs_solid_circle_squashed_red"
                      position={[0.65, -0.598, -1.152]}
                      scale={0.374}
                    />
                    <group
                      name="cs_solid_fk_blue"
                      position={[-3.712, -0.053, -0.483]}
                      rotation={[Math.PI / 2, 0, -Math.PI]}
                      scale={0.062}
                    />
                    <group
                      name="cs_solid_fk_red"
                      position={[-2.867, -0.053, -0.483]}
                      rotation={[Math.PI / 2, 0, -Math.PI]}
                      scale={0.062}
                    />
                    <group
                      name="cs_solid_plane_2"
                      position={[-1.176, -0.053, -0.498]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.054}
                    />
                    <group
                      name="cs_solid_plane_2_blue"
                      position={[-0.633, -0.053, -0.498]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.054}
                    />
                    <group
                      name="cs_solid_plane_2_red"
                      position={[-0.891, -0.053, -0.498]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.054}
                    />
                    <group
                      name="cs_solid_plane_3"
                      position={[0.977, -0.053, -0.508]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.055}
                    />
                    <group
                      name="cs_solid_plane_3_blue"
                      position={[1.362, -0.053, -0.508]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.055}
                    />
                    <group
                      name="cs_solid_plane_3_red"
                      position={[1.153, -0.053, -0.508]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.055}
                    />
                    <group
                      name="cs_solid_plane_5_blue"
                      position={[1.609, -0.053, -0.508]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.055}
                    />
                    <group
                      name="cs_solid_plane_5_red"
                      position={[1.523, -0.053, -0.508]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.055}
                    />
                    <group
                      name="cs_solid_torus_04_blue"
                      position={[-2.533, -0.053, -0.478]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_torus_04_red"
                      position={[-2.606, -0.053, -0.478]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_torus_blue"
                      position={[-3.844, -0.053, -1.279]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_torus_green"
                      position={[-4.087, -0.053, -1.279]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_torus_red"
                      position={[-3.602, -0.053, -1.279]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_triangle"
                      position={[-0.277, -0.053, -0.474]}
                      rotation={[Math.PI / 2, -1.571, 0]}
                      scale={0.225}
                    />
                    <group
                      name="cs_pos_solid"
                      position={[-2.074, -0.053, -1.292]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_eye_aim_blue"
                      position={[-1.964, -0.053, -0.042]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_eye_aim_global"
                      position={[-1.845, -0.053, -0.087]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_eye_aim_red"
                      position={[-2.082, -0.053, -0.042]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_eye_aim"
                      position={[-1.554, -0.053, -0.087]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_eye_aim_global"
                      position={[-1.715, -0.053, -0.087]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_user_c_skull_01x"
                      position={[0, -0.019, 1.575]}
                      rotation={[-Math.PI / 2, 1.571, 0]}
                      scale={0.058}
                    />
                    <group
                      name="cs_user_c_shoulderl"
                      position={[0.078, -0.064, 1.396]}
                      rotation={[-Math.PI, 0, -1.538]}
                      scale={0.081}
                    />
                    <group name="cs_user_c_shoulderr" position={[-1.73, 0.125, 0.128]} />
                    <group
                      name="cs_user_c_skull_02x"
                      position={[0, -0.019, 1.575]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.053}
                    />
                    <group
                      name="cs_user_c_skull_03x"
                      position={[0, -0.019, 1.669]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.065}
                    />
                    <group name="cs_twist_shape" position={[-0.476, -0.053, 0.156]} scale={0.098} />
                    <group name="cs_torus_tip_01" position={[-0.992, 0, 0]} />
                    <group name="cs_wavy_circle" position={[6.982, 0, 0]} />
                    <group name="cs_arrow_x_up" position={[1.025, -0.135, 0.037]} scale={0.283} />
                    <group name="cs_arrow_x_down" position={[1.025, -0.238, 0.037]} scale={0.283} />
                    <group
                      name="cs_c_foot_ik_offset"
                      rotation={[-Math.PI, -Math.PI / 2, 0]}
                      scale={0.112}
                    />
                    <group name="cs_fly" position={[3.682, -0.044, 0.037]} scale={0.283} />
                    <group name="cs_cube_solid" position={[-3.953, 0, 0]} />
                    <group name="cs_cube_solid_offset" position={[-4.354, 0, 0]} />
                    <group
                      name="cs_sphere_offset"
                      position={[-0.848, -0.053, 0.556]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.085}
                    />
                    <group name="cs_sphere_solid_offset" position={[-5.18, 0, 0]} />
                    <group name="cs_box_offset" position={[-5.754, 0, 0]} />
                    <group name="cs_sphere_solid" position={[-4.745, 0, 0]} />
                    <group
                      name="cs_user_c_arm_fkl"
                      position={[0.237, 0.026, 1.294]}
                      rotation={[3.113, -0.368, -1.683]}
                      scale={0.229}
                    />
                    <group name="cs_user_c_arm_fkr" position={[0.131, 0.015, 1.335]} />
                    <group name="cs_user_c_arm_ikr" position={[0.131, 0.015, 1.335]} />
                  </group>
                </group>
                <group name="body" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="eyebrow" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_FM002M" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_FM005M" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_FL001M" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_FM003M" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_ML001M" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_FM001M" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BL002_01" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BL002_02" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BL002_03M" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BL002_04M" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BL002_05M" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BR001_01" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BR001_02" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BR002002M" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BR001_03_origin" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BH001M" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_MR004M" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BR002003M" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_FOOL004M" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_FM004M" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BR001_05" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BR001_04" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BL001M001" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BL001M002" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BL001M003" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BL001M004" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BL001M005" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BL001M006" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BL001M007" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BL001M008" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BL001M009" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_ML001M002" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BMF001M001" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BMF001M002" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BMF001M003" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BMF001M004" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BMF001M005" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BMF001M006" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BMF001M007" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_ML001M003" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="hat01" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="hat02" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="hat03" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Blouse02" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="LeatedSkirt" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Robe02" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Robe03" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="boots" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="tie" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="headband01" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="headband02" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Blouse01" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Robe01" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Hair_BL002_ornaM" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
                <group name="Robe06" rotation={[-Math.PI / 2, 0, 0]} scale={45.141} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>

  )
});


export default Wizard;
useGLTF.preload('/models/elaina.glb')
