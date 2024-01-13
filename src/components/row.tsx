import { Square } from './square'

export function Row() {
  return (
    <>
      <div className=" col-span-1">
        <Square />
        <Square />
        <Square />
      </div>
      <div className=" col-span-1">
        <Square />
        <Square />
        <Square />
      </div>
      <div className=" col-span-1">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}
