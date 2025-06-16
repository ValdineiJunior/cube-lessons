"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Header() {
  const pathname = usePathname();

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/cubePieces", label: "Peças do Cubo" },
    { href: "/movements", label: "Movimentos" },
    { href: "/firstTwoLayers", label: "F2L" },
    { href: "/orientationLastLayer", label: "OLL" },
    { href: "/permutationLastLayer", label: "PLL" },
    { href: "/timer", label: "Timer" },
  ];

  return (
    <div className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <Tabs value={pathname} className="w-full">
          <TabsList className="h-14 w-full justify-start rounded-none border-b bg-transparent p-0">
            {navigationItems.map((item) => (
              <TabsTrigger
                key={item.href}
                value={item.href}
                asChild
                className="h-14 rounded-none border-b-2 border-transparent px-6 text-base font-medium text-gray-500 transition-all hover:border-gray-300 hover:text-gray-900 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
              >
                <Link href={item.href}>{item.label}</Link>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
