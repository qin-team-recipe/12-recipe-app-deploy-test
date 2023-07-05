"use server";

import { revalidatePath } from "next/cache";

import getAuthenticatedUser from "@/src/actions/getAuthenticatedUser";
import { prisma } from "@/src/lib/prisma";
import { zact } from "zact/server";

import { formSchema } from "../app/mock/_components/new-recipe-form/schema";

export const createRecipe = zact(formSchema)(async ({ title, description }) => {
  const user = await getAuthenticatedUser();

  if (!user) {
    throw new Error("認証に失敗しました");
  }

  // TODO: 足りないフィールドを追加する
  await prisma.recipe.create({
    data: {
      title,
      description,
      userId: user.id,
      servingCount: 1,
    },
  });

  revalidatePath("/mock/tsuboi");
});
