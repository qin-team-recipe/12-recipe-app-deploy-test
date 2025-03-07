import { Suspense } from "react";
import Link from "next/link";

import { AlignLeft, UserCircle2 } from "lucide-react";

import TopBar from "@/src/components/layout/top-bar";
import Spinner from "@/src/components/ui/spinner";

import HorizontalFollowingChefsList from "./_components/horizontal-following-chefs-list";
import HorizontalNewRecipesList from "./_components/horizontal-new-recipes-list";
import MyFavoriteRecipesGrid from "./_components/my-favorite-recipes-grid";

const page = () => {
  return (
    <>
      <TopBar
        leadingComponent={
          <Link href={"/settings"}>
            <AlignLeft size={20} className="text-mauve12" />
          </Link>
        }
        centerComponent={<h1 className="font-bold text-mauve12 md:text-xl">お気に入り</h1>}
        trailingComponent={
          <Link href={"/my-page"}>
            <UserCircle2 size={20} className="text-mauve12" />
          </Link>
        }
      />

      {/* シェフ */}
      <section className="pt-5">
        <h2 className="pl-4 text-xl font-bold text-mauve12">シェフ</h2>
        <Suspense
          fallback={
            <div className="flex h-20 items-center justify-center">
              <Spinner />
            </div>
          }
        >
          <HorizontalFollowingChefsList />
        </Suspense>
      </section>

      {/* 新着レシピ */}
      <section className="pt-12">
        <div className="flex items-center justify-between px-4">
          <h2 className=" text-xl font-bold text-mauve12">新着レシピ</h2>
          <Link href={"/new-recipes"}>
            <span className="text-lg font-bold text-mauve9">もっと見る</span>
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="flex items-center justify-center">
              <Spinner />
            </div>
          }
        >
          <HorizontalNewRecipesList />
        </Suspense>
      </section>

      {/* お気に入りレシピ */}
      <section className="pt-12">
        <h2 className="pl-4 text-xl font-bold text-mauve12">お気に入りレシピ</h2>
        <Suspense
          fallback={
            <div className="flex items-center justify-center">
              <Spinner />
            </div>
          }
        >
          <MyFavoriteRecipesGrid />
        </Suspense>
      </section>
    </>
  );
};

export default page;
