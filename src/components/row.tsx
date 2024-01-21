import { Square } from './square'

export function Row({ notation }) {
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
