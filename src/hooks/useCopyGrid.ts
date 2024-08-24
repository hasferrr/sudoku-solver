import { useContext } from "react"

import GridContext from "../contexts/GridContext"

import { copy } from "../helpers/helpers"

export const useCopyGrid = () => {
  const { grid } = useContext(GridContext)
  return copy(grid)
}
