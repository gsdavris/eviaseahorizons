import client from "@/apollo/client";
import PageContent from "@/components/contentUI/PageContent";
import Layout from "@/components/layouts/Layout";
import { GET_TOUR } from "@/apollo/queries/tours/get-tour";
import { GET_TOURS_SLUG } from "@/apollo/queries/tours/get-tours";
import WaterScene from "@/components/contentUI/WaterScene";
import Overlay from "@/components/contentUI/Overlay";
import InfoText from "@/components/contentUI/InfoText";
import GallerySection from "@/components/sections/GallerySection";
import SingleFeaturedCardSection from "@/components/sections/SingleFeaturedCardSection";

export default function TourPage ({ data }) {
    const { tour } = data;

    return (
        <Layout data={ data }>
            <section
                className={ `relative w-full min-h-[600px] flex items-center content-center justify-center` }>
                <div className='fixed top-0 left-0 w-full h-full bg-center bg-cover -z-10'>
                    <WaterScene />
                </div>
                <Overlay opacity={ 50 } />
                <div className='container relative z-20'>
                    <InfoText
                        mode="dark"
                        title={ tour?.title }
                        subtitle="Evia Sea Horizons"
                    />
                </div>
            </section>
            <SingleFeaturedCardSection item={ tour } />
            <GallerySection data={ { items: tour?.details?.gallery } } />
            <PageContent content={ tour?.pageContent } />
        </Layout>
    );
}

export async function getStaticProps ({ params }) {
    const { data, errors } = await client.query({
        query: GET_TOUR,
        variables: {
            id: params?.slug,
        },
    });

    return {
        props: { data: data || {} },
        revalidate: 10, // In seconds
    };
}

export async function getStaticPaths () {
    const { data } = await client.query({
        query: GET_TOURS_SLUG,
    });

    const pathsData = [];

    data?.tours?.nodes &&
        data?.tours?.nodes.map((tour) => {
            tour.slug && pathsData.push({ params: { slug: tour?.slug } });
        });

    return {
        paths: pathsData,
        fallback: false,
    };
}
