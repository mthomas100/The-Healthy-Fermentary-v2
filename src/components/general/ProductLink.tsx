import Link from "next/link";

type ProductProps = {
    children: React.ReactNode;
    slug: string;
};

const ProductLink: React.FC<ProductProps> = ({ children, slug }) => {
    return (
        <Link
            href={{
                pathname: "/product/[slug]",
                query: { slug },
            }}
        >
            <a>{children}</a>
        </Link>
    );
};

export default ProductLink;