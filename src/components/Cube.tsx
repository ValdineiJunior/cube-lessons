interface CubeProps {
  colors: string[][];
  moves?: string[];
}

export function Cube({ colors, moves }: CubeProps) {
  return (
    <div className="flex flex-col items-center w-72">
      <div className="relative h-72 w-72">
        <div>
          <div className="absolute h-0 w-0 m-auto left-0 right-0 top-0 bottom-0">
            <div className="relative h-32 w-32 origin-[0_0] left grid grid-cols-3 grid-rows-3">
              {colors[0].map((n, i) => (
                <div
                  key={i}
                  data-status={n}
                  className={`
                    w-full h-full
                    border-2
                    border-black
                    rounded
                    bg-zinc-800
                    data-[status=z]:bg-zinc-800
                    data-[status=r]:bg-red-500
                    data-[status=b]:bg-blue-500
                    data-[status=w]:bg-sky-50
                    data-[status=y]:bg-yellow-400
                  `}
                />
              ))}
            </div>
            <div className="relative h-32 w-32 origin-[0_0] right grid grid-cols-3 grid-rows-3">
              {colors[1].map((n, i) => (
                <div
                  key={i}
                  data-status={n}
                  className={`
                    w-full h-full
                    border-2
                    border-black
                    rounded
                    bg-zinc-800
                    data-[status=z]:bg-zinc-800
                    data-[status=r]:bg-red-500
                    data-[status=b]:bg-blue-500
                    data-[status=w]:bg-sky-50
                    data-[status=y]:bg-yellow-400
                  `}
                />
              ))}
            </div>
            <div className="relative h-32 w-32 origin-[0_0] top grid grid-cols-3 grid-rows-3">
              {colors[2].map((n, i) => (
                <div
                  key={i}
                  data-status={n}
                  className={`
                    w-full h-full
                    border-2
                    border-black
                    rounded
                    bg-zinc-800
                    data-[status=z]:bg-zinc-800
                    data-[status=r]:bg-red-500
                    data-[status=b]:bg-blue-500
                    data-[status=w]:bg-sky-50
                    data-[status=y]:bg-yellow-400
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {moves && (
        <div className="w-full text-center mt-2 text-sm">{moves.join(" ")}</div>
      )}
    </div>
  );
}
