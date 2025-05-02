"use server";
import { post } from "@/app/utils/fetch.server";

export default async function checkout(productId: number) {
  return post("checkout/session", { productId });
}
