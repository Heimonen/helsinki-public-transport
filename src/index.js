
import React from 'react'
import { render } from 'react-dom'
import SearchList from './components/List'

import { Provider } from 'react-redux'
import { store } from './redux'

render(
  <Provider store={store}>
    <SearchList />
  </Provider>,
  document.getElementById('root')
)
