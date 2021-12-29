import {
  Box,
  SimpleGrid,
  // useBreakpointValue,
  // useColorMode,
} from "@chakra-ui/react";
import { Product as ProductTypes } from "graphql/types";

import Product from "./Product";


type ProductsProps = {
  products : ProductTypes[]
}

const Products: React.FC<ProductsProps> = ({products}) => {
  // const { colorMode } = useColorMode();
  // const textSize = useBreakpointValue({
  //   base: "xs",
  //   sm: "md",
  // });

  return (
    <>
      <SimpleGrid
        // columns={{ sm: 2, md: 3, lg: 3, xl: 3 }}
        spacing="40px"
        minChildWidth="280px"
      >
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Products;
