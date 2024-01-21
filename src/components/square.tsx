export function Square({ bgColor }: { bgColor: string }) {
  console.log(bgColor)
  return (
    <>
      <div
        data-status={bgColor}
        className={`
        w-full h-full
        border-zinc-950
        border-2
        rounded
        data-[status=z]:bg-zinc-400
        data-[status=r]:bg-red-600
        data-[status=o]:bg-orange-500
        data-[status=y]:bg-yellow-400
        data-[status=g]:bg-green-500
        data-[status=b]:bg-sky-400
        data-[status=w]:bg-sky-50
        `}
      ></div>
    </>
  )
}
