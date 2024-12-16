// 'use client'
// import React, { useCallback, useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {cn} from './lib/utils';

// export const FlipWords = ({ words, duration = 1500, className }) => {
//   const [currentWord, setCurrentWord] = useState(words[0]);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const startAnimation = useCallback(() => {
//     const word = words[words.indexOf(currentWord) + 1] || words[0];
//     setCurrentWord(word);
//     setIsAnimating(true);
//   }, [currentWord, words]);

//   useEffect(() => {
//     if (!isAnimating) setTimeout(() => {
//       startAnimation();
//     }, duration);
//   }, [isAnimating, duration, startAnimation]);

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={currentWord}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -20 }}
//         transition={{ duration: 0.5 }}
//         onAnimationComplete={() => { setIsAnimating(false); }}
//         className={cn("font-bold", className)}
//       >
//         {currentWord.split(" ").map((word, wordIndex) => (
//           <span key={`${word}-${wordIndex}`} className="flex">
//             {word.split("").map((letter, letterIndex) => (
//               <span key={`${letter}-${letterIndex}`} className="flex">
//                 {letter}
//               </span>
//             ))}
//             {"\u00A0"}
//           </span>
//         ))}
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// // export default FlipWords;