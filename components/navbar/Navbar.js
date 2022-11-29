import Image from 'next/image';
import logo from '../../public/Alogo.png';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import MenuBarContext from '../../context/MenuBarContext';
import { isMobile } from 'react-device-detect';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const { menuActive, setMenuActive } = useContext(MenuBarContext);
  const animations = {
    navbar: {
      initial: { opacity: 0 },
      exit: { opacity: 0, transition: { duration: 0.1 } },
      animate: { opacity: 1, transition: { duration: 0.1 } },
    },
  };
  const linksData = [
    {
      name: ' Обо мне',
      link: '/about',
    },
    {
      name: ' Навыки',
      link: '/skills',
    },
    {
      name: ' Таймлайн',
      link: '/timeline',
    },
    {
      name: ' Блог',
      link: '/blogs',
    },
    {
      name: ' Контакты',
      link: '/contact',
    },
  ];

  return (
    <>
      {isMobile ? (
        menuActive && (
          <motion.header
            variants={animations.navbar}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-0 flex flex-col items-center justify-center w-full min-h-screen px-5 mx-auto duration-150 shadow-2xl md:px-16 md:fixed bg-darkBluePrimary/90 backdrop-blur-sm md:bg-darkBluePrimary"
          >
            <Link href="/">
              <a className="mb-10 -mt-10">
                <Image src={logo} width={103} height={103} alt="Imran" />
              </a>
            </Link>
            <ul className="flex flex-col items-start justify-center">
              {linksData.map((item, index) => (
                <Link key={index} href={item.link}>
                  <a
                    onClick={() => setMenuActive(false)}
                    className={`${
                      router.pathname == '/'
                        ? 'text-lightBluePrimary'
                        : item.name.toLowerCase().includes(router.pathname.substring(1))
                        ? 'text-cyanPrimary'
                        : 'text-lightBluePrimary'
                    } w-full my-3 text-xl duration-300 hover:text-cyanPrimary`}
                  >
                    <span className="text-cyanPrimary font-codeText">0{index + 1}.</span>
                    {item.name}
                  </a>
                </Link>
              ))}
            </ul>
            <a href="resume.pdf" download={false} target="_blank" rel="noreferrer" className="btn">
              Резюме
            </a>
            <br></br>
            <a
              className="mt-1 text-base duration-300 text-lightBlueSecondary/50 hover:text-cyanPrimary/70"
              href="http://t.me/nanoface"
              target="_blank"
              rel="noreferrer"
            >
              telegram - @nanoface<i className="ml-2 fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </motion.header>
        )
      ) : (
        <header className="top-0 flex flex-col items-center justify-center min-h-screen px-5 mx-auto duration-150 shadow-2xl md:px-16 md:fixed bg-darkBluePrimary/90 backdrop-blur-sm md:bg-darkBluePrimary">
          <Link href="/">
            <a className="mb-10 -mt-10">
              <Image src={logo} width={103} height={103} alt="Imran" />
            </a>
          </Link>
          <ul className="flex flex-col items-start justify-center">
            {linksData.map((item, index) => (
              <Link key={index} href={item.link}>
                <a
                  onClick={() => setMenuActive(false)}
                  className={`${
                    router.pathname == '/'
                      ? 'text-lightBluePrimary'
                      : item.name.toLowerCase().includes(router.pathname.substring(1))
                      ? 'text-cyanPrimary'
                      : 'text-lightBlueSecondary'
                  } w-full my-3 text-xl duration-300 hover:text-cyanPrimary`}
                >
                  <span className="text-cyanPrimary font-codeText">0{index + 1}.</span>
                  {item.name}
                </a>
              </Link>
            ))}
          </ul>
          <a href="https://groznyj.hh.ru/resume/ad012df3ff0b2e96b10039ed1f6f51624d6465" download={false} target="_blank" rel="noreferrer" className="btn">
            Резюме
          </a>
          <br></br>
          <a
            className="mt-1 text-base duration-300 text-lightBlueSecondary/50 hover:text-cyanPrimary/70"
            href="http://t.me/nanoface"
            target="_blank"
            rel="noreferrer"
          >
            telegram - @nanoface<i className="ml-2 fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </header>
      )}
    </>
  );
};

export default Navbar;
