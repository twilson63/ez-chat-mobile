import React from 'react'

import { View, TextInput } from 'react-native'

const MessageForm = props => {
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        value={props.value}
        onChangeText={props.onChange}
        placeholder='Say Something Interesting...'
        onSubmitEditing={props.onAddItem}
        blurOnSubmit
        returnKeyType='done'
        style={{ flex: 1, height: 50, marginLeft: 16 }}
      />
    </View>
  )
}

export default MessageForm
