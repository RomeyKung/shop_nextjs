"use server";

import { cookies } from "next/headers";
import { COOKIE_NAME } from "./cookie-name";
import { redirect } from "next/navigation";

export default async function logout() {
  (await cookies()).delete(COOKIE_NAME);
  redirect("/auth/login");
}
