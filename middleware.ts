import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtected = createRouteMatcher(["//[[...rest]]/page.tsx"]);

export default clerkMiddleware((auth, req) => {
  if (isProtected(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|^\\/api|^\\/trpc).*)", "/$1", "/(api|trpc)(.*)"],
};
