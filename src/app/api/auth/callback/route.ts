import { siteConfig } from "@/app/_config/site";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

/**
 * This route handles users who use magic link sign-in (email),
 * who have to exchange their callback token, in order to receive
 * a valid session.
 *
 * It follows the PKCE Auth Flow, see link below for more information:
 * https://supabase.com/docs/guides/auth/auth-helpers/nextjs#migrating-to-v07x
 *
 * @param request
 * @returns New User Session through Cookies
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const code = searchParams.get("code");

  const param_error = searchParams.get("error");
  const param_error_reason = searchParams.get("error_description");

  if (code) {
    const cookieStore = cookies();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            cookieStore.set({ name, value, ...options });
          },
          remove(name: string, options: CookieOptions) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            cookieStore.delete({ name, ...options });
          },
        },
      },
    );

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    // Successfully acquired session
    if (!error) {
      return NextResponse.redirect(
        new URL(siteConfig.paths.dashboard, request.url),
      );
    }

    // Error exchanging code for session
    return NextResponse.redirect(
      new URL(
        `${siteConfig.paths.sign_in}?error=${error?.name}&error_description=${error?.message}`,
        request.url,
      ),
    );
  }

  // GoTrueClient Returned with Auth Flow Error
  if (param_error) {
    return NextResponse.redirect(
      new URL(
        `${
          siteConfig.paths.sign_in
        }?error=${param_error}&error_description=${param_error_reason!}`,
        request.url,
      ),
    );
  }
}
