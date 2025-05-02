"use server";

import { cookies } from "next/headers";
import { COOKIE_NAME } from "../cookie-name";

export default async function getAuthentication() {
  return (await cookies()).get(COOKIE_NAME);
}
