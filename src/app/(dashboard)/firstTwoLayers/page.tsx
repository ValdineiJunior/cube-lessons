import { CubeF2l } from '@/components/cubeF2l'

export default function FirstTwoLayers() {
  return (
    <h1 className=" bg-slate-50 col-span-10 p-6">
      <div>
        <h1 className="text-3xl">First Two Layers - F2L</h1>
        <p className="py-6">
          O método F2L, abreviação para First Two Layers ou Primeiras Duas
          Camadas, foca na conclusão das primeiras duas camadas do cubo,
          representando dois terços da resolução total. Neste estágio, a
          abordagem difere do método básico ao priorizar a construção simultânea
          de pares de quinas e meios.
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          <CubeF2l />
        </div>
      </div>
    </h1>
  )
}
