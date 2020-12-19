import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import BookingTicket from './components/BookingTicket/BookingTicket';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login/:name">
            <Login></Login>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/bookingTicket">
            <BookingTicket></BookingTicket>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
