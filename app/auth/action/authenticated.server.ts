import { cookies } from "next/headers";
import { COOKIE_NAME } from "../cookie-name";

export default async function authenticated() {
  const cookieStore = await cookies();
  // console.log(!!cookieStore.get(COOKIE_NAME)?.value);
  return !!cookieStore.get(COOKIE_NAME)?.value;
}
