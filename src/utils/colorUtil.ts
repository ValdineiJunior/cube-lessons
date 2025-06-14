import { CubeColor } from "@/types/types";

// Helper function to get color with default
export function getColor(
  color: CubeColor | undefined,
  defaultColor: CubeColor = "gray",
): CubeColor {
  return color || defaultColor;
}
