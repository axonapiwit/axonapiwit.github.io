// "use client";
// import React, { useEffect, useState } from "react";

// interface Leaf {
//   id: number;
//   x: number;
//   y: number;
//   drift: number; // Drift amount for wind effect
//   animationDuration: string;
// }

// const createLeaf = (): Leaf => ({
//   id: Math.random(),
//   x: Math.random() * 100,
//   y: Math.random() * 100,
//   drift: Math.random() * 0.5 + 0.5, // Random drift speed
//   animationDuration: `${Math.random() * 5 + 5}s`,
// });

// const WindBackground: React.FC = () => {
//   const [leafs, setLeafs] = useState<Leaf[]>([]);

//   useEffect(() => {
//     const addLeafPeriodically = () => {
//       const newLeaf = createLeaf();
//       setLeafs((currentLeafs) => [
//         ...currentLeafs.slice(-14),
//         newLeaf,
//       ]);
//     };

//     const interval = setInterval(addLeafPeriodically, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const moveLeaf = () => {
//       setLeafs((currentLeafs) =>
//         currentLeafs.map((leaf) => {
//           // Update position for wind effect
//           const newX = leaf.x + leaf.drift; // Drift horizontally
//           const newY =
//             leaf.y +
//             Math.sin((leaf.x / 10) * Math.PI) * 0.5; // Gentle wave motion

//           return {
//             ...leaf,
//             x: newX % 100, // Wrap horizontally
//             y: (newY + 100) % 100, // Wrap vertically to prevent out-of-bound
//           };
//         })
//       );
//     };

//     const interval = setInterval(moveLeaf, 50); // Adjust speed

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
//       {leafs.map((leaf) => (
//         <div
//           key={leaf.id}
//           className="absolute rounded-full w-[10px] h-[10px] bg-leaf-radial"
//           style={{
//             top: `${leaf.y}%`,
//             left: `${leaf.x}%`,
//             animation: `glow ${leaf.animationDuration} infinite alternate`,
//           }}
//         ></div>
//       ))}
//       <style jsx>{`
//         @keyframes glow {
//           0% {
//             transform: scale(1);
//             opacity: 0.8;
//           }
//           50% {
//             transform: scale(1.5);
//             opacity: 1;
//           }
//           100% {
//             transform: scale(1);
//             opacity: 0.8;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WindBackground;


"use client";
import React, { useEffect, useState } from "react";

interface Leaf {
  id: number;
  x: number;
  y: number;
  drift: number; // Drift amount for wind effect
  animationDuration: string;
}

const createLeaf = (): Leaf => ({
  id: Math.random(),
  x: Math.random() * 100,
  y: Math.random() * 100,
  drift: Math.random() * 0.5 + 0.5, // Random drift speed
  animationDuration: `${Math.random() * 5 + 5}s`,
});

const WindBackground: React.FC = () => {
  const [leafs, setLeafs] = useState<Leaf[]>([]);

  useEffect(() => {
    const addLeafPeriodically = () => {
      const newLeaf = createLeaf();
      setLeafs((currentLeafs) => [
        ...currentLeafs.slice(-14),
        newLeaf,
      ]);
    };

    const interval = setInterval(addLeafPeriodically, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const moveLeaf = () => {
      setLeafs((currentLeafs) =>
        currentLeafs.map((leaf) => {
          const newX = leaf.x + leaf.drift; // Drift horizontally
          const newY =
            leaf.y +
            Math.sin((leaf.x / 10) * Math.PI) * 0.5; // Gentle wave motion

          return {
            ...leaf,
            x: newX % 100, // Wrap horizontally
            y: (newY + 100) % 100, // Wrap vertically
          };
        })
      );
    };

    const interval = setInterval(moveLeaf, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {leafs.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute w-[20px] h-[40px] bg-leaf-image"
          style={{
            top: `${leaf.y}%`,
            left: `${leaf.x}%`,
            animation: `float ${leaf.animationDuration} linear infinite`,
          }}
        ></div>
      ))}
      <style jsx>{`
        .bg-leaf-image {
          background-image: url('/icons/maple-leaf.svg'); /* Replace with your SVG or PNG path */
          background-size: contain;
          background-repeat: no-repeat;
        }

        @keyframes float {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(15deg);
          }
          100% {
            transform: rotate(30deg);
          }
        }
      `}</style>
    </div>
  );
};

export default WindBackground;


// "use client";
// import React, { useEffect, useState } from "react";

// interface Leaf {
//   id: number;
//   x: number;
//   y: number;
//   drift: number; // Drift amount for wind effect
//   animationDuration: string;
//   rotationDuration: string; // Duration for rotation
// }

// const createLeaf = (): Leaf => ({
//   id: Math.random(),
//   x: Math.random() * 100,
//   y: Math.random() * 100,
//   drift: Math.random() * 0.5 + 0.5, // Random drift speed
//   animationDuration: `${Math.random() * 5 + 5}s`,
//   rotationDuration: `${Math.random() * 3 + 2}s`, // Random rotation speed
// });

// const WindBackground: React.FC = () => {
//   const [leafs, setLeafs] = useState<Leaf[]>([]);

//   useEffect(() => {
//     const addLeafPeriodically = () => {
//       const newLeaf = createLeaf();
//       setLeafs((currentLeafs) => [
//         ...currentLeafs.slice(-14),
//         newLeaf,
//       ]);
//     };

//     const interval = setInterval(addLeafPeriodically, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const moveLeaf = () => {
//       setLeafs((currentLeafs) =>
//         currentLeafs.map((leaf) => {
//           const newX = leaf.x + leaf.drift; // Drift horizontally
//           const newY =
//             leaf.y +
//             Math.sin((leaf.x / 10) * Math.PI) * 0.5; // Gentle wave motion

//           return {
//             ...leaf,
//             x: newX % 100, // Wrap horizontally
//             y: (newY + 100) % 100, // Wrap vertically
//           };
//         })
//       );
//     };

//     const interval = setInterval(moveLeaf, 50);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
//       {leafs.map((leaf) => (
//         <div
//           key={leaf.id}
//           className="absolute w-[20px] h-[40px] bg-leaf-image"
//           style={{
//             top: `${leaf.y}%`,
//             left: `${leaf.x}%`,
//             animation: `float ${leaf.animationDuration} linear infinite, spin ${leaf.rotationDuration} linear infinite`,
//           }}
//         ></div>
//       ))}
//       <style jsx>{`
//         .bg-leaf-image {
//           background-image: url('/icons/maple-leaf.svg'); /* Replace with your SVG or PNG path */
//           background-size: contain;
//           background-repeat: no-repeat;
//         }

//         @keyframes float {
//           0% {
//             transform: translateY(0) rotate(0deg);
//           }
//           50% {
//             transform: translateY(10px) rotate(15deg);
//           }
//           100% {
//             transform: translateY(0) rotate(45deg);
//           }
//         }

//         @keyframes spin {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WindBackground;
