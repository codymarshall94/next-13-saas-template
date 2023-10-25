import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

//video: https://www.youtube.com/watch?v=-7K6DRWfEGM&t=42s
//https://supabase.com/docs/guides/auth/auth-helpers/nextjs?language=ts

// Next.js Auth helpers are configured to use the server-side auth flow to sign in users.
// This requires you to setup a code exhange route, to exhange the code for a session.
// It is then set as a cookie for future requests made to Supabase.
// This route is called by the OAuth provider, and is not meant to be called by your app.

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
    await supabase.auth.exchangeCodeForSession(code);
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin);
}
