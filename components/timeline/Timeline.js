import Heading from '../Heading';
import Card from './Card';

const Timeline = () => {
  const data = [
    {
      title: 'Начал увлекаться программированием',
      subtitle: '2020 Февраль',
      icon: 'fa-solid fa-bezier-curve',
    },
    {
      title: 'Отучился в буткемпе на fullstack разработчика',
      subtitle: '2020 Май',
      icon: 'fa-solid fa-code',
    },
    {
      title: 'Сделал несколько проектов на фрилансе',
      subtitle: '2020 Июнь ',
      icon: 'fa-solid fa-mug-saucer',
    },
    {
      title: 'Устроился в Onyx react разработчиком',
      subtitle: '2020 Ноябрь',
      icon: 'fa-solid fa-cubes',
    },
    {
      title: 'База данных игрового проекта превысила 30 тысяч пользователей',
      subtitle: '2020 Декабрь',
      icon: 'fa-solid fa-desktop',
    },
    {
      title: "Устроился в Eddy's",
      subtitle: '2021 Август',
      icon: 'fa-solid fa-scissors',
    },
    {
      title: 'Устроился Middle (React) разработчиком в Intocode',
      subtitle: '2021 Декабрь',
      icon: 'fa-solid fa-chalkboard-user',
    },
    { 
      title: 'Принял участие в разработке SPA-приложения для прокачки IT-собеседований "IQA"',
      subtitle: '2022 Сентябрь',
      icon: 'fa-solid fa-chalkboard-user',
    },
  ];
  return (
    <>
      <section className="py-10 sm:py-20">
        <Heading heading={'Мой путь'} />
        <div className="py-10 sm:py-20">
          {data.reverse().map((item, index) => (
            <Card key={index} index={index} data={item} length={data.length} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Timeline;
