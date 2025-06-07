import { Notation, getColor } from "../types/cube";

interface CubeFaceProps {
  notation: Notation;
}

export function CubeFace({ notation }: CubeFaceProps) {
  return (
    <div className="flex flex-col items-center w-72">
      <div className="grid grid-cols-3 grid-rows-3 h-52 w-52">
        {notation.colors.map((color, i) => (
          <div
            key={i}
            className={`
              w-full h-full
              border-4
              rounded
              ring-1
              ring-zinc-900
              ${getColor(color.centerColor) === "gray" ? "bg-zinc-600" : ""}
              ${getColor(color.centerColor) === "green" ? "bg-green-500" : ""}
              ${getColor(color.centerColor) === "red" ? "bg-red-500" : ""}
              ${getColor(color.centerColor) === "blue" ? "bg-blue-500" : ""}
              ${getColor(color.centerColor) === "orange" ? "bg-orange-500" : ""}
              ${getColor(color.centerColor) === "yellow" ? "bg-pale-yellow" : ""}
              ${getColor(color.leftBorder) === "gray" ? "border-l-zinc-900" : ""}
              ${getColor(color.leftBorder) === "green" ? "border-l-green-500" : ""}
              ${getColor(color.leftBorder) === "red" ? "border-l-red-500" : ""}
              ${getColor(color.leftBorder) === "blue" ? "border-l-blue-500" : ""}
              ${getColor(color.leftBorder) === "orange" ? "border-l-orange-500" : ""}
              ${getColor(color.leftBorder) === "yellow" ? "border-l-pale-yellow" : ""}
              ${getColor(color.topBorder) === "gray" ? "border-t-zinc-900" : ""}
              ${getColor(color.topBorder) === "green" ? "border-t-green-500" : ""}
              ${getColor(color.topBorder) === "red" ? "border-t-red-500" : ""}
              ${getColor(color.topBorder) === "blue" ? "border-t-blue-500" : ""}
              ${getColor(color.topBorder) === "orange" ? "border-t-orange-500" : ""}
              ${getColor(color.topBorder) === "yellow" ? "border-t-pale-yellow" : ""}
              ${getColor(color.rightBorder) === "gray" ? "border-r-zinc-900" : ""}
              ${getColor(color.rightBorder) === "green" ? "border-r-green-500" : ""}
              ${getColor(color.rightBorder) === "red" ? "border-r-red-500" : ""}
              ${getColor(color.rightBorder) === "blue" ? "border-r-blue-500" : ""}
              ${getColor(color.rightBorder) === "orange" ? "border-r-orange-500" : ""}
              ${getColor(color.rightBorder) === "yellow" ? "border-r-pale-yellow" : ""}
              ${getColor(color.bottomBorder) === "gray" ? "border-b-zinc-900" : ""}
              ${getColor(color.bottomBorder) === "green" ? "border-b-green-500" : ""}
              ${getColor(color.bottomBorder) === "red" ? "border-b-red-500" : ""}
              ${getColor(color.bottomBorder) === "blue" ? "border-b-blue-500" : ""}
              ${getColor(color.bottomBorder) === "orange" ? "border-b-orange-500" : ""}
              ${getColor(color.bottomBorder) === "yellow" ? "border-b-pale-yellow" : ""}
              [&:nth-child(1)]:border-t-8 [&:nth-child(1)]:border-l-8
              [&:nth-child(2)]:border-t-8
              [&:nth-child(3)]:border-t-8 [&:nth-child(3)]:border-r-8
              [&:nth-child(4)]:border-l-8
              [&:nth-child(6)]:border-r-8
              [&:nth-child(7)]:border-l-8 [&:nth-child(7)]:border-b-8
              [&:nth-child(8)]:border-b-8
              [&:nth-child(9)]:border-b-8 [&:nth-child(9)]:border-r-8
            `}
          />
        ))}
      </div>
      <div className="w-full text-center mt-2 text-sm">
        {notation.moves.join(" ")}
      </div>
    </div>
  );
}
