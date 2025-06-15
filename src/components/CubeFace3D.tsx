interface CubeFace3DProps {
  colors: string[];
  position: "left" | "right" | "top";
}

export function CubeFace3D({ colors, position }: CubeFace3DProps) {
  return (
    <div
      className={`relative h-32 w-32 origin-[0_0] ${position} grid grid-cols-3 grid-rows-3`}
    >
      {colors.map((n, i) => (
        <div
          key={i}
          data-status={n}
          className={`
            w-full h-full
            border-2
            border-black
            rounded
            bg-zinc-800
            data-[status=z]:bg-zinc-800
            data-[status=r]:bg-red-500
            data-[status=b]:bg-blue-500
            data-[status=w]:bg-sky-50
            data-[status=y]:bg-yellow-400
            data-[status=g]:bg-green-500
            data-[status=o]:bg-orange-500
          `}
        />
      ))}
    </div>
  );
}
