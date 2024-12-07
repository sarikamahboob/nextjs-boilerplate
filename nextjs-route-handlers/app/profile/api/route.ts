import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers()

  cookies().set("resultsPerPage", "20")

  const themes = request.cookies.get("theme");
  const allCookies = request.cookies.getAll();

  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));
  console.log(themes, allCookies);
  console.log(cookies().get("resultsPerPage"));

  return new Response("<h1>Profile Data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
