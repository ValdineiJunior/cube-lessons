import { Row } from './row'

export type Notation = {
  colors: string[]
  moves: string[]
}

export function CubeOll({ notation }: { notation: Notation }) {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 h-52 w-48">
        <Row notation={notation} />
      </div>
    </>
  )
}
