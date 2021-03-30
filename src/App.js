import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'

// import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  const [{user},dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (<Login />) :
        (<div className="app_body">
          <Router>
            {/* Slidbar */}
            <Sidebar />
            <Switch>
              {/* Chat */}
              {/* <Route path='/' exact>
            <Chat />
          </Route> */}
              <Route path='/rooms/:roomId'>
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>)
      }
    </div>
  );
}

export default App;
