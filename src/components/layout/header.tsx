"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Header() {
  const pathname = usePathname();

  return (
    <div className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <Tabs value={pathname} className="w-full">
          <TabsList className="h-14 w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="/"
              asChild
              className="h-14 rounded-none border-b-2 border-transparent px-6 text-base font-medium text-gray-500 transition-all hover:border-gray-300 hover:text-gray-900 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
            >
              <Link href="/">Home</Link>
            </TabsTrigger>
            <TabsTrigger
              value="/cubePieces"
              asChild
              className="h-14 rounded-none border-b-2 border-transparent px-6 text-base font-medium text-gray-500 transition-all hover:border-gray-300 hover:text-gray-900 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
            >
              <Link href="/cubePieces">Peças do Cubo</Link>
            </TabsTrigger>
            <TabsTrigger
              value="/movements"
              asChild
              className="h-14 rounded-none border-b-2 border-transparent px-6 text-base font-medium text-gray-500 transition-all hover:border-gray-300 hover:text-gray-900 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
            >
              <Link href="/movements">Movimentos</Link>
            </TabsTrigger>
            <TabsTrigger
              value="/firstTwoLayers"
              asChild
              className="h-14 rounded-none border-b-2 border-transparent px-6 text-base font-medium text-gray-500 transition-all hover:border-gray-300 hover:text-gray-900 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
            >
              <Link href="/firstTwoLayers">F2L</Link>
            </TabsTrigger>
            <TabsTrigger
              value="/orientationLastLayer"
              asChild
              className="h-14 rounded-none border-b-2 border-transparent px-6 text-base font-medium text-gray-500 transition-all hover:border-gray-300 hover:text-gray-900 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
            >
              <Link href="/orientationLastLayer">OLL</Link>
            </TabsTrigger>
            <TabsTrigger
              value="/permutationLastLayer"
              asChild
              className="h-14 rounded-none border-b-2 border-transparent px-6 text-base font-medium text-gray-500 transition-all hover:border-gray-300 hover:text-gray-900 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
            >
              <Link href="/permutationLastLayer">PLL</Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
