import Link from 'next/link'

export function Header() {
  return (
    <div
      className="bg-blue-200 p-3 flex flex-row gap-x-4
"
    >
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/firstTwoLayers">F2L</Link>
      </div>
      <div>
        <Link href="/orientationLastLayer">OLL</Link>
      </div>
      <div>
        <Link href="/permutationLastLayer">PLL</Link>
      </div>
    </div>
  )
}
