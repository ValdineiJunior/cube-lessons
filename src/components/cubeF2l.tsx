import { SquareF2l } from './squareF2l'

export function CubeF2l() {
  const notation = [
    ['z', 'g', 'r', 'z', 'r', 'r', 'z', 'r', 'r'],
    ['z', 'z', 'z', 'r', 'g', 'g', 'g', 'g', 'g'],
    ['z', 'z', 'z', 'z', 'y', 'z', 'z', 'z', 'z'],
  ]
  return (
    <>
      <div>
        <div className="absolute h-0 w-0 m-auto left-0 right-0 top-0 bottom-0">
          <div className="relative h-32 w-32 origin-[0_0] left grid grid-cols-3 grid-rows-3">
            {notation[0].map((n, i) => (
              <SquareF2l key={i} bgColor={n} />
            ))}
          </div>
          <div className="relative h-32 w-32 origin-[0_0] right grid grid-cols-3 grid-rows-3">
            {notation[1].map((n, i) => (
              <SquareF2l key={i} bgColor={n} />
            ))}
          </div>
          <div className="relative h-32 w-32 origin-[0_0] top grid grid-cols-3 grid-rows-3">
            {notation[2].map((n, i) => (
              <SquareF2l key={i} bgColor={n} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
