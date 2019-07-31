module.exports = {
  extends: require.resolve('eslint-config-airbnb-base),
  plugins: ['react-hooks', 'react'],
  settings: {
    react: {
      version: '16.8',
      flowVersion: '0.75'
    },
    'import/resolver': {
      'babel-module': {}
    }
  },
  globals: {
    window: true,
    process: true,
    document: true,
    localStorage: true,
    sessionStorage: true,
    HTMLElement: true,
    MouseEvent: true,
    Document: true,
    WebSocket: true,
    KeyboardEvent: true,
    HTMLInputElement: true
  },
  rules: {
    'global-require': 0,
    'no-underscore-dangle': 0,
    'import/no-unresolved': [
      'error',
      {
        ignore: ['roe', 'next', 'react', '@binance/uikit']
      }
    ],
    'import/no-extraneous-dependencies': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-use-before-define': 0,
    'space-unary-ops': 0,
    'react/prop-types': 0
  }
}
