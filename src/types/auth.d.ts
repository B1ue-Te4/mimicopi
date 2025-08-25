import type { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    idToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    idToken: string;
  }
}