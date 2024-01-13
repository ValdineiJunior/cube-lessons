import { Row } from './row'

export function Cube() {
  return (
    <>
      <div className="mb-2">
        <div className="grid grid-cols-3 grid-rows-3 h-36 w-36 ">
          <Row />
        </div>
      </div>
    </>
  )
}
