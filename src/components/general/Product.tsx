import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { Product } from "graphql/types";
import getSmallCloudinary from "utils/getSmallCloudinary";
import ProductLink from "./ProductLink";

  type ProductProps = {
    product : Product
  }

  const ProductSimple: React.FC<ProductProps> = ({ product }) => {
    
  return (
    <ProductLink slug={product.slug}>
    <Center py={12}>
      <Box
        role="group"
        p={6}
        maxW="330px"
        w="full"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        rounded="lg"
        pos="relative"
        zIndex={1}
      >
        <Box
          rounded="lg"
          mt={-12}
          pos="relative"
          height="230px"
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${product.image?.url})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded="lg"
            height={230}
            width={282}
            objectFit="cover"
            src={product.image?.url}
            // placeholder="blur"
            // blurDataURL={getSmallCloudinary(product.image?.url)}
          />
        </Box>
        <Stack pt={10} align="center">
          <Text color="gray.500" fontSize="sm" textTransform="uppercase">
            {/* create a string separated by commas of categories */}
            {product.categories.map((category) => category.name).join(", ")}
          </Text>
          <Heading fontSize="2xl" fontFamily="body" fontWeight={500}>
            {product.title}
          </Heading>
          <Stack direction="row" align="center">
            <Text fontWeight={800} fontSize="xl">
              ${product.price}
            </Text>
            <Text textDecoration="line-through" color="gray.600">
              ${product.price + 5}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
    </ProductLink>
  );
}


export default ProductSimple;