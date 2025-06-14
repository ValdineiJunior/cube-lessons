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

export interface CubeCase2D {
  name: string;
  group: string;
  colors: SquareColors[];
  moves: string[];
}

export type CubeCase3D = {
  name: string;
  colors: string[][];
  description: string;
};
