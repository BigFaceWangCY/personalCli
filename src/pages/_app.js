import App, { Container } from 'next/app'
import StoreProvider from 'providers/StoreProvider'
// import RouterProvider from 'providers/RouterProvider'
import GlobalStyle from 'providers/GlobalStyleProvider'

class MainApp extends App {
  render () {
    const {
      // router,
      Component,
      pageProps: { initialActions, ...otherProps }
    } = this.props

    return (
      <Container>
        <GlobalStyle />
        <StoreProvider initialActions={initialActions}>
          <Component {...otherProps} />
        </StoreProvider>
        {/* <GlobalStyle />
        <RouterProvider router={router}>
          <StoreProvider initialActions={initialActions} />
        </RouterProvider> */}
      </Container>
    )
  }
}

export default MainApp
