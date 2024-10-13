// import React, { useEffect, useReducer, useRef, useState } from "react";
// import geoReducer from "../Reducers/geoReducer";
// import { request } from "../requests/commons";
// // const bootImage = "../images/boot.png";

// import {
//   YMaps,
//   Map,
//   Placemark,
//   Button,
//   ObjectManager,
//   Circle,
// } from "@pbe/react-yandex-maps";

// const Map_yan = () => {
//   const objectManagerFeatures = {
//     type: "FeatureCollection",
//     features: [
//       {
//         type: "Feature",
//         id: 1,
//         geometry: {
//           type: "Point",
//           coordinates: [55.751574, 37.573856], // Координаты объекта
//         },
//         properties: {
//           balloonContent: "Object 1",
//           hintContent: "Hint for Object 1",
//         },
//       },
//       {
//         type: "Feature",
//         id: 2,
//         geometry: {
//           type: "Point",
//           coordinates: [55.751514, 37.563856], // Другой объект
//         },
//         properties: {
//           balloonContent: "Object 2",
//           hintContent: "Hint for Object 2",
//         },
//       },
//       {
//         type: "Feature",
//         id: 3,
//         geometry: {
//           type: "Point",
//           coordinates: [55.611514, 37.563856], // Другой объект
//         },
//         properties: {
//           balloonContent: "Object 3",
//           hintContent: "Hint for Object 3",
//         },
//       },
//     ],
//   };
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "80vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div style={{ width: "70%", height: "85%" }}>
//         <YMaps>
//           <Map
//             defaultState={{
//               center: [55.751574, 37.573856],
//               zoom: 12,
//               // type: "yandex#hybrid",
//             }}
//             width="100%"
//             height="100%"
//             options={{
//               suppressMapOpenBlock: true, // Отключает блок с предложением "Создать свою карту"
//             }}
//             // Убираем ненужные элементы интерфейса
//             controls={[]}
//             // style={{ borderRadius: "25px" }}
//           >
//             <Button
//               options={{ maxWidth: 128 }}
//               data={{ content: "Unpress me!" }}
//               defaultState={{ selected: true }}
//               onClick={() => console.log("1")}
//             />
//             <Placemark
//               geometry={[55.751574, 37.573116]}
//               onClick={() => console.log("2")}
//               options={{
//                 iconLayout: "default#image", // Кастомный макет с изображением
//                 iconImageHref:
//                   "https://cdn1.iconfinder.com/data/icons/woman-shoes/154/extra-high-heel-shoes-1024.png", // Базовое изображение
//                 iconImageSize: [30, 42],
//                 iconImageOffset: [-15, -42],
//               }}
//             />
//             <ObjectManager
//               options={{
//                 clusterize: true,
//                 gridSize: 32,
//               }}
//               objects={{
//                 openBalloonOnClick: true,
//                 preset: "islands#greenDotIcon",
//               }}
//               clusters={{
//                 preset: "islands#redClusterIcons",
//               }}
//               // filter={(object) => object.id % 2 === 0}
//               defaultFeatures={objectManagerFeatures} // Подставляем ранее созданную переменную
//               modules={[
//                 "objectManager.addon.objectsBalloon",
//                 "objectManager.addon.objectsHint",
//               ]}
//             />
//           </Map>
//         </YMaps>
//       </div>
//       {/* <img src="bootImage" /> */}
//     </div>
//   );
// };

// export default Map_yan;

// {
//   /* <Circle
//               geometry={[[55.76, 37.6], 1000]}
//               options={{
//                 draggable: true,
//                 fillColor: "#000",
//                 strokeColor: "#990066",
//                 strokeOpacity: 0.8,
//                 strokeWidth: 5,
//               }}
//             /> */
// }
