import client from '@/apollo/client';
import { GET_BOATS_SLUG } from '@/apollo/queries/boats/get-boats';
import { GET_TOURS_SLUG } from '@/apollo/queries/tours/get-tours';
import { GET_PAGES_SLUG } from '@/apollo/queries/pages/get-pages';
import { GET_POSTS_SLUG } from '@/apollo/queries/posts/get-posts';

const SITE_URL = 'https://www.eviaseahorizons.gr';

const generateSitemap = ({ pages, tours, boats, posts }) => {
    const today = new Date().toISOString();

    const urls = [
        {
            loc: `${SITE_URL}/`,
            lastmod: today,
            priority: '1.0',
        },
        ...pages.map((page) => ({
            loc: `${SITE_URL}/${page.slug}`,
            lastmod: today,
            priority: '0.8',
        })),
        ...tours.map((tour) => ({
            loc: `${SITE_URL}/tour/${tour.slug}`,
            lastmod: today,
            priority: '0.7',
        })),
        ...boats.map((boat) => ({
            loc: `${SITE_URL}/boat/${boat.slug}`,
            lastmod: today,
            priority: '0.7',
        })),
        ...posts.map((post) => ({
            loc: `${SITE_URL}/news/${post.slug}`,
            lastmod: today,
            priority: '0.7',
        })),
    ];

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
  ${urls
            .map(
                (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <priority>${url.priority}</priority>
  </url>`
            )
            .join('')}
</urlset>`;
};

export async function getServerSideProps ({ res }) {
    const [{ data: pagesData }, { data: toursData }, { data: boatsData }, { data: postsData }] = await Promise.all([
        client.query({ query: GET_PAGES_SLUG }),
        client.query({ query: GET_TOURS_SLUG }),
        client.query({ query: GET_BOATS_SLUG }),
        client.query({ query: GET_POSTS_SLUG }),
    ]);

    const pages = pagesData?.pages?.nodes || [];
    const tours = toursData?.tours?.nodes || [];
    const boats = boatsData?.boats?.nodes || [];
    const posts = postsData?.posts?.nodes || [];

    const sitemap = generateSitemap({ pages, tours, boats, posts });

    res.setHeader('Content-Type', 'application/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default function Sitemap () {
    return null;
}
