import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export default sitemap = async (req, res) => {
  // Массив с вашими ссылками
  const links = [
    { url: '/', lastmod: '2022-04-08T21:29:30+00:00', priority: 1.0 },
    { url: '/about', lastmod: '2022-04-08T21:29:30+00:00', priority: 0.8 },
    { url: '/skills', lastmod: '2022-04-08T21:29:30+00:00', priority: 0.8 },
    { url: '/development', lastmod: '2022-04-08T21:29:30+00:00', priority: 0.8 },
    { url: '/resources', lastmod: '2022-04-08T21:29:30+00:00', priority: 0.8 },
    { url: '/contact', lastmod: '2022-04-08T21:29:30+00:00', priority: 0.8 },
    { url: '/resume.pdf', lastmod: '2022-04-08T21:29:30+00:00', priority: 0.8 },
  ];

  // Создаётся поток для записи
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  });

  const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );

  res.end(xmlString);
};
