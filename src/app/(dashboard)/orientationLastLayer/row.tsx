import { Notation } from './cubeOll'

export function Row({ notation }: { notation: Notation }) {
  return (
    <>
      {notation.colors.map((n, i) => (
        <Square key={i} bgColor={n} />
      ))}
      <div className="col-span-3 justify-self-center">
        {notation.moves.join(' ')}
      </div>
    </>
  )
}

export function Square({ bgColor }: { bgColor: string }) {
  return (
    <>
      <div
        data-status={bgColor}
        className={`
        w-full h-full
        border-4
        rounde
        bg-zinc-800
        border-zinc-800
        data-[status=z]:bg-pale-gray
        data-[status=y]:bg-pale-yellow
        data-[status=l]:border-l-pale-yellow
        data-[status=t]:border-t-pale-yellow
        data-[status=r]:border-r-pale-yellow
        data-[status=b]:border-b-pale-yellow
        `}
      ></div>
    </>
  )
}
