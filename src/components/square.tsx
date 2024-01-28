export function Square({ bgColor }: { bgColor: string }) {
  return (
    <>
      <div
        data-status={bgColor}
        className={`
        w-full h-full
        border-4
        rounded
        bg-zinc-800
        border-zinc-800
        data-[status=z]:bg-zinc-800
        data-[status=y]:bg-yellow-400
        data-[status=l]:border-l-yellow-400
        data-[status=t]:border-t-yellow-400
        data-[status=r]:border-r-yellow-400
        data-[status=b]:border-b-yellow-400
        `}
      ></div>
    </>
  )
}
