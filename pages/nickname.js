import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import { connect } from 'react-redux'

const Nickname = props => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Set Your Nickname</Text>
      <TextInput
        value={props.nickname}
        onChangeText={
          txt => props.dispatch({ type: 'SET_NICKNAME', payload: txt })
        }
        style={{
          borderWidth: 1,
          borderColor: '#000',
          padding: 4,
          marginLeft: 16,
          height: 50,
          width: 300
        }}
        placeholder='nickname'
      />
      <Link to='/'>
        <Text style={{ color: 'blue' }}>Done</Text>
      </Link>
    </View>
  )
}

export default connect(state => state)(Nickname)
