import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const ProductContainer = () => {
  const { products } = useLoaderData();
  //   console.log(products);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 py-12 px-4 md:px-8 lg:mx-14">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductContainer;
