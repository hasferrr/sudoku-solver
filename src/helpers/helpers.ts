export const copy = (grid: number[][]): number[][] => {
  const newGrid: number[][] = Array(grid.length)
  for (let i = 0; i < grid[0].length; i++) newGrid[i] = [...grid[i]]
  return newGrid
}
