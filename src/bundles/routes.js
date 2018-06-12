import { createRouteBundle } from 'redux-bundler'

export default createRouteBundle({
  '/': 'home',
  '/people': 'people',
  '/people/:id': 'personDetail'
})
