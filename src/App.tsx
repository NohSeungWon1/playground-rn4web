import { View } from 'react-native';
import { Provider } from 'react-redux';
import First from './component/First';
import store from './reduxs/store';

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
