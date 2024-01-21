import { Row } from './row'

type Notations = {
  notation: {
    colors: string[]
    moves: string[]
  }
}

export function Cube({ notation }: Notations) {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 h-52 w-48">
        <Row notation={notation} />
      </div>
    </>
  )
}
