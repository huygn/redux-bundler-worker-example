import { render, h } from 'preact'
import { Provider } from 'redux-bundler-preact'
import { getStoreProxy } from 'redux-bundler-worker'

import Layout from './components/layout'
import Worker from 'worker-loader!./worker.js'

const worker = new Worker()
const storeProxy = getStoreProxy(worker, true)

render(
  <Provider store={storeProxy}>
    <Layout />
  </Provider>,
  document.getElementById('app')
)
