"use server";

import { redirect } from "next/navigation";
import { setAuthCookie } from "@/app/auth/login/setCookie.server";
import { API_URL } from "@/app/common/constants/api";
import { getErrorMessage } from "@/app/utils/error.server";

export default async function loginUser(_prevState: any, formData: FormData) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData)),
  });

  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  if (res) {
    await setAuthCookie(res);
  }

  redirect("/");
}
