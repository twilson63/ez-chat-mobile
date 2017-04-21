import React from 'react'
import { View, Text } from 'react-native'

const Row = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Text style={{ marginRight: 16, color: 'blue' }}>{props.author}</Text>
      <Text>{props.message}</Text>
    </View>
  )
}

export default Row
