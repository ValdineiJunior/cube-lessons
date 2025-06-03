"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Header() {
  const pathname = usePathname();

  return (
    <div className="bg-blue-200 p-3">
      <Tabs value={pathname} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="/" asChild>
            <Link href="/">Home</Link>
          </TabsTrigger>
          <TabsTrigger value="/firstTwoLayers" asChild>
            <Link href="/firstTwoLayers">F2L</Link>
          </TabsTrigger>
          <TabsTrigger value="/orientationLastLayer" asChild>
            <Link href="/orientationLastLayer">OLL</Link>
          </TabsTrigger>
          <TabsTrigger value="/permutationLastLayer" asChild>
            <Link href="/permutationLastLayer">PLL</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
