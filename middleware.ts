import { NextRequest, NextResponse } from "next/server";
import { unauthenticatedRoutes } from "./app/common/constants/routes";
import authenticated from "@/app/auth/action/authenticated.server";

export async function middleware(request: NextRequest) {
  const baseUrl = request.url;
  const auth = await authenticated();

  if (
    !auth &&
    !unauthenticatedRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route.path)
    )
  ) {
    return Response.redirect(new URL("/auth/login", baseUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
// ใช้กับ ทุก route ที่ไม่ใช่
// API route (/api)
// Static files (_next/static, _next/image)
// รูปภาพ .png
