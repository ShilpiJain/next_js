module.exports = {
    basePath: '/docs',
    
    async rewrites() {
        return [
          {
            source: '/about',
            destination: '/',
          },
        ]
      },
}