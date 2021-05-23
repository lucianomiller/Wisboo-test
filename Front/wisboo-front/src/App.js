import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Images from './components/Images';
import  MyImages  from "./components/MyImages";
import ReactNotifications from 'react-notifications-component';


function App() {
  return (
    <>
    <Switch>
      <Route path="/">
      <Navbar/>
      <ReactNotifications/>
      <Route exact path="/" component={Images}/>
      <Route exact path="/myimages" component={MyImages}/>
      </Route>
    </Switch>
    </>

  );
}

export default App;
