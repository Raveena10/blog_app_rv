import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from './Store';
import { Provider } from 'react-redux';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import Blog_view from './Components/Blog_view'

function App() {
  return (
    <>
    <Navigation/>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Show" exact component={Blog_view}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
