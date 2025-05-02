"use server";

import { post } from "@/app/utils/fetch.server";
import { redirect } from "next/navigation";

export default async function createUser(_prevState: any, formData: FormData) {
  const { error } = await post("users", formData);
  if (error) {
    return { error };
  }
  redirect("/");
}
