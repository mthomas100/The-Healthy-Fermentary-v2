import { ALL_PRODUCTS_QUERY } from "graphql/queries";
import { Product } from "graphql/types";
import client from "lib/apolloClient";
import Head from "next/head";

type SingleProductPageProps = {
    product: Product;
};

const SingleProductPage: React.FC<SingleProductPageProps> = ({ product }) => {
    return (
        <>
            <Head>
                <title>{product.title}</title>
            </Head>
            <h1>{product.title}</h1>
            {/* <SingleProduct product={product} /> */}
        </>
    );
};

export default SingleProductPage;

// This function gets called at build time

export async function getStaticPaths() {
    // GET ALL PRODUCTS FROM API

    /* eslint-disable */
    const { data: { products }} = await client.query({
        query: ALL_PRODUCTS_QUERY,
    });
    /* eslint-enable */

    // GET THE PATHS (SLUGS) FOR ALL PRODUCTS
    const paths = products.map(({ slug }: { slug: string }) => ({
        params: { slug },
    }));

    // We'll pre-render only these paths at build time.
    
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({
    params: { slug },
}: {
    params: { slug: string };
}) {
    /* eslint-disable */
    const { data: { products } } = await client.query({
        query: ALL_PRODUCTS_QUERY,
        variables: {
            slug
        },
    });
    /* eslint-enable */

    const product = products[0];

    return {
        props: {
            product,
        },
    };
}