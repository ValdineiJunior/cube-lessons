export type CubeColor =
  | "red"
  | "green"
  | "blue"
  | "orange"
  | "yellow"
  | "white"
  | "gray"
  | "";

export type SquareColors = {
  leftBorder?: CubeColor;
  rightBorder?: CubeColor;
  topBorder?: CubeColor;
  bottomBorder?: CubeColor;
  centerColor?: CubeColor;
};

export type Notation = {
  colors: SquareColors[];
  moves: string[];
};

// Helper function to get color with default
export function getColor(
  color: CubeColor | undefined,
  defaultColor: CubeColor = "gray",
): CubeColor {
  return color || defaultColor;
}
