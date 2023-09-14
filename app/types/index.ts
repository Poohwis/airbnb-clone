import { User, Listing } from "@prisma/client";
export type SafeListing = Omit<Listing, "createAt"> & { createAt: string };
export type SafeUser = Omit<
  User,
  "createAt" | "updatedAt" | "emailVerified"
> & { createAt: string; updatedAt: string; emailVerified: string | null };
