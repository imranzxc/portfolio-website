import Layout from '../components/Layout';
import Skill from '../components/skills/Skill';
import Head from 'next/head';

const skills = () => {
  return (
    <>
      <Head>
        <title>Навыки</title>
      </Head>
      <Layout component={<Skill />} />
    </>
  );
};

export default skills;
