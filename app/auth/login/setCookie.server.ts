import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { COOKIE_NAME } from "../cookie-name";
/**
 *  get header from nestjs response and set into cookie next server.
 */
const setAuthCookie = async (response: Response) => {
  const setCookieHeader = response.headers.get("set-cookie");
  if (setCookieHeader) {
    const token = setCookieHeader.split(";")[0].split("=")[1];
    const cookieStore = await cookies();
    cookieStore.set({
      name: COOKIE_NAME,
      value: token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token).exp! * 1000),
    });
  }
};

export { setAuthCookie };
