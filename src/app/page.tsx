"use client";

import { getAuthSession } from "@/lib/auth";
import { getSession, signOut } from "next-auth/react";

export default async function Home() {
  const session = await getSession();

  // console.log("session = ", session);
  // const signOutfn = async () => {
  //   await signOut();
  // };
  // signOutfn();
  return <div>Home</div>;
}
