"use server";

export enum DrawType {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
}

import prisma from "@/helpers/prisma";

export async function getActiveDraws(drawType: DrawType) {
  return prisma.draw.findMany({
    where: {
      isActive: true,
      type: drawType,
    },
  });
}
