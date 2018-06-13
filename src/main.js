import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'redux-bundler-react'
import Layout from './components/layout'
import { getStoreProxy } from 'redux-bundler-worker'

const worker = new Worker('/worker.js')
const storeProxy = getStoreProxy(worker, true)

render(
  <Provider store={storeProxy}>
    <Layout />
  </Provider>,
  document.getElementById('app')
)
