import client from "@/apollo/client";
import PageContent from "@/components/contentUI/PageContent";
import Layout from "@/components/layouts/Layout";
import { GET_BOAT } from "@/apollo/queries/boats/get-boat";
import { GET_BOATS_SLUG } from "@/apollo/queries/boats/get-boats";
import WaterScene from "@/components/contentUI/WaterScene";
import Overlay from "@/components/contentUI/Overlay";
import InfoText from "@/components/contentUI/InfoText";
import GallerySection from "@/components/sections/GallerySection";
import SingleFeaturedCardSection from "@/components/sections/SingleFeaturedCardSection";
import BoatFeaturesSection from "@/components/sections/BoatFeaturesSection";

export default function BoatPage ({ data }) {
    const { boat } = data;

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
                        title={ boat?.title }
                        subtitle="Evia Sea Horizons"
                    />
                </div>
            </section>
            <SingleFeaturedCardSection item={ boat } />
            <BoatFeaturesSection data={ boat } />
            <GallerySection data={ { items: boat?.details?.gallery } } />
            <PageContent content={ boat?.pageContent } />
        </Layout>
    );
}

export async function getStaticProps ({ params }) {
    const { data, errors } = await client.query({
        query: GET_BOAT,
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
        query: GET_BOATS_SLUG,
    });

    const pathsData = [];

    data?.boats?.nodes &&
        data?.boats?.nodes.map((boat) => {
            boat.slug && pathsData.push({ params: { slug: boat?.slug } });
        });

    return {
        paths: pathsData,
        fallback: false,
    };
}
