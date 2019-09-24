import React from 'react'
import { reducer, initialState } from 'reducers'
import { compose, createStore } from 'redux'
import { StoreContext as ReduxContext } from 'redux-react-hook'

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  })
  : compose

const store = createStore(reducer, initialState, composeEnhancers())

const StoreProvider = ({ children }) => (
  <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
)

export default StoreProvider
