export function SquareF2l({ bgColor }: { bgColor: string }) {
  return (
    <>
      <div
        data-status={bgColor}
        className={`
          w-full h-full
          border-2
          border-black
          rounded
          bg-zinc-800
          data-[status=z]:bg-zinc-800
          data-[status=r]:bg-red-600
          data-[status=g]:bg-green-500
          data-[status=s]:bg-sky-50
          data-[status=y]:bg-yellow-400
          `}
      ></div>
    </>
  )
}
