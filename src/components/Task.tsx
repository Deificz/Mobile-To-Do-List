import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'

type Props = {
  task: string,
}

const Task = (props: Props) => {
  return (
    <View style={styles.task}>
      <View style={styles.leftSide}>
          <TouchableOpacity style={styles.taskLogo}></TouchableOpacity>
          <Text style={styles.taskLabel}>{props.task}Task 1</Text>
      </View>
      <Icon
        name='material-community'
        type='cards-diamond'
        color='#517fa4'
        style={styles.diamond}
      />
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
  task:{
    backgroundColor: '#ffff',
    borderRadius: 10,
    width: '100%',
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  leftSide:{
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center"
  },
  taskLogo:{
    height: 24,
    width: 24,
    backgroundColor:"#5a9dfa",
    borderRadius: 3,
    marginRight: 15,
  },
  taskLabel:{
    maxWidth: "80%"
  },
  diamond:{
    fontSize: 10,
  }
})