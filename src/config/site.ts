export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  title: "一流レシピ",
  description: "レシピアプリ",
  mainNav: [
    {
      title: "検索",
      href: "/",
    },
    {
      title: "お気に入り",
      href: "/favorite",
    },
    {
      title: "お買い物",
      href: "/shopping-list",
    },
  ],
};
