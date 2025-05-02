"use server";

import { get } from "@/app/utils/fetch.server";

export default async function getMe() {
  return await get("users/me");
}
