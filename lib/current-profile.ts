import { auth, currentUser } from "@clerk/nextjs/server";

import { db } from "./db";

export const currentProfile = async () => {
  const { userId } = await auth();
  // const user = await currentUser();
  // if (!userId) {
  if (!userId) {
    return null;
  }

  const profile = await db.profile.findUnique({
    where: {
      userId,
    },
  });

  return profile;
};
