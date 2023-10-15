import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Task from "../components/Task";
import { Icon } from "@rneui/themed";
import { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, removeToDo } from "../redux states/to-dos";
type Props = {};

const Home = (props: Props) => {
  const [currentTask, setCurrentTask] = useState("");

  const tasks = useSelector((state: RootState) => state.toDo.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addToDo(currentTask));
    console.log(currentTask);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-do-List</Text>
      {/* <Task />
      <Task /> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.taskInputWrapper}
      >
        <TextInput
          style={styles.taskInput}
          placeholder="Write a task"
          onChangeText={(input) => setCurrentTask(input)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Icon
              name="font-awesome"
              type="plus"
              color="#00000"
              style={styles.addIcon}
            />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 40,
    fontWeight: "bold",
  },
  taskInputWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  taskInput: {
    padding: 15,
    width: 250,
    backgroundColor: "#ffff",
    borderRadius: 60,
    borderColor: "#5a9dfa",
    borderWidth: 1,
    marginRight: 20,
  },
  addWrapper: {
    borderRadius: 200,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5a9dfa",
  },
  addIcon: {
    color: "#fffff",
  },
});
