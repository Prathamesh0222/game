"use client";

import { SessionProvider } from "next-auth/react";

export const AuthSession = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
