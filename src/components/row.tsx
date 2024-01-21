import { Square } from './square'

type Notations = {
  colors: string[]
  moves: string[]
}

export function Row({ notation }: Notations) {
  // const notations = {
  //   case1: {
  //     colors: ['w', 'r', 'o', 'y', 'b', 'g', 'w', 'g', 'w'],
  //     moves: ['R', 'U', "R'", 'U', 'R', 'U2', "R'"],
  //   },
  // }

  return (
    <>
      {notation.colors.map((n, i) => (
        <Square key={i} bgColor={n} />
      ))}
      <div>{notation.moves}</div>
    </>
  )
}
