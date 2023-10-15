import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import Task from "./src/components/Task";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Icon } from "@rneui/themed";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.title}>To-do-List</Text>
          <Task />
          <Task />
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.taskInputWrapper}
          >
            <TextInput style={styles.taskInput} placeholder="Write a task" />
            <TouchableOpacity>
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
      </Provider>
    </SafeAreaProvider>
  );
}

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
    padding:15,
    width: 250,
    backgroundColor: "#ffff",
    borderRadius: 60,
    borderColor: "#5a9dfa",
    borderWidth: 1,
    marginRight: 20,
  },
  addWrapper:{
    borderRadius: 200,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5a9dfa",
  },
  addIcon:{
    color: "#fffff",
  }
});
