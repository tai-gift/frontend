"use server";
import prisma from "@/helpers/prisma";
import { Prisma, DrawType } from "@prisma/client";

export async function getActiveDraws() {
  return prisma.draw.findMany({
    where: {
      isActive: true,
    },
  });
}

export async function getActiveDrawsByType(type: DrawType) {
  return prisma.draw.findFirst({
    where: {
      isActive: true,
      type,
    },
  });
}
