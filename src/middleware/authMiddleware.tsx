import { getCredential } from "@/helpers/Utils";
import { NextRequest, NextResponse } from "next/server";

export function privateMiddleware(request: NextRequest) {
  // Add your own logic here to check if the user is authenticated
  const userIsAuthenticated = getCredential();

  if (userIsAuthenticated === null) {
    return NextResponse.rewrite(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export function publicMiddleware(request: NextRequest) {
  // Add your own logic here to check if the user is authenticated
  const userIsAuthenticated = getCredential();

  if (userIsAuthenticated !== null) {
    return NextResponse.rewrite(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}
