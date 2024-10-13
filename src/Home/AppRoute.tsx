// import React from "react";
// import { YMaps, Map, Placemark, withYMaps } from "@pbe/react-yandex-maps";

// export default function AppRoute() {
//   const LengthPrinter = React.useMemo(() => {
//     return ({ ymaps, route }) => {
//       const [routeLength, setRouteLength] = React.useState(null);

//       React.useEffect(() => {
//         let canceled = false;
//         if (ymaps && ymaps.route) {
//           ymaps.route(route).then((route) => {
//             if (!canceled) {
//               setRouteLength(route.getHumanLength().replace("&#160;", " "));
//             }
//           });
//         }

//         // Правильный способ вернуть функцию для очистки эффекта
//         return () => {
//           canceled = true;
//         };
//       }, [ymaps, ...route]);

//       return routeLength ? (
//         <p>
//           The route from <strong>{route[0]}</strong> to{" "}
//           <strong>{route[1]}</strong> is <strong>{routeLength}</strong> long
//         </p>
//       ) : (
//         <p>Loading route...</p>
//       );
//     };
//   }, []);

//   const ConnectedLengthPrinter = React.useMemo(() => {
//     return withYMaps(LengthPrinter, true, ["route"]);
//   }, [LengthPrinter]);

//   return (
//     <YMaps query={{ lang: "en_RU" }}>
//       {/* <ConnectedLengthPrinter route={["Moscow, Russia", "Berlin, Germany"]} /> */}
//     </YMaps>
//   );
// }
