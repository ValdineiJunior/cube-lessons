"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Menu, Globe } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("navigation");
  const locale = useLocale();

  const navigationItems = [
    { href: "/", label: t("home") },
    { href: "/cubePieces", label: t("cubePieces") },
    { href: "/movements", label: t("movements") },
    { href: "/firstTwoLayers", label: t("firstTwoLayers") },
    { href: "/orientationLastLayer", label: t("orientationLastLayer") },
    { href: "/permutationLastLayer", label: t("permutationLastLayer") },
    { href: "/timer", label: t("timer") },
    { href: "/solveTimes", label: t("solveTimes") },
  ];

  const switchLanguage = (newLocale: string) => {
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          <Tabs value={pathname} className="flex-1">
            <TabsList className="h-14 w-full justify-start rounded-none border-b bg-transparent p-0">
              {navigationItems.map((item) => {
                const tabPath = `/${locale}${item.href === "/" ? "" : item.href}`;
                const isActive = pathname === tabPath;
                return (
                  <TabsTrigger
                    key={item.href}
                    value={item.label}
                    asChild
                    className={`h-14 rounded-none border-b-2 px-6 text-base font-medium transition-all
                            ${
                              isActive
                                ? "border-blue-600 text-blue-600 bg-blue-50"
                                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-900"
                            }
                          `}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 ml-4">
            <Globe className="h-4 w-4 text-gray-500" />
            <button
              onClick={() => switchLanguage(locale === "en" ? "pt" : "en")}
              className="px-3 py-1 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              {locale === "en" ? "PT" : "EN"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex h-14 items-center justify-between md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="mt-8 text-lg font-semibold text-gray-900">
                Menu
              </SheetTitle>
              <SheetDescription className="sr-only">
                {locale === "en"
                  ? "Navigation menu and language switcher. Use the links to navigate."
                  : "Menu de navegação e troca de idioma. Use os links para navegar."}
              </SheetDescription>
              <nav className="flex flex-col space-y-4 mt-4">
                {navigationItems.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link
                      href={item.href}
                      className={`text-base font-medium ${
                        pathname === item.href
                          ? "text-blue-600"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}

                {/* Mobile Language Switcher */}
                <div className="flex items-center gap-2 pt-4 border-t">
                  <Globe className="h-4 w-4 text-gray-500" />
                  <button
                    onClick={() =>
                      switchLanguage(locale === "en" ? "pt" : "en")
                    }
                    className="px-3 py-1 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {locale === "en" ? "Português" : "English"}
                  </button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-gray-500" />
            <button
              onClick={() => switchLanguage(locale === "en" ? "pt" : "en")}
              className="px-3 py-1 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              {locale === "en" ? "PT" : "EN"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
