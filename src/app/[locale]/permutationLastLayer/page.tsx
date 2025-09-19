import { CubeInfoCard2D } from "@/components/CubeInfoCard2D";
import PageHeader from "@/components/layout/PageHeader";
import { cubeCasesPermutationLastLayer } from "@/data/cubeCasesPermutationLastLayer";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PermutationLastLayer({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: "permutationLastLayer",
  });
  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {cubeCasesPermutationLastLayer.map((cubeCase) => (
          <CubeInfoCard2D
            key={cubeCase.name}
            name={cubeCase.name}
            colors={cubeCase.colors}
            moves={cubeCase.moves}
          />
        ))}
      </div>
    </>
  );
}
