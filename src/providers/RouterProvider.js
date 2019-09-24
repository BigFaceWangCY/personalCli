import { RouterContext } from './context'

const RouterProvider = ({ children, router }) => (
  <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
)

export default RouterProvider
