import Heading from '../Heading';
import Image from 'next/image';
import pic from '../../public/imran.png';
import { motion } from 'framer-motion';

const About = () => {
  const animations = {
    photo: {
      initial: { opacity: 0, x: 20 },
      exit: { opacity: 0, x: 10, transition: { duration: 0.3, delay: 0.1 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.2 } },
    },
    desc: {
      initial: { opacity: 0, x: -20 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.3, delay: 0.1 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.3 } },
    },
    expert: {
      initial: { opacity: 0, x: -20 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.3, delay: 0.1 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.4 } },
    },
    p1: {
      initial: { opacity: 0, x: -20 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.3, delay: 0.15 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.5 } },
    },
    p2: {
      initial: { opacity: 0, x: -20 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.3, delay: 0.18 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.6 } },
    },
    p3: {
      initial: { opacity: 0, x: -20 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.3, delay: 0.21 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.7 } },
    },
  };
  return (
    <>
      <div className="px-10 py-20">
        <Heading heading="Кто я?" />
        <div className="flex flex-col items-center justify-center md:flex-row mt-14">
          <motion.div
            variants={animations.photo}
            initial="initial"
            animate="animate"
            exit="exit"
            className="my-10 md:my-0 w-[80%] md:w-[50rem]"
          >
            <Image className="rounded-full" src={pic} alt="Imran" />
          </motion.div>
          <div className="text-xl text-justify md:p-5 md:ml-10 md:-mr-20 md:text-left text-lightBluePrimary">
            <motion.p
              variants={animations.desc}
              initial="initial"
              animate="animate"
              exit="exit"
              className="my-2 leading-8"
            >
              Привет! Я Бурсагов Имран, frontend-разработчик 👨‍💻
            </motion.p>
            <div className="mt-8 text-justify md:mt-5 md:text-left">
              <motion.p
                variants={animations.expert}
                initial="initial"
                animate="animate"
                exit="exit"
                className="mb-2"
              >
                Немного обо мне:
              </motion.p>
              <motion.p
                variants={animations.p1}
                initial="initial"
                animate="animate"
                exit="exit"
                className="pl-4 mt-1"
              >
                <i className="mr-3 text-xs text-cyanPrimary fa-solid fa-diamond"></i>
                Разрабатывал сайты для различных Государственных учреждений
              </motion.p>
              <motion.p
                variants={animations.p2}
                initial="initial"
                animate="animate"
                exit="exit"
                className="pl-4 mt-1"
              >
                <i className="mr-3 text-xs text-cyanPrimary fa-solid fa-diamond"></i>
                Управлял небольшой командой из 4-х человек
              </motion.p>
              <motion.p
                variants={animations.p3}
                initial="initial"
                animate="animate"
                exit="exit"
                className="pl-4 mt-1"
              >
                <i className="mr-3 text-xs text-cyanPrimary fa-solid fa-diamond"></i>
                Разрабатывал REST API с Node.JS и Express.JS
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
