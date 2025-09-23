"use client";
import { useState } from "react";
import { CubeInfoCard2D } from "@/components/CubeInfoCard2D";
import PageHeader from "@/components/layout/PageHeader";
import { cubeCasesPermutationLastLayer } from "@/data/cubeCasesPermutationLastLayer";
import { generateOPLLCaseScramble } from "@/utils/scrambleUtils";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function PermutationLastLayer({ params }: Props) {
  const [open, setOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<
    (typeof cubeCasesPermutationLastLayer)[0] | null
  >(null);

  // TODO: Replace with translations if needed
  const t = { title: "Permutation Last Layer", description: "PLL cases" };

  return (
    <>
      <PageHeader title={t.title} description={t.description} />
      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {cubeCasesPermutationLastLayer.map((cubeCase) => (
          <Sheet
            key={cubeCase.name}
            open={open && selectedCase?.name === cubeCase.name}
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
                <CubeInfoCard2D
                  name={cubeCase.name}
                  colors={cubeCase.colors}
                  moves={cubeCase.moves}
                />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              {selectedCase && (
                <>
                  <SheetHeader>
                    <SheetTitle>{selectedCase.name}</SheetTitle>
                    <SheetDescription>{t.description}</SheetDescription>
                  </SheetHeader>
                  <CubeInfoCard2D
                    name={selectedCase.name}
                    colors={selectedCase.colors}
                    moves={selectedCase.moves}
                  />
                  {selectedCase.moves && (
                    <div className="mt-4 text-center">
                      <div className="font-semibold">Scramble:</div>
                      <div className="break-words text-sm bg-gray-100 rounded p-2 mt-1">
                        {generateOPLLCaseScramble(selectedCase.moves)}
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
