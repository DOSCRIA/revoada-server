module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@api/entities': './src/api/entities',
        '@api/middlewares': './src/api/middlewares',
        '@api/provider': './src/api/provider',
        '@api/repositories': './src/repositories',
        '@api/routes': './src/api/routes',
        '@api/useCases': './src/api/useCases',
        '@prisma/client': './prisma/client'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}