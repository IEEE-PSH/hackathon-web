import { type NextRequest, NextResponse } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  // Create an unmodified response
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          // If the cookie is updated, update the cookies for the request and response
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          request.cookies.set({ name, value, ...options });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          response.cookies.set({ name, value, ...options });
        },
        remove(name, options) {
          // If the cookie is removed, update the cookies for the request and response
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          request.cookies.delete({
            name,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          response.cookies.delete({
            name,
            ...options,
          });
        },
      },
    },
  );

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  console.log("M", request.nextUrl.href);
  console.log("M", error);
  console.log("M", session);

  return response;
  // If a user does not have a valid session or encounters
  // an error when retrieving a valid session, redirect to sign in.

  // TODO: Add Check above for onboarding complete
  // TODO: If Valid Session, but no onboarding complete -> redirectToPath(req, /onboarding)
}

export const config = {
  matcher: ["/sign-in", "/dashboard", "/onboarding"],
};
