import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import Layout from './components/layout';
import { Persistor, Store } from './store/store';

function App() {
  return (
    <div className="App">
        <Provider store={Store}>
          <PersistGate loading={null} persistor={Persistor}>
            <Layout />
          </PersistGate>
        </Provider>
    </div>
  );
}

export default App;