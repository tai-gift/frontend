"use server";

import prisma from "@/helpers/prisma";

export async function getActiveDraws() {
  return prisma.draw.findMany({
    where: {
      isActive: true,
    },
  });
}
