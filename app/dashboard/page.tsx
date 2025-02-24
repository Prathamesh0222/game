"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/api/signin");
    }
  }, [session.status, router]);

  return (
    <div>
      <div>{session.data?.user.name}</div>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
