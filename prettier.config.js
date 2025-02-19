module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  overrides: [
    {
      files: '*.scss',
      options: {
        parser: 'scss',
      },
    },
  ],
}
