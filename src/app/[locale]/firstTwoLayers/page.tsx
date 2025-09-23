"use client";
import { useState } from "react";
import { CubeInfoCard3D } from "@/components/CubeInfoCard3D";
import PageHeader from "@/components/layout/PageHeader";
import { cubeCasesFirstTwoLayers } from "@/data/cubeCasesFirstTwoLayers";
import { generateF2LCaseScramble } from "@/utils/scrambleUtils";
import { useTranslations } from "next-intl";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export default function FirstTwoLayers() {
  const t = useTranslations("firstTwoLayers");
  const [open, setOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<
    (typeof cubeCasesFirstTwoLayers)[0] | null
  >(null);

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />

      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {cubeCasesFirstTwoLayers.map((cubeCase) => (
          <Sheet
            key={cubeCase.key}
            open={open && selectedCase?.key === cubeCase.key}
            onOpenChange={(o) => {
              setOpen(o);
              if (!o) setSelectedCase(null);
            }}
          >
            <SheetTrigger asChild>
              <button
                className="focus:outline-none"
                onClick={() => {
                  setSelectedCase(cubeCase);
                  setOpen(true);
                }}
                aria-label="View case details"
              >
                <CubeInfoCard3D
                  pieceKey={cubeCase.key}
                  colors={cubeCase.colors}
                  namespace="firstTwoLayers.cases"
                />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              {selectedCase && (
                <>
                  <SheetHeader>
                    <SheetTitle>{t("title")}</SheetTitle>
                    <SheetDescription>
                      {t("practiceDescription")}
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex justify-center">
                    <CubeInfoCard3D
                      pieceKey={selectedCase.key}
                      colors={selectedCase.colors}
                      namespace="firstTwoLayers.cases"
                    />
                  </div>
                  {selectedCase.moves && (
                    <div className="mt-4 text-center">
                      <div className="font-semibold">Scramble:</div>
                      <div className="break-words text-sm bg-gray-100 rounded p-2 mt-1">
                        {generateF2LCaseScramble(selectedCase.moves)}
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        (Generated for this case)
                      </div>
                    </div>
                  )}
                </>
              )}
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </>
  );
}
