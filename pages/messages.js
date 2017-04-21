import React from 'react'
import { View, ListView, Text, TextInput } from 'react-native'

import Row from '../components/row'
import MessageForm from '../containers/message-form'

import { connect } from 'react-redux'
import { Link } from 'react-router-native'
import { addMessage } from '../actions'

const Messages = props => (
  <View style={styles.container}>
    <ListView
      style={{ flex: 0.8, paddingTop: 50 }}
      enableEmptySections
      dataSource={props.dataSource}
      renderRow={({ _id, ...msg }) => <Row key={_id} {...msg} />}
    />
    <View style={{ flex: 0.1 }}>
      <TextInput
        value={props.newMessage}
        onChangeText={
          txt => props.dispatch({ type: 'SET_MESSAGE', payload: txt })
        }
        placeholder='Say Something Interesting...'
        onSubmitEditing={() => {
          addMessage(
              props.nickname,
              props.newMessage
            ).then(res => props.dispatch({ type: 'SET_MESSAGE', payload: '' }))
        }}
        blurOnSubmit
        returnKeyType='done'
        style={{ flex: 1, height: 50, width: 300, marginLeft: 16 }}
      />
    </View>
    <View style={{ flex: 0.1 }}>
      <Link to='/nickname'>
        <Text style={{ color: 'blue' }}>{props.nickname}</Text>
      </Link>
    </View>
  </View>
)

// <MessageForm />
const connector = connect(state => state)
export default connector(Messages)

const styles = {
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
}
