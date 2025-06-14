export type CubeColor =
  | "red"
  | "green"
  | "blue"
  | "orange"
  | "yellow"
  | "white"
  | "gray";

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

export interface CubeCase2D {
  case: string;
  name: string;
  group: string;
  notation: Notation;
}

export type CubeCase3D = {
  name: string;
  colors: string[][];
  description: string;
};
