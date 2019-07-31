const nextRoutes = require('next-routes')
const { routerConfig } = require('config/router')

const routes = (module.exports = nextRoutes())

if (Array.isArray(routerConfig)) {
  routerConfig.forEach(r => routes.add(r.route, r.page))
}
