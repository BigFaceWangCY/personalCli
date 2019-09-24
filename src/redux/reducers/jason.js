import { CHANGE_TYPE } from '../constants/index'
const reducer = (state, { type, response }) => {
  if (type === CHANGE_TYPE) {
    return { ...state, worktype: Math.random() > 0.5 ? '打篮球' : '学习' }
  }
  return state
}

export default reducer
