import React from 'react'
import { View, Text } from 'react-native'
import { NativeRouter, Route } from 'react-router-native'
import { Provider } from 'react-redux'
import store from './store'

import Messages from './pages/messages'
import Nickname from './pages/nickname'

class App extends React.Component {
  render () {
    return (
      <NativeRouter>
        <View style={{ flex: 1 }}>
          <Route exact path='/' component={Messages} />
          <Route path='/nickname' component={Nickname} />
        </View>
      </NativeRouter>
    )
  }
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
