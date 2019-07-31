module.exports = {
  presets: [
    [
      'next/babel',
      {
        'class-properties': {
          loose: true,
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-flow-strip-types',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    '@babel/proposal-optional-chaining',
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
      },
    ]
  ]
}
