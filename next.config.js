// module.exports = {
//   reactStrictMode: true,
//   experimental: {
//     reactRefresh: true
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: {
//     domains: ['picsum.photos']
//   }
// }


module.exports = {
  reactStrictMode: true,
  experimental: {
    reactRefresh: true,
    scrollRestoration: false
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['picsum.photos']
  }
}

// const path = require('path')
// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   assetPrefix: '.'
// }