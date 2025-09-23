declare module "cubejs" {
  const Cube: {
    initSolver: () => void;
    scramble: () => string;
  };
  export default Cube;
}
