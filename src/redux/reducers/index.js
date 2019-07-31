import Immutable from 'seamless-immutable'
import initialState from '../initData'

import jason from './jason'

const combineReducers = reducers => (state, action) =>
  Object.keys(reducers).reduce((nextState, key) => {
    const reducer = reducers[key]
    const currentDomainState = nextState[key] || Immutable({})
    const nextDomainState = reducer(currentDomainState, action)
    if (nextDomainState !== currentDomainState) {
      nextState = nextState.set(key, nextDomainState)
    }
    return nextState
  }, state)

export const reducer = combineReducers({ jason })

export const init = (actions = []) =>
  actions.reduce((state, action) => (action ? reducer(state, action) : state), initialState)

export { default as initialState } from '../initData'
