module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin: prettier/recommended',
    'react-app',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off'
  }
}
