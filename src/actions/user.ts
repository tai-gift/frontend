"use server";

import prisma from "@/helpers/prisma";

export async function findAccount(identity: string) {
  return prisma.account.findFirst({
    where: {
      OR: [{ address: identity }, { id: identity }],
    },
  });
}

export async function createAccount(data: {
  address: string;
  username: string;
}) {
  if (!data.address) {
    throw new Error("Address is required");
  }
  if (!data.username) {
    return Response.json({ error: "Username is required" }, { status: 400 });
  }

  return prisma.account.create({
    data,
  });
}
