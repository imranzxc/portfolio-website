import Navbar from './navbar/Navbar';
import Menu from './menu/Menu';
import MenuBarContext from '../context/MenuBarContext';
import { useState } from 'react';
import Head from 'next/head';

const Layout = ({ component, width }) => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="MERN Stack Developer - Imran Bursagov" />
        <meta property="twitter:card" content="summary" />
        <meta name="description" content="web developer, react, javascript" />
        <meta property="og:title" content="MERN Stack Developer - Imran Bursagov" />
        <meta property="og:description" content="web developer, react, javascript" />
        <meta property="og:url" content={`https://github.com/mxnshz`} />
        <meta property="twitter:title" content="MERN Stack Developer - Imran Bursagov" />
        <meta property="twitter:description" content="web developer, react, javascript" />
        <meta name="keywords" content="Imran Bursagov, MERN Stack, Developer, Portfolio" />
        <meta name="google-site-verification" content="" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#071124" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="15 days" />
        <meta name="author" content="Imran Bursagov" />
      </Head>
      <MenuBarContext.Provider value={{ menuActive, setMenuActive }}>
        <Menu />
        <div className="flex flex-row items-center min-h-screen bg-gradient-to-r to-darkBluePrimary from-darkLightBluePrimary">
          <div className="absolute top-0 z-10 w-full md:relative md:w-1/5">
            <Navbar />
          </div>
          <div className="flex flex-row items-center justify-center w-full">
            <div
              className={`${
                width ? 'md:w-3/4' : 'md:w-3/5'
              } flex flex-col items-center justify-center w-full px-0 mx-auto md:px-0`}
            >
              {component}
            </div>
          </div>
        </div>
      </MenuBarContext.Provider>
    </>
  );
};

export default Layout;
