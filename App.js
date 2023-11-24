import { Provider } from 'react-redux';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './routes/Tab';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs stores={store} />
      </NavigationContainer>
    </Provider>
  );
}
