import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/dashboard"];
export default async function middleware(req: NextRequest, res: NextResponse) {
  const absolutePath = new URL("/", req?.nextUrl?.origin);

  const session = await auth();

  const isProtected = protectedRoutes?.some((route) =>
    req?.nextUrl?.pathname?.startsWith(route),
  );

  if (isProtected && !session?.user) {
    return NextResponse.redirect(absolutePath.toString());
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/dashboard"],
};
