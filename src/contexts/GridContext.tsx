import { createContext, useContext, useRef, useState } from 'react'

interface GridContextType {
  grid: number[][]
  setGrid: React.Dispatch<React.SetStateAction<number[][]>>
  SIZE: number
  inputRefs: React.MutableRefObject<(HTMLInputElement)[]>
}

const GridContext = createContext<GridContextType>(null!)

const createNewGrid = (n: number) => {
  return Array.from({ length: n }, () => Array(n).fill(''))
}

export const GridContextProvider = ({ children }: { children?: React.ReactNode }) => {
  const SIZE = 9
  const [grid, setGrid] = useState(createNewGrid(SIZE))
  const inputRefs = useRef(Array(SIZE * SIZE))

  return (
    <GridContext.Provider value={{ grid, setGrid, SIZE, inputRefs }}>
      {children}
    </GridContext.Provider>
  )
}

export const useGrid = () => {
  return useContext(GridContext).grid
}

export const useSetGrid = () => {
  return useContext(GridContext).setGrid
}

export const useUpdateGrid = () => {
  const { grid, setGrid, SIZE } = useContext(GridContext)
  return (row: number, col: number, val: number) => {
    const newGrid = Array(SIZE)
    for (let i = 0; i < SIZE; i++) newGrid[i] = [...grid[i]]
    newGrid[row][col] = val
    setGrid(newGrid)
  }
}

export const useResetGrid = () => {
  const { setGrid, SIZE } = useContext(GridContext)
  return () => setGrid(createNewGrid(SIZE))
}

export const useGridSize = () => {
  return useContext(GridContext).SIZE
}

export const useInputRefs = () => {
  return useContext(GridContext).inputRefs
}

export default GridContext
