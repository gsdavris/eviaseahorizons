import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, data }) => {
	const {
		menus,
		categories,
		seo,
		favicon,
		page,
		plan,
		post,
		boat,
		tour,
		category,
		companyDetails,
		companySocials,
	} = data;

	let pageSeo;
	if (page) {
		pageSeo = page.seo;
	}
	if (plan) {
		pageSeo = plan.seo;
	}
	if (boat) {
		pageSeo = boat.seo;
	}
	if (tour) {
		pageSeo = tour.seo;
	}
	if (post) {
		pageSeo = post.seo;
	}
	if (category) {
		pageSeo = category.seo;
	}

	return (
		<>
			<Head>
				<link
					rel='shortcut icon'
					href={favicon?.sourceUrl}
				/>
			</Head>
			<NextSeo
				title={pageSeo?.title}
				description={pageSeo?.metaDesc}
				canonical={pageSeo?.canonical}
				openGraph={{
					url: pageSeo?.opengraphUrl,
					title: pageSeo?.opengraphTitle,
					description: pageSeo?.opengraphDescription,
					images: [
						{
							url: pageSeo?.opengraphImage?.sourceUrl,
							width: pageSeo?.opengraphImage?.mediaDetails.width,
							height: pageSeo?.opengraphImage?.mediaDetails.height,
							alt: pageSeo?.opengraphImage?.altText,
							type: pageSeo?.opengraphImage?.mediaType,
						},
					],
					siteName: pageSeo?.title,
				}}
				twitter={{
					handle: '@handle',
					site: '@site',
					cardType: 'summary_large_image',
				}}
			/>
			<Header
				menus={menus}
				categories={categories}
				defaultSeo={seo}
				companyDetails={companyDetails}
				companySocials={companySocials}
			/>
			<main className='bg-white'>
				<div className='relative isolate'>{children}</div>
			</main>
			<Footer
				companyDetails={companyDetails}
				companySocials={companySocials}
				menus={menus}
				mode='dark'
				planCategories={categories}
			/>
		</>
	);
};

export default Layout;
