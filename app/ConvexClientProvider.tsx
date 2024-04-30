"use client";

import { ReactNode } from "react";
import {
  ConvexReactClient,
  AuthLoading,
  Authenticated,
} from "convex/react";

import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Loading } from "@/components/auth/loading";
import { useAuth } from "@clerk/nextjs";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      <AuthLoading>
        <Loading />
      </AuthLoading>
      <Authenticated>{children}</Authenticated>
    </ConvexProviderWithClerk>
  );
}
