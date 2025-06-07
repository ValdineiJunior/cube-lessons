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
