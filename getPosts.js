import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getPosts = () => {
  const files = fs.readdirSync(path.join('posts'));

  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace('.mdx', '');
    const fileContents = fs.readFileSync(path.join(`posts/${slug}.mdx`), 'utf8');
    const { data } = matter(fileContents);
    return {
      slug,
      data,
    };
  });

  const dates = [];

  allPostsData.forEach((post) => {
    dates.push(new Date(post.data.date));
  });

  dates.sort((a, b) => new Date(b) - new Date(a));

  const sortedDates = [];
  const replacedDates = [];
  let newSortedPosts = [];

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  dates.forEach((item) => {
    sortedDates.push(item.toLocaleDateString('ru-RU', options).split(' ').slice(0, 3).join(' ')); // вот эта конструкция служит для удаления буквы "Г" в конце адреса
  });

  sortedDates.forEach((item) => {
    replacedDates.push(item.replace(',', ''));
  });

  allPostsData.reverse();

  for (let j = 0; j < replacedDates.length; j++) {
    for (let i = 0; i < allPostsData.length; i++) {
      let xx = allPostsData[i].data.date;
      if (
        replacedDates[j] ===
        new Date(xx).toLocaleDateString('ru-RU', options).split(' ').slice(0, 3).join(' ')
      ) {
        newSortedPosts.push(allPostsData[i]);
      }
    }
  }

  // удалил повторяющиеся записи из массива.
  newSortedPosts = newSortedPosts.filter(function (value, index, array) {
    return array.indexOf(value) === index;
  });

  // new Date(item).toLocaleDateString("ru-RU", options).split(' ').slice(0, 3).join(' ')
  return newSortedPosts;
};

export default getPosts;
