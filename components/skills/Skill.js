import Heading from '../Heading';
import CircularProgressBar from './CircularProgressBar';
import SkillCard from './SkillCard';
import { motion } from 'framer-motion';

// Логотипы
import { ReactJS, ExpressJS, Linux, Docker, Bulma, MaterialUI, Redux, Axios, NodeJS, MongoDB, Figma, NextJS, Svelte, Photoshop, TailwindCSS, Git, Mysql, Strapi, Firebase, Sanity, TypeScript } from "./icons"

const Skill = () => {
  const animations = {
    fullStack: {
      initial: { opacity: 0, y: -20 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
    },
    tool: {
      initial: { opacity: 0, y: -20 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.6 } },
    },
    design: {
      initial: { opacity: 0, y: -20 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.8 } },
    },
  };
  const skillsData = [
    {
      name: 'ReactJS',
      url: ReactJS,
      value: 90,
    },
    {
      name: 'Svelte',
      url: Svelte,
      value: 90,
    },
    {
      name: 'NextJS',
      url: NextJS,
      value: 75,
    },
    {
      name: 'MongoDB',
      url: MongoDB,
      value: 70,
    },
    {
      name: 'NodeJS',
      url: NodeJS,
      value: 70,
    },
    {
      name: 'ExpressJS',
      url: ExpressJS,
      value: 60,
    },
    {
      name: 'TypeScript',
      url: TypeScript,
      value: 50,
    },
  ];
  const designData = [
    {
      name: 'Figma',
      url: Figma,
    },
    {
      name: 'Photoshop',
      url: Photoshop,
    },
  ];
  const toolData = [
    {
      name: 'Git',
      url: Git,
    },
    {
      name: 'Strapi',
      url: Strapi,
    },
    {
      name: 'Docker',
      url: Docker,
    },
    {
      name: 'TailwindCSS',
      url: TailwindCSS,
    },
    {
      name: 'MaterialUI',
      url: MaterialUI,
    },
    {
      name: 'Axios',
      url: Axios,
    },
    {
      name: 'Redux / Redux Toolkit',
      url: Redux,
    },
    {
      name: 'Firebase',
      url: Firebase,
    },
    {
      name: 'Sanity',
      url: Sanity,
    },
  ];
  return (
    <>
      <div className="py-20">
        <Heading heading={'Мои навыки'} />
        <div className="flex flex-col items-start justify-center md:flex-row">
          <div className="flex flex-col items-center justify-center">
            <motion.h2
              variants={animations.fullStack}
              animate="animate"
              exit="exit"
              initial="initial"
              className="px-10 md:px-16 py-5 my-10 text-2xl text-center rounded-[4px] bg-darkBluePrimary text-cyanPrimary"
            >
              Разработка
            </motion.h2>
            <div className="flex flex-row flex-wrap items-center justify-center w-full md:w-[30rem]">
              {skillsData.map((skill, index) => (
                <CircularProgressBar
                  key={index + 1}
                  index={index}
                  url={skill.url}
                  name={skill.name}
                  value={skill.value}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-row items-start justify-center mx-auto">
            <div className="flex flex-col items-center justify-center mx-2 md:mx-5">
              <motion.h2
                variants={animations.tool}
                animate="animate"
                exit="exit"
                initial="initial"
                className="w-full px-10 md:px-16 py-4 md:py-5 mt-10 mb-5 md:my-10 text-lg md:text-2xl rounded-[4px] text-center bg-darkBluePrimary text-cyanPrimary"
              >
                Инструменты
              </motion.h2>
              {toolData.map((tool, index) => (
                <SkillCard name={tool.name} index={index} key={index} url={tool.url} />
              ))}
            </div>
            <div className="flex flex-col items-center justify-center mx-2 md:mx-5">
              <motion.h2
                variants={animations.design}
                animate="animate"
                exit="exit"
                initial="initial"
                className="w-full px-10 md:px-16 py-4 md:py-5 mt-10 mb-5 md:my-10 text-lg md:text-2xl rounded-[4px] text-center bg-darkBluePrimary text-cyanPrimary"
              >
                Дизайн
              </motion.h2>
              {designData.map((designTool, index) => (
                <SkillCard name={designTool.name} index={index} key={index} url={designTool.url} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
