import { Separator } from "@/src/components/ui/separator";

import Login from "./login";

export const metadata = {
  title: "BE Demo",
  description: "バックエンドのデモです",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Separator className="hidden h-full w-[1px] md:block" />
      <main className="flex-1 overflow-y-auto pb-20 md:mb-0">
        <Login />
        {children}
      </main>
      <Separator className="hidden h-full w-[1px] md:block" />
    </>
  );
}
