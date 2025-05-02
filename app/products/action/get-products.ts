"use server";

import { get } from "@/app/utils/fetch.server";
import { Product } from "../interfaces/product.interface";

export default async function getProducts() {
  return await get<Product[]>(
    "products",
    ["products"],
    new URLSearchParams({ status: "available" })
  );
}
