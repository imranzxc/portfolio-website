import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

const CircularProgressBar = ({ value, name, url, index }) => {
  const animations = {
    card1: {
      initial: { opacity: 0, x: 20, y: 20 },
      exit: { opacity: 0, x: 10, y: 10, transition: { duration: 0.2, delay: index * 0.1 + 0.1 } },
      animate: { opacity: 1, x: 0, y: 0, transition: { duration: 0.4, delay: index * 0.1 + 0.1 } },
    },
    card2: {
      initial: { opacity: 0, x: -20, y: 20 },
      exit: { opacity: 0, x: -10, y: 10, transition: { duration: 0.2, delay: index * 0.1 + 0.1 } },
      animate: { opacity: 1, x: 0, y: 0, transition: { duration: 0.4, delay: index * 0.1 + 0.1 } },
    },
    card3: {
      initial: { opacity: 0, x: 20, y: -20 },
      exit: { opacity: 0, x: 10, y: -10, transition: { duration: 0.2, delay: index * 0.1 + 0.1 } },
      animate: { opacity: 1, x: 0, y: 0, transition: { duration: 0.4, delay: index * 0.1 + 0.1 } },
    },
    card4: {
      initial: { opacity: 0, x: -20, y: -20 },
      exit: { opacity: 0, x: -10, y: -10, transition: { duration: 0.2, delay: index * 0.1 + 0.1 } },
      animate: { opacity: 1, x: 0, y: 0, transition: { duration: 0.4, delay: index * 0.1 + 0.1 } },
    },
  };
  return (
    <motion.div
      variants={
        index == 0
          ? animations.card1
          : index == 1
          ? animations.card2
          : index == 2
          ? animations.card3
          : animations.card4
      }
      animate="animate"
      exit="exit"
      initial="initial"
      className="relative w-32 mx-5 text-center"
    >
      <CircularProgressbar
        value={value}
        circleRatio={0.75}
        styles={buildStyles({
          rotation: 1 / 2 + 1 / 8,
          strokeLinecap: 'butt',
          pathColor: '#65FEDA',
          trailColor: '#ffffff1a',
        })}
      />
      <div className="absolute w-12 pb-12 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <Image src={url} alt="imran" />
      </div>
      <h2 className="pb-5 text-xl text-center font-codeText text-lightBluePrimary">{name}</h2>
    </motion.div>
  );
};

export default CircularProgressBar;
