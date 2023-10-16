import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  
} from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useDispatch } from "react-redux";
import { removeToDo } from "../redux states/to-dos";

type Props = {
  id: string;
  name: string;
  isDone: boolean;
};

const Task = (props: Props) => {
  const dispatch = useDispatch();

  const handleRemoveTask = (id:string) =>{
    dispatch(removeToDo(id));
  }
  return (
    <View style={styles.task}>
      <View style={styles.leftSide}>
        <TouchableOpacity onPress={() => handleRemoveTask(props.id)} style={props.isDone ? styles.removeTaskDone : styles.removeTask}/>
        <Text style={props.isDone ? styles.taskLabelDone : styles.taskLabel}>{props.name}</Text>
      </View>
      <Icon
        name="material-community"
        type="cards-diamond"
        color="#517fa4"
        style={styles.diamond}
      />
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  task: {
    backgroundColor: "#ffff",
    borderRadius: 10,
    width: "100%",
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  leftSide: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  removeTask: {
    height: 24,
    width: 24,
    backgroundColor: "#ad1d2b",
    borderRadius: 3,
    marginRight: 15,
  },
  removeTaskDone: {
    height: 24,
    width: 24,
    backgroundColor: "#1dad5c",
    borderRadius: 3,
    marginRight: 15,
  },
  taskLabel: {
    maxWidth: "80%",
  },
  taskLabelDone: {
    maxWidth: "80%",
    textDecorationLine: 'line-through',
  },
  diamond: {
    fontSize: 10,
  },
});
