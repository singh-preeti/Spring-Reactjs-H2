import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddEmployee from './components/add-employee';
import Home from './components/home';
import Header from './components/header';
import EditEmployee from './components/edit-employee';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            
            <Route path="/add">
              <AddEmployee />
            </Route>
            <Route path="/:id">
              <EditEmployee />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
    );
}

export default App;
