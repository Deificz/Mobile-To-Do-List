import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Home from "./src/pages/Home";

export default function App() {
 
  
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Home/>
      </Provider>
    </SafeAreaProvider>
  );
}

