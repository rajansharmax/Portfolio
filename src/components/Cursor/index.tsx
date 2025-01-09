// TODO - add cursor effect
// import { useEffect, useRef, useState, useCallback } from "react";
// // import { Coordinates } from "@/@types/position";
// // import { useMouse } from "@/hooks/mouse-state";
// // import { useKonami } from "@/hooks/konami";
// // import ConfettiContainer from "./ConfettiContainer";
// // import { SoundEffects, useSoundEffect } from "@/hooks/sound-effects";

// const CONFETTI_DURATION = 1000;
// const CURSOR_SPEED = 0.05;

// type TrackedClick = Coordinates & { timestamp: number };

// const Cursor = () => {
//     const powerUpSound = useSoundEffect(SoundEffects.POWER_UP);
//     const [soundPlayed, setSoundPlayed] = useState<boolean>(false);

//     const { konamiActive } = useKonami();
//     const { position, canClick, pressed, pointerType } = useMouse();

//     const cursorTimeout = useRef<ReturnType<typeof setTimeout>>();
//     const [cursorOpacity, setCursorOpacity] = useState<number>(0.75);
//     const [cursorScale, setCursorScale] = useState<number>(1);
//     const [clicks, setClicks] = useState<TrackedClick[]>([]);

//     const [cursorPosition, setCursorPosition] = useState<Coordinates>({ x: 0, y: 0 });

//     const handleClick = useCallback(
//         (event: MouseEvent) => {
//             if (!konamiActive) return;

//             const coordinates: TrackedClick = {
//                 x: event.clientX,
//                 y: event.clientY,
//                 timestamp: Date.now(),
//             };

//             setClicks((prevClicks) => [...prevClicks, coordinates]);

//             setTimeout(() => {
//                 setClicks((prevClicks) => prevClicks.filter((click) => click.timestamp !== coordinates.timestamp));
//             }, CONFETTI_DURATION);
//         },
//         [konamiActive]
//     );

//     useEffect(() => {
//         if (konamiActive && !soundPlayed) {
//             setSoundPlayed(true);
//             powerUpSound.play();
//         }
//     }, [konamiActive, powerUpSound, soundPlayed]);

//     useEffect(() => {
//         if (pressed) {
//             setCursorScale(0.75);
//         } else if (canClick) {
//             setCursorScale(1.25);
//         } else {
//             setCursorScale(1);
//         }
//     }, [canClick, pressed]);

//     useEffect(() => {
//         if (pointerType === "mobile") return;

//         document.addEventListener("mousedown", handleClick);
//         return () => document.removeEventListener("mousedown", handleClick);
//     }, [handleClick, pointerType]);

//     useEffect(() => {
//         let frameId: number;

//         const animateCursor = () => {
//             frameId = requestAnimationFrame(animateCursor);

//             setCursorPosition((prev) => {
//                 const distance: Coordinates = {
//                     x: (position.x - prev.x) * CURSOR_SPEED,
//                     y: (position.y - prev.y) * CURSOR_SPEED,
//                 };

//                 return {
//                     x: Math.floor((prev.x + distance.x) * 10) / 10,
//                     y: Math.floor((prev.y + distance.y) * 10) / 10,
//                 };
//             });
//         };

//         animateCursor();
//         return () => cancelAnimationFrame(frameId);
//     }, [position]);

//     useEffect(() => {
//         if (cursorTimeout.current) clearTimeout(cursorTimeout.current);

//         setCursorOpacity(0.75);
//         cursorTimeout.current = setTimeout(() => setCursorOpacity(0), 500);
//     }, [cursorPosition, canClick, pressed]);

//     if (pointerType === "mobile") return null;

//     return (
//         <>
//             {clicks.map(({ x, y, timestamp }) => (
//                 <ConfettiContainer key={`${x}-${y}-${timestamp}`} x={x} y={y} />
//             ))}
//             <div
//                 style={{
//                     transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
//                     opacity: canClick || pressed ? 1 : cursorOpacity,
//                 }}
//                 className="fixed z-50 hidden transition-opacity duration-500 pointer-events-none sm:block"
//             >
//                 <div
//                     className="transition-all duration-200 transform -translate-x-1/2 -translate-y-1/2 border border-black rounded-full dark:border-white"
//                     style={{ padding: `${cursorScale}rem` }}
//                 />
//             </div>
//         </>
//     );
// };

// export default Cursor;
