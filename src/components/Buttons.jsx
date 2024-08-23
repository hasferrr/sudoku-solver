import {
  clearInputValues,
  setInputValues,
  clearBackgroundColor,
  viewSolvedBoard,
} from '../helpers/sudokuLogic'

import { BD2, BD3, BD4, BD5, BD6, BD7 } from '../helpers/constant'

const Buttons = () => {
  return (
    <>
      <div className="buttons">
        <button onClick={viewSolvedBoard}>Solve</button>
        <button onClick={clearInputValues}>Clear</button>
        <button onClick={clearBackgroundColor}>Clear Color</button>
      </div>
      <div className="demo">
        <button onClick={() => { clearInputValues(); setInputValues(BD2); clearBackgroundColor() }}>BD2</button>
        <button onClick={() => { clearInputValues(); setInputValues(BD3); clearBackgroundColor() }}>BD3</button>
        <button onClick={() => { clearInputValues(); setInputValues(BD4); clearBackgroundColor() }}>BD4</button>
        <button onClick={() => { clearInputValues(); setInputValues(BD5); clearBackgroundColor() }}>BD5</button>
        <button onClick={() => { clearInputValues(); setInputValues(BD6); clearBackgroundColor() }}>BD6</button>
        <button onClick={() => { clearInputValues(); setInputValues(BD7); clearBackgroundColor() }}>BD7</button>
      </div>
    </>
  )
}

export default Buttons
