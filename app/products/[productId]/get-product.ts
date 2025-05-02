import { get } from "@/app/utils/fetch.server";
import { Product } from "../interfaces/product.interface";

export default async function getProduct(productId: number) {
  return get<Product>(`products/${productId}`);
}
