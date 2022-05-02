import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from './Store';
import { Provider } from 'react-redux';
import Home from './Components/Home';
import Navigation from './Components/Navigation';

function App() {
  return (
    <>
    <Navigation/>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
