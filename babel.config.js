module.exports = {
  presets: [
    'next/babel',
    '@babel/preset-react',
    '@babel/preset-env',
    '@babel/preset-typescript'
  ],
  plugins: [['styled-components', { ssr: true }]]
}
