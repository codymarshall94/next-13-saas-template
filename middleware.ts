import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

//https://supabase.com/docs/guides/auth/auth-helpers/nextjs?language=ts

// When using the Supabase client on the server, you need extra steps to ensure the user's auth session remains active.
// Next.js server components allow you to read a cookie but not write back to it.
// Middleware allows you to read and write to the cookie, and is the recommended way to use the Supabase client on the server.
// This middleware is called on every request, and will refresh the user's session if it is about to expire.

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();
  return res;
}
