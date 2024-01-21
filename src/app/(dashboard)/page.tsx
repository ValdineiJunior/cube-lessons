import { Cube } from '@/components/cube'

export default function Dashboard() {
  return (
    <h1 className=" bg-slate-50 col-span-5 p-6">
      <div>
        <h1 className="text-3xl">OLL</h1>
        <p>
          OLL significa (Orientação da Última Camada), ou seja, é a forma como
          as peças estão orientadas na camada superior do cubo. Nesta etapa, o
          objetivo é resolver todas as peças amarelas no topo do cubo. Após
          completar as duas primeiras camadas, as peças amarelas devem estar em
          uma das 57 situações específicas.
        </p>
        <div className="flex flex-wrap gap-10">
          <Cube />
          <Cube />
          <Cube />
          <Cube />
          <Cube />
          <Cube />
          <Cube />
          <Cube />
        </div>
      </div>
    </h1>
  )
}
