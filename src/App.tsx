import { View } from 'react-native';
import { Provider } from 'react-redux';
import First from './component/First';
import store from './reduxs/store';
import webVitals from './condition-check/webVitals';
webVitals(console.log);

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <First />
      </View>
    </Provider>
  );
}

export default App;
