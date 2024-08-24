import { createContext, useContext, useRef, useState } from 'react'

const GridContext = createContext()

const createNewGrid = (n) => {
  return Array.from({ length: n }, () => Array(n).fill(''))
}

export const GridContextProvider = ({ children }) => {
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
  return (row, col, val) => {
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
