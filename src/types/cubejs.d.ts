declare module "cubejs" {
  class Cube {
    static fromString(str: string): Cube;
    static inverse(algorithm: string): string;
    move(algorithm: string): void;
    asString(): string;
    isSolved(): boolean;
  }

  export = Cube;
}
