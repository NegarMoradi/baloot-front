import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import Layout from './components/layout';
import { Persistor, Store } from './store/store';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
        <Provider store={Store}>
          <PersistGate loading={null} persistor={Persistor}>
            <Layout />
          </PersistGate>
        </Provider>
        <Toaster/>
    </div>
  );
}

export default App;