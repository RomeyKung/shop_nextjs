import getProducts from "./action/get-products";
import ProductsGrid from "./products-grid";

export default async function Products() {
  const products = await getProducts();

  return <ProductsGrid products={products} />;
}
