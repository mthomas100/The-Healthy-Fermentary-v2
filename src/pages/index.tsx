import { Box } from "@chakra-ui/react";
import gql from "graphql-tag";
import { GetStaticProps } from "next";

import client from "../lib/apolloClient";
import Products from "components/general/Products";
import CTASection from "components/samples/CTASection";
import SomeImage from "components/samples/SomeImage";

import { ALL_PRODUCTS_QUERY } from "graphql/queries";
import { Product } from "graphql/types";

type HomeProps = {
  products: Product[]
}

const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <Box mb={8} w="full">
      <SomeImage />
      <Products products={products} />
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  /* eslint-disable */

  const { data: { products }} = await client.query({
    query: ALL_PRODUCTS_QUERY,
  });

  /* eslint-enable */

  return {
    props: {
      products,
    },
  };
};
