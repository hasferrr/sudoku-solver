import { useContext } from "react"
import GridContext from "../contexts/GridContext"

export const useCopyGrid = () => {
  const { grid, SIZE } = useContext(GridContext)
  const newGrid: number[][] = Array(SIZE)
  for (let i = 0; i < SIZE; i++) newGrid[i] = [...grid[i]]
  return newGrid
}
