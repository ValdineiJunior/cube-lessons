export type CubeColor =
  | "red"
  | "green"
  | "blue"
  | "orange"
  | "yellow"
  | "white"
  | "gray";

export type SquareColorDetail = {
  leftBorder?: CubeColor;
  rightBorder?: CubeColor;
  topBorder?: CubeColor;
  bottomBorder?: CubeColor;
  centerColor?: CubeColor;
};

export interface CubeInfo2D {
  name: string;
  group: string;
  colors: SquareColorDetail[];
  moves: string;
}

export type CubeInfo3D = {
  name: string;
  colors: string[][];
  description: string;
};
